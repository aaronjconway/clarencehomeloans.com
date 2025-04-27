<script lang="ts">
    /*
     * takes in 4 posts and organizes them into one big one + three small ones on
     * the right for desktop and just three articles for normal
     *
     *
     * */

    interface Article {
        slug: string
        id: string
        status: string
        sort: string | null
        user_created: string
        date_created: string
        user_updated: string
        date_updated: string
        title: string
        description: string
        tags: string[]
        image: any
        test: any
    }
    // a list of 4 articles
    const { articles }: { articles: Article[] } = $props()
</script>

<section>
    <div class="container">
        <div class="main-wrapper">
            <div class="left">{articles[0].title} test</div>
            <div class="right">
                {#each Array.from(articles.slice(1)) as article}
                    <a href={`/learn/${article.slug}`}>
                        <div class="article-card-wrapper">
                            <div class="article-card-title">
                                {article.title}
                            </div>
                            <div class="article-card-image">
                                <img
                                    src={`https://production-directus.8rjfpz.easypanel.host/assets/${article.image?.filename_disk}`}
                                    alt={article.image?.description}
                                />
                                <!-- {JSON.stringify(article.image?.filename_disk)} -->
                            </div>
                            <div class="article-card-description">
                                {article.description}
                            </div>
                        </div>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .article-card-wrapper {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        max-width: 350px;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
    }

    .article-card-title {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 16px;
        color: #333;
        text-align: center;
    }

    .article-card-image {
        width: 100%;
        overflow: hidden;
        img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
        }
    }

    .article-card-description {
        padding: 16px;
        font-size: 1rem;
        color: #555;
        line-height: 1.5;
        text-align: left;
        margin-bottom: 16px;

        // Truncate description if too long
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .article-card-wrapper {
            max-width: 100%;
            margin: 0 auto;
        }

        .article-card-title {
            font-size: 1.25rem;
        }

        .article-card-description {
            font-size: 0.95rem;
        }
    }
</style>
