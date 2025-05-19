<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import WhyUsHero from '$lib/components/landing-page/WhyUsHeroes.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import faqs from '$lib/data/hero-faqs.js';
	import { reviews } from '$lib/data/reviews.js';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import HeroForm from '../../../(form-pages)/form/hero/HeroForm.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
</script>

<svelte:head>
	<title>Hero Home Buying Program | Clarence Home Loans</title>
	<meta
		name="description"
		content="Get exclusive mortgage options and home buying support tailored for community heroes like healthcare workers, teachers, first responders, and more. Start our step-by-step form to see what you qualify for—no credit check needed to begin."
	/>
	<meta
		name="keywords"
		content="hero home buying program, mortgage for heroes, home loans for community heroes, mortgage assistance for first responders, mortgage pre-approval for teachers, hero home loan program"
	/>
	<meta
		name="author"
		content="Clarence Home Loans"
	/>
</svelte:head>

<div class="form">
	<HeroForm />
</div>
<Hero
	title="The Best Options, Rates, and Transparent Guidance"
	subtitle="Helping healthcare heroes become homeowners — with less hassle and more savings."
	text="Buying a home can be tough! We’re here to provide you with the most accurate and transparent advice while delivering the best pricing and options."
	imagePath="nurse/hero-male-nurse-700-400.jpg"
/>

<Stats
	statData={[
		{
			number: 'Over $5,000',
			text: 'Saved against other "Heroes" or "Next Door" programs'
		},
		{ number: '17', text: 'Average days to close' },
		{ number: '180+', text: 'Familes Helped' }
	]}
/>

<Testimonials {reviews} />

<WhyUsHero />

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
			title="Trusted by community heroes nationwide. Get started today."
			buttonText="Request more info"
			buttonLink="#main"
		/>
	</div>
</section>
