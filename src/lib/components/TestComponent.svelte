<script lang="ts">
    console.log('Test Component init')

    let count = $state(0)

    function handleClick() {
        count++
    }
</script>

<button onclick={handleClick}>Count: {count}</button>
