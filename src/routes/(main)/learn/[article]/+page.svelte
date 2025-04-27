<script lang="ts">
    import BreadCrumbs from '$lib/components/BreadCrumbs.svelte'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
    import TOC from '$lib/components/TOC.svelte'
    import { format } from 'date-fns'
    import { generateTOC } from '$lib/utils.js'

    const { data } = $props()
    const article = data.article[0]
    let toc = $state()

    $effect(() => {
        toc = generateTOC('content')
    })
</script>

<section class="header">
    <BreadCrumbs />
    <div class="container">
        <div class="header-inner">
            <div>
                <h1>{article.title}</h1>
                <div class="summary">{article.description}</div>
                <div class="meta-item">
                    <div>
                        <strong>Updated:</strong>
                        {format(article.date_updated, 'MMMM dd, yyyy')}
                    </div>
                    <div>
                        <strong>Written:</strong>
                        {format(article.date_updated, 'MMMM dd, yyyy')}
                    </div>
                </div>
                <div class="meta-item">
                    <div class="verification">
                        <div>
                            <div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8 0.666504L2 3.33317V7.33317C2 11.0332 4.56 14.4932 8 15.3332C11.44 14.4932 14 11.0332 14 7.33317V3.33317L8 0.666504ZM6.66667 11.3332L4 8.6665L4.94 7.7265L6.66667 9.4465L11.06 5.05317L12 5.99984L6.66667 11.3332Z"
                                        fill="#006642"
                                    >
                                    </path>
                                </svg><span class=""
                                    >This article was written by a licensed loan
                                    officer</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="article-card-image">
                    <img
                        src={`https://production-directus.8rjfpz.easypanel.host/assets/${article.image?.filename_disk}`}
                        alt={article.image?.description}
                    />
                    <!-- {JSON.stringify(article.image?.filename_disk)} -->
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container content-wrapper">
        <div class="main-content">
            <div class="toc-wrapper">
                <h3>Table of Contents</h3>
                <TOC {toc} />
            </div>
            <div class="content">
                <div>
                    {@html article.content1}
                </div>
            </div>
            <div>
                {#if article?.ad1}
                    <SimpleCta
                        title={article.ad1.title}
                        subTitle={article.ad1.subtitle}
                        description={article.ad1.text}
                        buttonLink={article.ad1.button_link}
                    />
                {/if}
            </div>
            <div class="content">
                {#if article?.content2}
                    <div>
                        {@html article.content2}
                    </div>
                {/if}
            </div>
            <div>
                {#if article}
                    <SimpleCta
                        title={article.ad2?.title}
                        subTitle={article.ad2?.subtitle}
                        description={article.ad2?.text}
                        buttonLink={article.ad2?.button_link}
                    />
                {/if}
            </div>
        </div>
        <aside>
            <div class="sticky-div">
                <div class="aside-item">
                    <h3>Table of Contents</h3>
                    <TOC {toc} />
                </div>
                <hr />
                <div class="aside-item">
                    <h3>Resources</h3>
                    <a href="/contact">Contact</a>
                    <a href="/about">About us</a>
                    <a href="/licensing">Licensing</a>
                </div>
            </div>
        </aside>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    .article-card-image {
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
            border-radius: 4px;
        }
    }
    .toc-wrapper {
        display: block;
    }

    .verification {
        color: var(--green-600);
        background: var(--green-100);
        font-size: var(--text-xs);
        padding: 4px 8px;
        border-radius: 4px;
        width: fit-content;
        div {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }
    /* .content { */
    /*     max-width: 800px; */
    /* } */
    .meta-item {
        display: flex;
        flex-direction: column;
        margin-top: var(--space);
    }

    .header {
        margin: 0;
        background: var(--green-600);
        padding: var(--space-md) 0;
        color: white;

        .header-inner {
            padding: var(--space-lg) 0;
            display: grid;
            gap: var(--space-lg);
        }
    }

    .summary {
        margin-bottom: var(--space-lg);
    }

    aside {
        display: none;
    }

    @media (min-width: base.$lg) {
        .toc-wrapper {
            display: none;
        }
        .meta-item {
            flex-direction: row;
            gap: var(--space);
            margin-top: var(--space);
        }

        .header {
            .header-inner {
                padding: var(--space-lg) 0;
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: var(--space-xxl);
            }
        }

        .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 0.5fr;
            gap: var(--space-xl);
        }

        aside {
            display: flex;
            height: 100%;
            .sticky-div {
                display: flex;
                flex-direction: column;
                background: var(--grey-100);
                border-radius: 4px;
                padding: var(--space);
                height: fit-content;
                position: sticky;
                top: var(--space-lg);
                flex: 1;
            }

            .aside-item {
                display: flex;
                flex-direction: column;
                margin-bottom: var(--space);

                h3 {
                    margin: 0;
                    padding: 0;
                    margin-bottom: var(--space);
                }
            }
        }
    }
</style>
