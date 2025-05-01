<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import faqs from '$lib/data/general-faqs';
	import { reviews } from '$lib/data/reviews.js';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
	import WhyUs from '$lib/components/landing-page/WhyUs.svelte';
	import PurchaseForm from '../../../(form-pages)/form/purchase/PurchaseForm.svelte';

	$effect(() => {
		gtag('event', 'arizona_purchase_page_view', {
			page_type: 'landing_page'
		});
	});
</script>

<svelte:head>
	<title>Arizona Mortgage Professional | Clarence Home Loans</title>
	<meta
		name="description"
		content="Get personalized mortgage options and expert home buying support for Arizona residents. Start our step-by-step form to see what you qualify for—no credit check needed to begin."
	/>
	<meta
		name="keywords"
		content="Arizona home buying program, Arizona mortgages, home loans in Arizona, mortgage assistance Arizona, mortgage pre-approval Arizona, Arizona home loan program"
	/>
	<meta
		name="author"
		content="Clarence Home Loans"
	/>
</svelte:head>

<div class="form">
	<PurchaseForm source={'arizona-purchase'} />
</div>

<Hero
	title="The Best Local Arizona Home Loan Options, Rates, and Honest Guidance"
	subtitle="Helping Arizona homebuyers find the right mortgage — with less stress and more savings."
	text="Buying a home can feel overwhelming, but we’re here to make it simple. We provide accurate advice, transparent communication, and the best loan options available."
	imagePath="goe-family.avif"
/>

<Stats
	statData={[
		{
			number: 'Over $4,000',
			text: 'Saved on average working with us.'
		},
		{ number: '17', text: 'Average days to close' },
		{ number: '180+', text: 'Familes helped and counting.' }
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
			subTitle="Not Sure Where to Start?"
			title="Get Expert Guidance on Finding the Right Mortgage for Your Arizona Home."
			buttonText="Talk to an Expert"
			buttonLink="#main"
		/>
	</div>
</section>
