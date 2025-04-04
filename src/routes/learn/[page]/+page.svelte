<script lang="ts">
    let { data } = $props()
    let Content = $derived(data.content)
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
    <meta name="description" content={data.metadata.meta_description} />
</svelte:head>

<div class="container">
    <header>
        <h1>{data.metadata?.title}</h1>
    </header>
    <div class="content">
        <Content />
    </div>
</div>
