<script lang="ts">
    const { formStore } = $props()
    let progress = $derived(formStore.currentStep / formStore.totalSteps)
</script>

<div class="progress-bar-wrapper">
    <div class="progress-bar">
        <div class="progress" style={`width:${progress * 100}%`}></div>
    </div>
</div>

<style lang="scss">
    .progress-bar-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: var(--space-md);
    }

    .progress-bar {
        display: flex;
        border-radius: 4px;
        width: 100%;
        max-width: 500px;
        border: solid 1px var(--grey-500);
        height: 7px;
        padding: 0;
        margin: 0 var(--space-lg);
        transition: all 200ms;
    }

    .progress {
        padding: 0;
        margin: 0;
        background: var(--green-200);
        transition: all 200ms;
    }
</style>
