<script lang="ts">
	/*
	 * Specific to the form store.
	 * Can't be used outside of forms or landing pages
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

		gtag('event', 'form_step_progress', {
			step_name: stepName,
			step_number: formStore.currentStep,
			selected_option: formStore.data[stepName],
			form_name: formStore.data['page_source']
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

{#if true}
	<div class="submission">
		<h1>Thank you!</h1>
		<div>Please take the next steps to get your quote.</div>
		<ol>
			<li>
				Sign in by clicking this link. verify your email hit the menu in the top
				right if on mobile login and upload your loan estimate.
			</li>
		</ol>
		<a href="/">back to home page</a>
	</div>
{:else if errorMessage}
	{errorMessage}
{:else}
	<div class="form-header">
		<h1>Contact info</h1>
		<div>Expect to hear from us soon—we’ll never share or sell your info.</div>
	</div>
	<section>
		<div class="container">
			<div class="wrapper">
				<form
					method="POST"
					action="?/submit"
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
							I agree to be contacted by Clarence Home Loans via call, email, and
							text. To opt out, you can reply 'stop' at any time or click the unsubscribe
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
			</div>
		</div>
	</section>
{/if}

<style lang="scss">
	@use '/src/styles/base';

	.privacy {
		font-size: var(--text-sm);
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		padding: 5%;
		max-width: 600px;
	}

	@media (min-width: 786px) {
		.wrapper {
			grid-template-columns: 1fr 1fr;
		}
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
		border-radius: 4px;
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
</style>
