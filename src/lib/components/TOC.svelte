<script>
    import TOC from '$lib/components/TOC.svelte'
    const { toc } = $props()

    // Recursive component for nested items
    const renderToc = (items) => {
        return items.map((item) => ({
            ...item,
            children:
                item.children && item.children.length > 0
                    ? renderToc(item.children)
                    : [],
        }))
    }
</script>

<ul>
    {#each toc as item}
        <li>
            <a href={'#' + item.id}>{item.text}</a>
            {#if item.children.length > 0}
                <TOC toc={item.children} />
            {/if}
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding-left: 1em;
        margin: 0.3em 0;
    }
    li {
        margin: 0.2em 0;
    }
    a {
        text-decoration: none;
        color: #0366d6;
    }
    a:hover {
        text-decoration: underline;
    }
</style>
