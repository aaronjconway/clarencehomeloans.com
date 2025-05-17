<script lang="ts">
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';

	let { data } = $props();

	let loanPrograms = data.loanPrograms;

	let tagSelection = $state('All');

	// take in data aggregate on the
	function aggregateCategories(data: any, tag: string) {
		let obj: Record<string, Array<Object>> = {};
		for (const item of data) {
			const cat = item.Category;
			item.slug ??= { slug: '' };

			if (tag == 'All') {
				(obj[cat] ||= []).push(item);
			}
			if (item.tags.includes(tag)) {
				(obj[cat] ||= []).push(item);
			}
		}
		return obj as any;
	}

	const categories = $derived(aggregateCategories(loanPrograms, tagSelection));
	//TODO:--
	//the slug.slug is gross

	// TODO: match the tag values to the selection in the aggregate categories
	// so you don't have to if blah so many times.
</script>

<svelte:head>
	<title>Clarence Home Loans | Loan Options for Every Buyer</title>
	<meta
		name="description"
		content="Explore home loan options with Clarence Home Loans. Compare rates, terms, and find the right mortgage for your needs."
	/>
	<meta
		name="keywords"
		content="Clarence home loans, mortgage options, home loan programs, DSCR loans, bank statement loans, non-qm, fixed rate mortgage, FHA loans, VA loans, refinance, first-time buyer loans"
	/>
	<meta
		property="og:title"
		content="Clarence Home Loans | Loan Options"
	/>
	<meta
		property="og:description"
		content="Browse a range of home loan options tailored to fit your goals. Learn more with Clarence Home Loans."
	/>
	<meta
		property="og:type"
		content="website"
	/>
	<meta
		property="og:url"
		content="https://www.clarencehomeloans.com/home-loans"
	/>
</svelte:head>

<section>
	<div class="container">
		<header>
			<h1>Home loan options for everyone</h1>
			<div class="button-group">
				<label class:selected={tagSelection === 'All'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="All"
					/>
					<span class="btn-label">All</span>
				</label>
				<label class:selected={tagSelection === 'Credit Flexible'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="Credit Flexible"
					/>
					<span class="btn-label">Low Credit Friendly</span>
				</label>
				<label class:selected={tagSelection === 'Refinance'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="Refinance"
					/>
					<span class="btn-label">Refinance</span>
				</label>

				<label class:selected={tagSelection === 'FTHB'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="FTHB"
					/>
					<span class="btn-label">First Time Home Buyers</span>
				</label>

				<label class:selected={tagSelection === 'Alternative'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="Alternative"
					/>
					<span class="btn-label">Alternative Loan Types</span>
				</label>
				<label class:selected={tagSelection === 'Low Down'}>
					<input
						type="radio"
						bind:group={tagSelection}
						value="Low Down"
					/>
					<span class="btn-label">Lowest Down</span>
				</label>
			</div>
			<div class="selection-wrapper">
				{#if tagSelection == 'Low Down'}
					<div>
						Keep your out of pocket expenses low with options between 0% and
						3.5%
					</div>
				{/if}
				{#if tagSelection == 'Alternative'}
					<div>
						Loan types that are great for borrowers needing alternative
						documentation types.
					</div>
				{/if}
				{#if tagSelection == 'Credit Flexible'}
					<div>
						These loan types, such as FHA and VA loans, are great for borrowers
						with low or rebuilding credit, offering more flexible qualification
						requirements.
					</div>
				{/if}
				{#if tagSelection == 'FTHB'}
					<div>
						These loan types are ideal for first-time homebuyers, offering lower
						down payments and specialized pricing.
					</div>
				{/if}
				{#if tagSelection == 'Refinance'}
					<div>
						Whether you're looking to lower your interest rate, shorten your
						loan term, or tap into your home's equity, we've got a solution
						tailored to your needs.
					</div>
				{/if}
			</div>
		</header>
		{#if categories.conventional?.length > 0}
			<div class="category-wrapper">
				<h2>Conventional Loans</h2>
				<hr />
				<div class="grid">
					{#each categories.conventional as loan}
						<a
							class="card-link-wrapper"
							href={`/home-loans/${loan.slug.slug}`}
						>
							<div class="card">
								<div class="title">{loan.Name}</div>
								<div class="summary-wrapper">
									<p class="short-summary">
										{loan.short_summary}
									</p>
								</div>
								<div class="tag-wrapper">
									{#each loan.tags as tag}
										<div class="tag">{tag}</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
		{#if categories.jumbo?.length > 0}
			<div class="category-wrapper">
				<h2>Jumbo Loans</h2>
				<hr />
				<div class="grid">
					{#each categories.jumbo as loan}
						<a
							class="card-link-wrapper"
							href={`/home-loans/${loan.slug.slug}`}
						>
							<div class="card">
								<div class="title">{loan.Name}</div>
								<div class="summary-wrapper">
									<p class="short-summary">
										{loan.short_summary}
									</p>
								</div>
								<div class="tag-wrapper">
									{#each loan.tags as tag}
										<div class="tag">{tag}</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
		{#if categories.fha?.length > 0}
			<div class="category-wrapper">
				<h2>FHA loans</h2>
				<hr />
				<div class="grid">
					{#each categories.fha as loan}
						<a
							class="card-link-wrapper"
							href={`/home-loans/${loan.slug.slug}`}
						>
							<div class="card">
								<div class="title">{loan.Name}</div>
								<div class="summary-wrapper">
									<p class="short-summary">
										{loan.short_summary}
									</p>
								</div>
								<div class="tag-wrapper">
									{#each loan.tags as tag}
										<div class="tag">{tag}</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
		{#if categories.va?.length > 0}
			<div class="category-wrapper">
				<h2>VA loans</h2>
				<hr />
				<div class="grid">
					{#each categories.va as loan}
						<a
							class="card-link-wrapper"
							href={`/home-loans/${loan.slug.slug}`}
						>
							<div class="card">
								<div class="title">{loan.Name}</div>
								<div class="summary-wrapper">
									<p class="short-summary">
										{loan.short_summary}
									</p>
								</div>
								<div class="tag-wrapper">
									{#each loan.tags as tag}
										<div class="tag">{tag}</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
		{#if categories.alternative?.length > 0}
			<div class="category-wrapper">
				<h2>Alternative Loan Types</h2>
				<hr />
				<div class="grid">
					{#each categories.alternative as loan}
						<a
							class="card-link-wrapper"
							href={`/home-loans/${loan.slug.slug}`}
						>
							<div class="card">
								<div class="title">{loan.Name}</div>
								<div class="summary-wrapper">
									<p class="short-summary">
										{loan.short_summary}
									</p>
								</div>
								<div class="tag-wrapper">
									{#each loan.tags as tag}
										<div class="tag">{tag}</div>
									{/each}
								</div>
							</div>
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</section>
<section>
	<div class="container">
		<SimpleCta
			subTitle="Start with Expert Advice"
			title="Not sure which loan is right for you? We’ll point you in the right direction."
			buttonText="Get Started"
		/>
	</div>
</section>

<style lang="scss">
	@use '/src/styles/base';

	.selection-wrapper {
		text-align: center;
		font-size: var(--text-md);
		width: 100%;
		margin-bottom: var(--space-xl);
	}

	.button-group {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
		font-weight: bold;
		padding: var(--space);
		margin-bottom: var(--space-xl);
	}

	.button-group label {
		position: relative;
		text-align: center;
		border: 1px solid var(--grey-700);
		background-color: var(--primary-300);
		border-radius: var(--border-radius);

		&.selected {
			.btn-label {
				transform: translateY(-1px);
				background-color: var(--primary-100);
			}
		}
	}

	.btn-label {
		position: relative;
		display: block;
		padding: var(--space-xs) var(--space); // px-3.5 py-1.5
		font-weight: bold;
		text-align: center;
		user-select: none;

		border: 1px solid var(--grey-700);
		border-radius: var(--border-radius);
		background-color: white;
		color: var(--ink);
		transform: translateY(-2px);
		transition: all 0.1s;

		&:hover {
			transform: translateY(-3px);
		}

		&:active {
			transform: translateY(-1px);
		}
	}

	/* Hide actual radio buttons */
	.button-group input[type='radio'] {
		display: none;
	}

	input {
		border-radius: var(--border-radius);
	}

	.category-wrapper {
		margin-bottom: var(--space-xl);
	}

	.tag-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 2px;
	}

	.tag {
		background: var(--primary-100);
		border: solid 1px var(--grey-600);
		border-radius: var(--border-radius);
		width: fit-content;
		white-space: nowrap;
		font-weight: 600;
		color: var(--grey-800);
		padding: 2px 8px;
		font-size: var(--space-sm);
	}

	.title {
		font-weight: bold;
		font-size: var(--text-md);
	}

	.summary-wrapper {
		/* border: solid 1px; */
		height: 100%;
		padding: var(--space-xs) 0;
		margin: 0;
	}

	.short-summary {
		font-size: var(--text);
		margin: 0;
	}

	.card-link-wrapper {
		color: unset;

		.card {
			padding: var(--space-sm);

			border-radius: var(--border-radius);
			border: solid 1px var(--grey-300);
			background: var(--grey-100);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			&:hover {
				border-radius: var(--border-radius);
				background: var(--grey-200);
			}
		}
	}

	.grid {
		gap: var(--space-md);
	}

	/* Media query for mobile devices */
	@media (max-width: base.$sm) {
		.grid {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: base.$md) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: base.$lg) {
		.grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.button-group {
			display: flex;
			gap: 10px;
			font-weight: bold;
			padding: var(--space);
			margin-bottom: var(--space-xl);
		}
	}
</style>
