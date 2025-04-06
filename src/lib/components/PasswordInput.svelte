<script lang="ts">
    //start as hidden
    let hidden = $state(true)
    let { name, value = $bindable() } = $props()

    //TODO:-- assuming this is hte only passowrd on the page and keeping the id as
    //passwrod I feel like that's a bad idea.
</script>

<div class="password-wrapper">
    <button
        type="button"
        aria-label="password-hide-icon"
        onclick={() => {
            hidden = !hidden
        }}><i class={hidden ? 'fa fa-eye-slash' : 'fa fa-eye'}></i></button
    >
    <input type={hidden ? 'password' : 'text'} {value} {name} required />
</div>

<style lang="scss">
    .password-wrapper {
        position: relative;
        button {
            position: absolute;
            right: 0;
            padding: var(--space);
            margin: var(--space) 0;
            display: flex;
        }
    }
</style>
