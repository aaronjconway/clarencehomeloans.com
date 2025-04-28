<script lang="ts">
	/*
	 * takes in 4 posts and organizes them into one big one + three small ones on
	 * the right for desktop and just three articles for normal
	 *
	 * */

	interface Article {
		slug: string;
		id: string;
		status: string;
		sort: string | null;
		user_created: string;
		date_created: string;
		user_updated: string;
		date_updated: string;
		short_descript: string;
		title: string;
		description: string;
		tags: string[];
		image: any;
		test: any;
	}
	// a list of 4 articles
	const { articles }: { articles: Article[] } = $props();
	const mostRecent = articles[0];
</script>

<section>
	<div class="container">
		<div class="main-wrapper">
			<div class="left">
				<div class="most-recent">
					<div class="article-card-wrapper">
						<a href={`/learn/${mostRecent.slug}`}>
							<div class="article-card-image">
								<img
									src={`https://production-directus.8rjfpz.easypanel.host/assets/${mostRecent.image?.filename_disk}`}
									alt={mostRecent.image?.description}
								/>
								<!-- {JSON.stringify(article.image?.filename_disk)} -->
							</div>

							<div class="most-recent-content">
								<div class="article-card-title">
									Most Recent: {mostRecent.title}
								</div>
								<div class="article-card-description">
									{mostRecent.short_descript}
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="right">
				{#each Array.from(articles.slice(1)) as article}
					<a href={`/learn/${article.slug}`}>
						<div class="article-card-wrapper">
							<div class="article-card-left">
								<div class="article-card-image">
									<img
										src={`https://production-directus.8rjfpz.easypanel.host/assets/${article.image?.filename_disk}`}
										alt={article.image?.description}
									/>
									<!-- {JSON.stringify(article.image?.filename_disk)} -->
								</div>
							</div>
							<div class="article-card-right">
								<div class="article-card-title">
									{article.title}
								</div>
								<div class="article-card-description">
									{article.short_descript}
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base';
	.article-card-image {
		width: 100%;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			display: block;
		}
	}
	.main-wrapper {
		display: flex;
		flex-direction: column;
		gap: var(--space-md);
	}
	.right {
		display: grid;
		grid-template-rows: 1fr 1fr 1fr;
		flex-direction: column;
		gap: var(--space);
	}

	.left {
		display: flex;
	}

	.most-recent {
		.article-card-wrapper {
			display: flex;
			gap: var(--space);
			border-radius: 4px;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
			height: 100%;

			transition: all 0.3s ease;

			&:hover {
				transform: translateY(-4px);
				box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
			}
			.most-recent-content {
				display: flex;
				flex-direction: column;
				padding: 1rem;
				.article-card-title {
					color: #333;
					font-size: var(--text-lg);
					text-align: left;
				}

				.article-card-description {
					line-height: 1.5;
					text-align: left;
					margin-bottom: 16px;
				}
			}
		}
	}

	.article-card-wrapper {
		border: solid 1px var(--grey-400);
		border-radius: 4px;
		display: grid;
		grid-template-columns: 1fr 1.618fr;
		gap: var(--space);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		height: 100%;

		&:hover {
			transform: translateY(-4px);
			box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
		}

		.article-card-left {
			display: flex;
		}

		.article-card-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: var(--space-xs);

			.article-card-title {
				color: #333;
				font-size: var(--text-md);
				text-align: left;
			}
			.article-card-description {
				line-height: 1.5;
				text-align: left;
				margin-bottom: 16px;
			}
		}
	}

	@media (min-width: base.$lg) {
		.main-wrapper {
			display: grid;
			grid-template-columns: 1.618fr 1fr;
			gap: var(--space-md);
		}
	}
</style>
