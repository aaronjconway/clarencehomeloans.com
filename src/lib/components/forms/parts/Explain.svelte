<script lang="ts">
	const { stepName = '', formStore = $bindable() } = $props();
	const data = [
		{
			text: 'I want to learn more before proceeding.',
			id: 'program'
		},
		{
			text: 'I was looking for cute cat gif',
			id: 'cat'
		},
		{
			text: "I accidentally clicked through 10 previous questions but don't actually want anything.",
			id: 'accident'
		},
		{
			text: 'I just want the rates.',
			id: 'rates'
		},
		{
			text: "I really don't want to talk to some dumb sales idiot that is going to be annoying and lie to me.",
			id: 'sales'
		}
	];

	function handleClick(e: Event) {
		const selectedValue = e.target.value;
		if (selectedValue == 'no_contact') {
			formStore.nextStep();
		}
	}
</script>

{#if formStore.data['explain'] == 'program'}
	<div class="form-header-annoying explain">
		<h2>It's very simple. We just make less to provide this service.</h2>
		<h3>
			<blockquote>
				We’re faster, better priced, less closing costs, more knowledgeable &
				more available than anyone else.
			</blockquote>
		</h3>
		<p>
			We can of course use state run programs if they exist for your area as
			well.
		</p>
		<p>
			We are significantly better than the "Heroes" or "Next Door" in literally
			every aspect.
		</p>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['explain'] = '';
				}}
			>
				<span class="btn-label">Back to choices</span>
			</button>
		</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.nextStep();
				}}
			>
				<span class="btn-label">Oooo this sounds good.</span>
			</button>
		</div>
	</div>
{:else if formStore.data['explain'] == 'sales'}
	<div class="form-header-annoying explain">
		<h1>Lying is counter productive.</h1>
		<div>If we lie, we know we're just going to lose you later.</div>
		<div>
			We take our jobs very seriously when it comes to accuracy and the most
			important factor, getting you into the home.
		</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['explain'] = '';
				}}
			>
				<span class="btn-label">Back to Preferences</span>
			</button>
		</div>

		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.nextStep();
				}}
			>
				<span class="btn-label">Talk with an expert</span>
			</button>
		</div>
	</div>
{:else if formStore.data['explain'] == 'cat'}
	<div class="form-header-annoying">
		<div class="image-wrapper">
			<img
				src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWV1aWt3NnVjNGx6eGptNWQzYXlsZWl0bTIyaWxhcG5mY2wxeG5vaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MDJ9IbxxvDUQM/giphy.gif"
				alt="cute cat smooch"
			/>
		</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['explain'] = '';
				}}
			>
				<span class="btn-label">Back to Preferences</span>
			</button>
		</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.nextStep();
				}}
			>
				<span class="btn-label">
					This is very convincing. I want to proceed.
				</span>
			</button>
		</div>
	</div>
{:else if formStore.data['explain'] == 'accident'}
	<div class="form-header-annoying">
		<div>
			<img
				src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDZ6dnc2Zmlhc3Nsb29ic2V3MW8yNDhtb2gzNXluMnJleWtudXQ4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/D6C1xEUxPTRbfkgChh/giphy.gif"
				alt="cute cat smooch"
			/>
		</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['explain'] = '';
				}}
			>
				<span class="btn-label">Back to Preferences</span>
			</button>
		</div>
	</div>
{:else if formStore.data['explain'] == 'rates'}
	<div class="form-header-annoying">
		<h1>What our are rates? Our clients rate us 10/10!!! :)</h1>
		<div>
			Calling lenders asking for the rates - is playing a game of who's the
			biggest liar. You're optimizing for a bad time.
		</div>
		<div>With that being said, we will match or beat anyone.</div>
		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.data['explain'] = '';
				}}
			>
				<span class="btn-label">Back to Preferences</span>
			</button>
		</div>

		<div>
			<button
				class="primary"
				onclick={() => {
					formStore.nextStep();
				}}
			>
				<span class="btn-label">Get a rate quote</span>
			</button>
		</div>
	</div>
{:else}
	<div class="form-header">
		<h1>It seems like you're here for something?</h1>
		<div style="font-size: var(--text-md);"></div>
	</div>
	<div class="radio-wrapper">
		<div class="radio-inner">
			{#each data as item}
				<div class="radio-button">
					<label
						for={item.id}
						class:selected={item.id == formStore.data[stepName]}
					>
						<input
							type="radio"
							value={item.id}
							id={item.id}
							bind:group={formStore.data['explain']}
							onclick={(e) => handleClick(e)}
						/>
						{item.text}
					</label>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.image-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		overflow: hidden;
		width: auto;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: var(--border-radius);
		}
	}
	.form-header-annoying {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: var(--space);

		margin: 0 auto;
		margin-top: var(--space-xl);
		margin-bottom: var(--space-md);
		max-width: 600px;

		text-align: center;
		font-size: var(--text-md);

		h1,
		h2 {
			margin: 0;
			padding: 0;
		}
	}
</style>
