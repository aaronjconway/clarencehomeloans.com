<script lang="ts">
	/*
	 * just the input/form part of the contact peice
	 * takes a form store and sends off to api/events
	 *
	 *
	 * */

	let { formStore = $bindable() } = $props();

	function formatPhone() {
		let value = formStore.data['phone'];
		value = value.replace(/\D/g, '');
		var size = value.length;
		if (size > 0) value = '(' + value;
		if (size > 3) value = value.slice(0, 4) + ') ' + value.slice(4, 11);
		if (size > 6) value = value.slice(0, 9) + '-' + value.slice(9);
		formStore.data['phone'] = value;
	}

	let loading = $state(false);
	let success = $state(false);
	let errorMessage = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();

		await fetch('https://production-ntfy.8rjfpz.easypanel.host/chl-web', {
			method: 'POST',
			headers: {
				'User-Agent': 'Mozilla/5.0'
			},
			body: formStore.data['page_source'] + ' submit attempt'
		});

		const data = JSON.stringify(formStore.data);
		loading = true;
		try {
			const response = await fetch('/api/events', {
				method: 'POST',
				body: data
			});

			const result = await response.json();

			if (result.success) {
				success = true;
			} else {
				success = false;
				errorMessage = result.message;
			}
			loading = false;
			formStore.submitted = true;
		} catch (err) {
			console.error('Error posting to /api/events: ', err);
		}
	}
</script>

{#if success}
	<div class="submission">
		<h1>Thank you!🎉</h1>
		<div>We'll reach out shortly to cover your information and goals.</div>
		<div>We look forward to working with you! 😃</div>
		<a href="/">back to home page</a>
	</div>
{:else if errorMessage}
	<div class="submission">
		<h1>Error Submitting form</h1>
		<p>Tech has been notified and will fix it.</p>
		<a href="/">back to home page</a>
	</div>
{:else}
	<div class="wrapper">
		{#if loading}
			<div class="loader-overlay">
				<div class="loading-wrapper">
					<div class="loader"></div>
				</div>
			</div>
		{:else}
			<form
				method="POST"
				onsubmit={handleSubmit}
			>
				<div class="name-group">
					<div class="form-group">
						<label for="first_name">First Name</label>
						<input
							type="text"
							id="first_name"
							name="first_name"
							bind:value={formStore.data['first_name']}
							required
						/>
					</div>
					<div class="form-group special">
						<label for="special">
							<input
								type="text"
								name="special"
								bind:value={formStore.data['special']}
							/>
						</label>
					</div>
					<div class="form-group">
						<label for="last_name">Last Name</label>
						<input
							type="text"
							id="last_name"
							name="last_name"
							bind:value={formStore.data['last_name']}
							required
						/>
					</div>
				</div>

				{#if ['phone', 'text', 'any'].includes(formStore.data['contact_preference'])}
					<div class="form-group">
						<label for="phone">Phone</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							required
							bind:value={formStore.data['phone']}
							oninput={formatPhone}
						/>
					</div>
				{/if}

				<div class="form-group">
					<label for="email">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						bind:value={formStore.data['email']}
						required
					/>
				</div>

				<div class="form-group">
					<label
						for="privacy"
						class="privacy"
					>
						<input
							type="checkbox"
							id="privacy"
							name="privacy"
							required
						/>
						I agree to be contacted by Clarence Home Loans via call, email, and text.
						To opt out, you can reply 'stop' at any time or click the unsubscribe
						link in the emails. Message and data rates may apply.
						<a href="/privacy-policy?from=contact">Privacy policy</a>
					</label>
				</div>

				<button
					type="submit"
					class="primary"
				>
					<span class="btn-label">Submit</span>
				</button>
			</form>
		{/if}
	</div>
{/if}

<style lang="scss">
	@use '/src/styles/base';

	.privacy {
		font-size: var(--text-sm);
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		height: 100%;
		padding: 5%;

		margin: 0 auto;
		max-width: 600px;
	}

	.special {
		display: none;
	}

	input[type='text'],
	input[type='email'],
	input[type='tel'] {
		width: 100%;
		padding: var(--space-sm);
		margin: var(--space-sm) 0;
		border: 1px solid #ddd;
		border-radius: var(--border-radius);
	}

	input[type='checkbox'] {
		margin-right: 5px;
		height: 25px;
		width: 25px;
		vertical-align: bottom;
	}

	.privacy {
		font-size: var(--text-sm);
	}

	//loader overlay
	.loader-overlay {
		display: flex;
		justify-content: center;
		height: 100%;
	}

	//loading wrappek to place the loader
	.loader-wrapper {
		display: flex;
		height: 100%;
		justify-content: center;
		align-items: center;
	}

	/* HTML: <div class="loader"></div> */
	.loader {
		width: 50px;
		aspect-ratio: 1;
		display: grid;
		border: 4px solid #0000;
		border-radius: 50%;
		border-right-color: var(--green-400);
		animation: l15 1s infinite linear;
	}
	.loader::before,
	.loader::after {
		content: '';
		grid-area: 1/1;
		margin: 2px;
		border: inherit;
		border-radius: 50%;
		animation: l15 2s infinite;
	}
	.loader::after {
		margin: 8px;
		animation-duration: 3s;
	}
	@keyframes l15 {
		100% {
			transform: rotate(1turn);
		}
	}
</style>
