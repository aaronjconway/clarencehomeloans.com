<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<div class="form-wrapper">
	<form
		method="POST"
		action="?/updatePassword"
		use:enhance
	>
		<label>
			New Password
			<input
				name="passwordNew"
				type="password"
				placeholder="Enter your new password"
				required
			/>
		</label>
		<label>
			Confirm
			<input
				name="passwordConfirm"
				type="password"
				placeholder="Re-enter the new password"
				required
			/>
		</label>
		<button class="primary">Submit</button>
	</form>
	<p class="error">
		{form?.message ?? ''}
	</p>
</div>

<style lang="scss">
	.form-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		max-width: 500px;
		margin: 0 auto;
		padding: 0;
		height: 80vh;

		form {
			width: 100%;
		}

		label,
		input {
			margin: 0;
		}

		label {
			margin-top: 1rem;
			margin-bottom: 0.5rem;
		}
	}
</style>
