<script lang="ts">
    /*
     * takes in 4 posts and organizes them into one big one + three small ones on
     * the right for desktop and just three articles for normal
     *
     *
     * */

    // a list of 4 articles
    const { articles } = $props()
    console.log(articles.slice(1))
</script>

<section>
    <div class="container">
        <div class="main-wrapper">
            <div class="left">{articles[0].title}</div>
            <div class="right">
                {#each Array(articles.slice(1)) as article}
                    <div class="article-wrapper">
                        <div class="article-title">{article.title}</div>
                        <div class="article-image">{article.title}</div>
                        <div class="article-description">
                            {article.short_description}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
</style>
