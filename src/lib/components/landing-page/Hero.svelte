<script lang="ts">
	const {
		title = '',
		subtitle = '',
		text = '',
		imagePath = '',
		alt = ''
	} = $props();
</script>

<section>
	<div class="container">
		<div class="grid">
			<div class="left">
				<div class="sub-title">{subtitle}</div>
				<h1 class="title">
					{title}
				</h1>
				<p>
					{text}
				</p>
			</div>
			<div class="right">
				<div class="hero-image-wrapper">
					<img
						{alt}
						class="hero-image"
						src={`/images/${imagePath}`}
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base';

	//todo fix the image alt tag
	.hero-image-wrapper {
		position: relative;
		overflow: hidden;
		border-radius: var(--border-radius);
		width: 100%;
		max-height: 400px;
	}

	.hero-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--space-md);
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
		align-items: start;
		justify-content: center;
	}

	.title {
		margin: 0;
		margin-bottom: var(--space-md);
		line-height: 1.1;
		color: var(--ink);
	}

	/* Media query for mobile devices */
	@media (max-width: base.$sm) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: base.$md) {
		section {
			height: 40vh;
		}
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: base.$lg) {
		section {
			height: 60vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin-top: 1rem;
			margin-bottom: 4rem;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--space-xxl);
		}
	}
</style>
