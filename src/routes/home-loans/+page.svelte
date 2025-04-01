<script lang="ts">
    let { data } = $props()
</script>

<section>
    <div class="container">
        <div class="grid">
            {#each data.result.Loan_Programs as loan}
                {#if loan.loan_page}
                    <a
                        class="card-link-wrapper"
                        href={`/home-loans/${loan.loan_page.slug}`}
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
                {:else}
                    <a class="card-link-wrapper" href={`/home-loans/${''}`}>
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
        font-size: 12px;
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
        font-size: var(--text-sm);
        margin: 0;
    }

    .card-link-wrapper {
        color: unset;

        .card {
            /* border: solid 1px var(--grey-500); */
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
