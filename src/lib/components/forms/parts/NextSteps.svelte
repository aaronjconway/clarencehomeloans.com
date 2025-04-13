<script lang="ts">
    const { stepName, formStore = $bindable() } = $props()

    function handleClick() {
        formStore.nextStep()
    }
</script>

<div class="form-header">
    <h1>Thank you for all of that info!</h1>
    <p>Almost there.</p>
</div>

<div class="container">
    <div class="next-wrapper">
        <p>
            We respect your privacy — your information is never shared or sold.
            You won’t receive any spam, just a personal response directly from
            the owner of Clarence Home Loans.
        </p>
    </div>
</div>

<div class="button-wrapper">
    <button
        class="primary"
        onclick={() => {
            handleClick()
        }}>Proceed</button
    >
</div>

<style lang="scss">
    .next-wrapper {
        display: flex;
        width: 100%;
        justify-content: center;

        p {
            max-width: 500px;
        }
    }
</style>
