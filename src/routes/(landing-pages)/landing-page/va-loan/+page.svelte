<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import faqs from '$lib/data/general-faqs.js';
	import { reviews } from '$lib/data/reviews.js';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
	import WhyUs from '$lib/components/landing-page/WhyUs.svelte';
	import VAform from '../../../(form-pages)/form/va-loan/VAform.svelte';
</script>

<svelte:head>
	<title>VA Home Loan Program | Clarence Home Loans</title>
	<meta
		name="description"
		content="Explore VA home loan options with exclusive benefits for veterans and active duty military. Start our simple form to see what you qualify for—no credit check required to begin."
	/>
	<meta
		name="keywords"
		content="VA home loan, veterans home loan, military home loan, VA mortgage, home loans for veterans, VA loan pre-approval"
	/>
	<meta
		name="author"
		content="Clarence Home Loans"
	/>
</svelte:head>

<div class="form">
	<VAform />
</div>
<Hero
	title="The Best VA Home Loan Options, Rates, and Transparent Guidance"
	subtitle="Helping veterans and active duty military become homeowners — with less hassle and more savings."
	text="Buying a home with a VA loan is easier than you think! We’re here to provide you with the most accurate and transparent advice while delivering the best pricing and options."
	imagePath="flag.avif"
/>

<Stats
	statData={[
		{
			number: 'Over $4,000',
			text: 'Saved against other "Heroes" or "Next Door" programs'
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
			subTitle="Start with Trusted Expert Advice"
			title="Trusted by veterans and military families nationwide. Get started today."
			buttonText="Request more info"
			buttonLink="#main"
		/>
	</div>
</section>
