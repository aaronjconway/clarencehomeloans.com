<script lang="ts">
	const { href = '/' } = $props();
</script>

{#if href}
	<a
		{href}
		class="logo-wrapper"
	>
		<div class="logo">
			<span class="title">Clarence Home Loans</span>
			<span class="subtitle">Powered by Nexa Mortgage</span>
		</div>
	</a>
{:else}
	<div class="logo">
		<span class="title">Clarence Home Loans</span>
		<span class="subtitle">Powered by Nexa Mortgage</span>
	</div>
{/if}

<style lang="scss">
	@use '/src/styles/base';
	a.logo-wrapper {
		color: inherit;
	}
	.logo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		white-space: nowrap;
		font-size: var(--text);
	}

	.title {
		//font-size: var(--text);
		font-weight: bold;
	}

	.subtitle {
		font-size: calc(var(--text-md) * 0.7);
		line-height: 1;
		color: var(--grey-700);
	}

	@media (min-width: base.$sm) {
		.logo {
			font-size: var(--text);
		}
	}

	@media (min-width: base.$md) {
		.logo {
			font-size: var(--text-md);
		}
	}

	@media (min-width: base.$lg) {
		.logo {
			font-size: var(--text-md);
		}
	}
</style>
