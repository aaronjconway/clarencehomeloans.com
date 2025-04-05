<script lang="ts">
    let { data } = $props()

    let loanPrograms = data.loanPrograms

    let tagSelection = $state('All')

    // take in data aggregate on the
    function aggregateCategories(data: any, tag: string) {
        let obj: Record<string, Array<Object>> = {}
        for (const item of data) {
            const cat = item.Category
            item.slug ??= { slug: '' }

            if (tag == 'All') {
                ;(obj[cat] ||= []).push(item)
            }
            if (item.tags.includes(tag)) {
                ;(obj[cat] ||= []).push(item)
            }
        }
        return obj as any
    }

    const categories = $derived(aggregateCategories(loanPrograms, tagSelection))
    //TODO:--
    //the slug.slug is gross

    // TODO: match the tag values to the selection in the aggregate categories
    // so you don't have to if blah so many times.
</script>

<section>
    <div class="container">
        <header>
            <h1>Home loan options for everyone</h1>
            <div class="button-group">
                <label class:selected={tagSelection === 'All'}>
                    <input type="radio" bind:group={tagSelection} value="All" />
                    All
                </label>
                <label class:selected={tagSelection === 'Credit Flexible'}>
                    <input
                        type="radio"
                        bind:group={tagSelection}
                        value="Credit Flexible"
                    />
                    Low Credit Friendly
                </label>

                <label class:selected={tagSelection === 'FTHB'}>
                    <input
                        type="radio"
                        bind:group={tagSelection}
                        value="FTHB"
                    />
                    First Time Home Buyers
                </label>

                <label class:selected={tagSelection === 'Investors'}>
                    <input
                        type="radio"
                        bind:group={tagSelection}
                        value="Investors"
                    />
                    Alternative Loan Types
                </label>
                <label class:selected={tagSelection === 'Low Down'}>
                    <input
                        type="radio"
                        bind:group={tagSelection}
                        value="Low Down"
                    />
                    Lowest Down
                </label>
            </div>
            <div class="selection-wrapper">
                {#if tagSelection == 'Low Down'}
                    <div>
                        Keep your out of pocket expenses low with options
                        between 0% and 3.5%
                    </div>
                {/if}
            </div>
        </header>
        <div class="category-wrapper">
            {#if categories.conventional.length > 0}
                <h2>Conventional Loans</h2>
                <hr />
            {/if}
            <div class="grid">
                {#each categories.conventional as loan}
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
                {/each}
            </div>
        </div>
        {#if categories.fha.length > 0}
            <h2>FHA loans</h2>
            <hr />
        {/if}
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

    .selection-wrapper {
        text-align: center;
        font-size: var(--text-md);
        width: 100%;
        margin-bottom: var(--space-xl);
    }

    .button-group {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        font-weight: bold;
        padding: var(--space);
        margin-bottom: var(--space-xl);
    }

    .button-group label {
        padding: var(--space);
        border: solid 1px var(--grey-300);
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
        transition: all 200ms;

        &:hover {
            background: var(--grey-200);
            border: solid 1px var(--grey-400);
        }
    }

    /* Hide actual radio buttons */
    .button-group input[type='radio'] {
        display: none;
    }

    /* Style when selected */
    .button-group label.selected {
        background-color: var(--green-400);
        color: white;
    }
    label {
        border: solid 1px;
        width: fit-content;
        border-radius: 0;
    }

    input {
        border-radius: 0;
    }

    .category-wrapper {
        margin-bottom: var(--space-xl);
    }

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
        font-size: var(--text-md);
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

        .button-group {
            display: flex;
            gap: 10px;
            font-weight: bold;
            padding: var(--space);
            margin-bottom: var(--space-xl);
        }
    }
</style>
