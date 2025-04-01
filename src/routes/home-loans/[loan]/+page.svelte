<script lang="ts">
	const { data } = $props()
</script>

<section>
	<div class="container">
		<h1>Hello world!</h1>
		{#if data.result}
			{@html data.result[0].content}
		{/if}
	</div>
</section>
