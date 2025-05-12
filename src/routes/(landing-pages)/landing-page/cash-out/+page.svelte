<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import faqs from '$lib/data/general-faqs.js';
	import { reviews } from '$lib/data/reviews.js';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
	import WhyUs from '$lib/components/landing-page/WhyUs.svelte';
	import CashOutForm from '../../../(form-pages)/form/cash-out/CashOutForm.svelte';
</script>

<svelte:head>
	<title>Cashout Refinance Options | Clarence Home Loans</title>
	<meta
		name="description"
		content="Explore cashout refinance options to access your home's equity with Clarence Home Loans. Learn how to use your home’s value to consolidate debt, fund home improvements, or cover other expenses."
	/>
	<meta
		name="keywords"
		content="cashout refinance, refinance home loan, access home equity, debt consolidation, home improvement refinance, cashout mortgage"
	/>
	<meta
		name="author"
		content="Clarence Home Loans"
	/>
</svelte:head>

<div class="form">
	<CashOutForm />
</div>
<Hero
	title="Unlock the Value of Your Home with a Cashout Refinance"
	subtitle="Access your home’s equity for debt consolidation, home improvements, and more."
	text="Looking to tap into your home’s equity? We provide clear and reliable guidance to help you make the most of your refinance options, offering competitive rates and flexible solutions."
	imagePath="goe-family.avif"
/>

<Stats
	statData={[
		{
			number: 'Over $4,000',
			text: 'Saved against other lenders'
		},
		{ number: '17', text: 'Average days to close' },
		{ number: '180+', text: 'Familes Helped' }
	]}
/>

<Testimonials {reviews} />

<WhyUs />

<section>
	<div class="container">
		<div class="faq-wrapper">
			<h3>Frequently Asked Questions</h3>
			{#each faqs as faq}
				<Accordion title={faq.title}>
					{@html faq.content}
				</Accordion>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="container">
		<SimpleCta
			subTitle="Get Expert Guidance on Cashout Refinancing"
			title="Join homeowners nationwide who trust us to unlock their home’s equity."
			buttonText="Request More Info"
			buttonLink="#main"
		/>
	</div>
</section>
