<script lang="ts">
	import type { ActionData } from './$types'
	import { enhance } from '$app/forms'
	let { form }: { form: ActionData } = $props()
</script>

<section>
	<div class="container">
		<div class="wrapper">
			<h1>🚧 Under Construction 🚧</h1>
			<p>We are working hard to bring you something amazing. Stay tuned!</p>
			<div class="spinner"></div>
		</div>
	</div>
</section>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
