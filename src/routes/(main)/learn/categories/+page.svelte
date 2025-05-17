<script lang="ts">
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	// the top 4 articles
	import HeroLearnArticles from '$lib/components/HeroLearnArticles.svelte';
	import BreadCrumbs from '$lib/components/BreadCrumbs.svelte';
	// import { page } from '$app/state';

	let { data } = $props();

	let categories = data.categories;
</script>

<section>
	<div style="margin-bottom:var(--space)">
		<BreadCrumbs dark={true} />
	</div>
	<div class="container">
		<header>
			<h1>Categories</h1>
			<div></div>
		</header>
	</div>
</section>

<section>
	<div class="container">
		<div class="wrapper">
			{#each categories as category}
				<div class="category-wrapper">
					<a
						class="plain"
						href={`/learn/categories/${category.name}`}
					>
						<h2>{category.title}</h2>
						<div>{category.description}</div>
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="container">
		<SimpleCta
			subTitle="Start with Expert Advice"
			title="Have specific questions? We’ll point you in the right direction."
			buttonText="Get Started"
		/>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base';

	.wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space);
	}

	.category-wrapper {
		margin-bottom: var(--space-lg);
		max-width: 800px;
		border: solid 1px var(--grey-300);
		border-radius: var(--border-radius);
		background: var(--grey-100);
		padding: var(--space);

		h2 {
			margin-bottom: var(--space-sm);
		}
	}

	/* Media query for mobile devices */
	@media (max-width: base.$sm) {
	}

	@media (min-width: base.$md) {
	}

	@media (min-width: base.$lg) {
	}
</style>
