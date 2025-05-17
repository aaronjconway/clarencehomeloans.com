<script lang="ts">
	import type { Component, SvelteComponent } from 'svelte';

	const { page, buttonText } = $props();
	let dialog: HTMLDialogElement;
	let Document: Component | undefined = $state();
	let content: HTMLElement;

	const pages = import.meta.glob('/src/content/dialogs/*.md');
	async function handleReadMore() {
		content.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		const path = `/src/content/dialogs/${page}.md`;
		const loadPage = pages[path];

		if (loadPage) {
			const content = (await loadPage()) as SvelteComponent;
			Document = content.default;
			dialog.open ? dialog.close() : dialog.showModal();
		} else {
			console.error('Page not found:', path);
		}
	}
</script>

<button
	class="link"
	onclick={handleReadMore}
>
	{buttonText}
</button>
<dialog bind:this={dialog}>
	<div
		class="inner-dialog"
		bind:this={content}
	>
		{#if Document}
			<Document />
		{/if}
		<form method="dialog">
			<button>close</button>
		</form>
	</div>
</dialog>

<style lang="scss">
	dialog {
		text-align: left;
		border: solid 1px var(--grey-200);
		max-width: 800px;
		border-radius: var(--border-radius);

		.inner-dialog {
			padding: var(--space);
		}

		button {
			border: solid 1px;
			border-radius: var(--border-radius);
			padding: 4px 8px;
			background: white;
		}
	}
</style>
