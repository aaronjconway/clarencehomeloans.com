<script lang="ts">
	let { data } = $props();
	let Content = $derived(data.content);
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta
		name="description"
		content={data.metadata.meta_description}
	/>
</svelte:head>

<section>
	<div class="container compact">
		<header>
			<h1>{data.metadata?.title}</h1>
			{#if data.from}
				<a href={`/${data.from}`}>Back to {data.from} page</a>
			{/if}
		</header>
		<div class="content">
			<Content />
		</div>
	</div>
</section>

<style lang="scss">
	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		a {
			color: unset;
		}
	}
</style>
