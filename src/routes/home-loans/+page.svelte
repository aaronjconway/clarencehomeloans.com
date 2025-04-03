<script lang="ts">
    let { data } = $props()

    // places the data into cateogy bucket and cleans up bad slugs
    function aggregateCategories(data: any) {
        let obj = {}
        for (const key of data) {
            const cat = key.Category
            ;(obj[cat] ||= []).push(key)
        }
        return obj as any
    }

    const categories = aggregateCategories(data.result)
    console.log(categories)
</script>

<section>
    <div class="container">
        <h2>Conventional</h2>
        {#each categories.conventional as loan}
            <div class="grid">
                {#if loan.slug}
                    <a
                        class="card-link-wrapper"
                        href={`/home-loans/${loan.slug.slug}`}
                    >
                        <div class="card">
                            <div class="title">{loan.Name}</div>
                            <div class="summary-wrapper">
                                <p class="short-summary">
                                    {loan.short_summary}
                                </p>
                            </div>
                            <div class="tag-wrapper">
                                {#each loan.tags as tag}
                                    <div class="tag">{tag}</div>
                                {/each}
                            </div>
                        </div>
                    </a>
                {/if}
            </div>
        {/each}
        <h2>FHA</h2>
        <div class="grid">
            {#each categories.fha as loan}
                {#if loan.slug}
                    <a
                        class="card-link-wrapper"
                        href={`/home-loans/${loan.slug.slug}`}
                    >
                        <div class="card">
                            <div class="title">{loan.Name}</div>
                            <div class="summary-wrapper">
                                <p class="short-summary">
                                    {loan.short_summary}
                                </p>
                            </div>
                            <div class="tag-wrapper">
                                {#each loan.tags as tag}
                                    <div class="tag">{tag}</div>
                                {/each}
                            </div>
                        </div>
                    </a>
                {/if}
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    .tag-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 2px;
    }

    .tag {
        background: var(--green-100);
        border-radius: 4px;
        width: fit-content;
        white-space: nowrap;
        font-weight: 600;
        color: var(--grey-800);
        padding: 2px 8px;
        font-size: var(--space-sm);
    }

    .title {
        font-weight: bold;
        font-size: var(--text-lg);
    }

    .summary-wrapper {
        /* border: solid 1px; */
        height: 100%;
        padding: var(--space-xs) 0;
        margin: 0;
    }

    .short-summary {
        font-size: var(--text);
        margin: 0;
    }

    .card-link-wrapper {
        color: unset;

        .card {
            padding: var(--space-sm);
            border-radius: 4px;
            background: var(--grey-100);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            &:hover {
                border-radius: 4px;
                background: var(--grey-200);
            }
        }
    }

    .grid {
        gap: var(--space-md);
    }

    /* Media query for mobile devices */
    @media (max-width: base.$sm) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: base.$md) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: base.$lg) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
