<script lang="ts">
    import ContactForm from './ContactForm.svelte'
    let {
        formStore = $bindable(),
        stepName = 'contact',
        hasHeader = true,
    } = $props()
</script>

{#if hasHeader}
    <div class="form-header">
        <h1>Contact info</h1>
        <p>
            We respect your privacy — your information is never shared or sold.
        </p>
    </div>
{/if}
<ContactForm {formStore} {stepName} />
