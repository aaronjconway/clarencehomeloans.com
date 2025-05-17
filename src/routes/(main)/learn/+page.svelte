<script lang="ts">
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	// the top 4 articles
	import HeroLearnArticles from '$lib/components/HeroLearnArticles.svelte';

	let { data } = $props();

	let articles = data.articles;
	let categories = data.categories;
</script>

<section>
	<div class="container">
		<header>
			<h1>Transparent Home Loan Education</h1>
			<p>
				<i class="fa fa-warning"></i>
				Welcome! Our articles are exclusively written by
				<u>state-licensed</u>
				loan officers, not just "blog writers" like you might find with other companies.
			</p>
		</header>
	</div>
</section>
<HeroLearnArticles articles={articles.slice(0, 4)} />
<section>
	<div class="container">
		<h2>Categories</h2>
		<div class="button-wrapper">
			<a
				class="category"
				href="/categories"
			>
				All Categories
			</a>
			{#each categories as category}
				<a
					class="category"
					href={`/learn/categories/${category.name}`}
				>
					{category.title}
				</a>
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

	.button-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-sm);
		a.category {
			width: 100%;
			text-align: center;
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
		.button-wrapper {
			a.category {
				width: fit-content;
				text-align: center;
			}
		}
	}

	@media (min-width: base.$lg) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.button-wrapper {
			a.category {
				width: fit-content;
				text-align: center;
			}
		}
	}

	// Info panel styles
	.info-panel {
		border-radius: var(--border-radius);
		background: var(--blue-100);
		padding: var(--space);
		.info-panel-header {
			font-size: var(--text-md);
			font-weight: bold;
		}

		p {
			margin: 0;
			margin-top: 4px;
			padding: 0;
		}
	}
</style>
