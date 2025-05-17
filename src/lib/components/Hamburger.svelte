<script>
	function handleHamburger() {
		document.querySelector('.nav-wrapper')?.classList.toggle('show');
	}
</script>

<button
	id="hamburger"
	aria-label="Toggle Navigation"
	aria-expanded="false"
	onclick={handleHamburger}
>
	<svg
		fill="var(--platinum-800)"
		width="36"
		height="36"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill-rule="evenodd"
			d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
		></path>
	</svg>
</button>

<style lang="scss">
	@use '/src/styles/base.scss';

	button {
		background: none;
		color: var(--platinum-500);
		border: none;
		margin: 0;
		padding: 0;
	}

	@media (min-width: base.$sm) {
		button {
			display: none;
		}
	}
</style>
