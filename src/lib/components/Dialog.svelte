<script lang="ts">
    import type { Component } from 'svelte'

    const { page, buttonText } = $props()
    let dialog: HTMLDialogElement
    let Document: Component | undefined = $state()

    async function handleReadMore() {
        let content = await import(
            /*@vite-ignore*/
            `/src/content/dialogs/${page}.md`
        )
        Document = content.default
        dialog.open ? dialog.close() : dialog.showModal()
    }
</script>

<button class="link" onclick={handleReadMore}>{buttonText}</button>
<dialog bind:this={dialog}>
    <div class="inner-dialog">
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

        .inner-dialog {
            padding: var(--space);
        }

        button {
            border: solid 1px;
            border-radius: 4px;
            padding: 4px 8px;
            background: var(--ash-200);
        }
    }
</style>
