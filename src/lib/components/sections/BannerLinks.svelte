<script lang="ts">
	const links = [
		{
			title: 'Loan Programs',
			desc: 'Available Loan Options',
			link: '/home-loans'
		},
		{
			title: 'Mortgage Education',
			desc: 'Home buying articles',
			link: '/learn'
		},
		{
			title: 'Careers',
			desc: 'Looking for a new Career?',
			link: '/landing-page/careers'
		}
	];
</script>

<section>
	<div class="container">
		<div class="grid">
			{#each links as link}
				<a href={link.link}>
					<div class="card">
						<div class="card-title">{link.title}</div>
						<div class="card-link">{link.desc}</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base';

	a {
		color: unset;
		&:visited {
			color: unset;
		}
	}

	.container {
		position: relative;
		padding: 0;
	}

	.card {
		display: flex;
		flex-direction: column;
		border: solid 1px var(--grey-500);
		background: white;
		padding: var(--space);
		border-radius: var(--border-radius);
		height: 100%;

		.card-title {
			font-weight: bold;
		}

		.card-link {
			font-size: var(--text);
		}

		&:hover {
			outline: solid 1px black;
		}
	}

	.grid {
		padding: 2%;
		width: 100%;
		gap: 1rem;
		display: grid;
		grid-template-columns: 1fr;
	}

	@media (min-width: base.$sm) {
		.grid {
			padding: 5%;
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: base.$md) {
		.grid {
			padding: 5%;
			grid-template-columns: repeat(2, 1fr);
			position: absolute;
			top: 50%;
			transform: translateY(-60%);
		}
	}

	@media (min-width: base.$lg) {
		.grid {
			padding: 0;
			grid-template-columns: repeat(3, 1fr);
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}
</style>
