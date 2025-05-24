<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import WhyUsLe from '$lib/components/landing-page/WhyUsLE.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import faqs from '$lib/data/loanestimate-faqs.js';
	import LoanEstimateForm from '../../../(form-pages)/form/match-or-beat-your-loan-estimate/LoanEstimateForm.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
</script>

<svelte:head>
	<title>Match or Beat Your Loan Estimate | Clarence Home Loans</title>
</svelte:head>

<div class="form">
	<LoanEstimateForm />
</div>
<Hero
	title="Compare Your Mortgage Rates — We'll Match or Beat Your Loan Estimate!"
	subtitle="Get the best deal on your home loan — fast, easy, and no hassle."
	text="Looking for a better mortgage rate? Bring us your current loan estimate, and we’ll match it or beat it. Our expert mortgage brokers are dedicated to helping you find the most affordable loan options with low down payments, flexible terms, and a smooth process. Compare now and start saving today!"
	imagePath="le.webp"
/>

<Stats
	statData={[
		{ number: '>$4,000', text: 'Saved on average' },
		{ number: '17', text: 'Average days to close' },
		{ number: '180+', text: 'Familes Helped' }
	]}
/>

<WhyUsLe />

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
			subTitle="Get the Best Deal on Your Mortgage"
			title="Trusted by Homebuyers Across the Country. Compare Rates and Save Now!"
			buttonText="Get Your Free Rate Comparison"
			buttonLink="#main"
		/>
	</div>
</section>
