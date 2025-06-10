<script lang="ts">
	let count = $state(0);

	function handleClick() {
		count++;
	}
</script>

<button onclick={handleClick}>Count: {count}</button>
