<script lang="ts">
    let { title = '', children } = $props()
    let isOpen = $state(false)

    function toggleOpen() {
        isOpen = !isOpen
    }
</script>

<div class="wrapper">
    <button aria-pressed={isOpen} aria-controls={title} onclick={toggleOpen}>
        {title}
    </button>
    <div class:open={isOpen} class="content" role="region">
        {@render children()}
    </div>
</div>

<style lang="scss">
    .wrapper {
        padding: 4px 0;
    }
    button {
        text-align: left;
        font-size: var(--text);
        font-weight: bold;
        height: 100%;

        display: flex;
        padding: var(--space);
        color: var(--platinum-800);
        width: 100%;
        margin: 0;
        border: solid 1px var(--grey-500);
        border-radius: 4px;
        background: var(--grey-100);

        &:hover {
            filter: brightness(95%);
        }
    }

    .content {
        height: 0;
        display: none;
        &.open {
            opacity: 1;
            display: flex;
            flex-direction: column;
            height: fit-content;
            padding: 1rem 0;
        }
    }
</style>
