<section>
	<div class="container">
		<header>
			<h2>Expert Guidance for Your Home Loan Journey</h2>
			<p>We'll walk you through from start to finish.</p>
		</header>
		<div class="steps-wrapper">
			<div class="step">
				<div class="step-header">
					<div class="step-inner-header">
						<div class="step-number">1</div>
						<div class="step-header-text">Chat</div>
					</div>
				</div>
				<div class="step-content">
					Have a seasoned professional evaluate your needs.
				</div>
			</div>
			<div class="step">
				<div class="step-header">
					<div class="step-inner-header">
						<div class="step-number">2</div>
						<div class="step-header-text">Strategize</div>
					</div>
				</div>
				<div class="step-content">
					Review your options and home buying plan.
				</div>
			</div>
			<div class="step">
				<div class="step-header">
					<div class="step-inner-header">
						<div class="step-number">3</div>
						<div class="step-header-text">Shop</div>
					</div>
				</div>
				<div class="step-content">
					Search with confidence that you're qualified and competitve.
				</div>
			</div>
			<div class="step">
				<div class="step-header">
					<div class="step-inner-header">
						<div class="step-number">4</div>
						<div class="step-header-text">Own</div>
					</div>
				</div>
				<div class="step-content">Close and celebrate your new home.</div>
			</div>
		</div>
		<div class="cta">
			<a
				class="btn"
				href="/process"
			>
				<span class="btn-label">Read more about the process</span>
			</a>
		</div>
		<p>Have more questions?</p>
		<a href="/faq">Frequently Asked Questions</a>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base.scss';

	header {
		text-align: center;
		margin-bottom: var(--space-lg);
	}

	section {
		background: var(--grey-100);
		margin: 0;
		padding: 0;
	}

	h2 {
		margin-bottom: var(--space-xl);
	}

	.step-content {
		text-align: center;
		max-width: 300px;
	}

	.cta {
		margin: var(--space-lg) 0;
		display: flex;
		justify-content: center;
		width: 100%;
		border-radius: 2px;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--space-xl) 5%;

		@media (min-width: base.$lg) {
			padding: var(--space-xl) 0;
		}
	}

	.step {
		margin-bottom: var(--space-md);
		@media (min-width: base.$md) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: base.$lg) {
			grid-template-columns: repeat(4, 1fr);
			gap: var(--space-md);
			padding: 0;
			margin: var(--space-lg);
			width: 100%;
		}
	}

	.step-header {
		display: flex;
		font-weight: 700;
		font-size: var(--text-md);
		align-items: center;
		padding-bottom: var(--space-md);
	}

	.step-inner-header {
		display: flex;
		white-space: nowrap;
		justify-content: start;
		align-items: center;
		margin: 0 auto;
		width: 100%;
		max-width: 200px;
	}

	.step-header-text {
		margin-left: var(--space-sm);
	}

	.step-number {
		display: flex;
		background: var(--green-600);
		font-size: 40px;
		color: white;
		align-items: center;
		align-self: flex-start;
		border-radius: 100%;
		margin: 0;
		flex-shrink: 0;
		height: var(--space-xl);
		justify-content: center;
		width: var(--space-xl);
	}

	.steps-wrapper {
		display: grid;
		gap: var(--space-xl);
		grid-template-columns: 1fr;
		margin-bottom: var(--space-xl);

		@media (min-width: base.$md) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media (min-width: base.$lg) {
			margin-top: var(--space-md);
			grid-template-columns: repeat(4, 1fr);
			padding: 0;
		}
	}

	@media (min-width: base.$lg) {
		.step-inner-header {
			display: flex;
			white-space: nowrap;
			justify-content: center;
			align-items: center;
			margin: 0 auto;
		}

		.step-header-text {
			text-align: unset;
		}
		.step-header {
			padding-left: 0;
		}

		.step-content {
			text-align: left;
		}
	}
</style>
