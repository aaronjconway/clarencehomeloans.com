<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import WhyNexa from '$lib/components/landing-page/WhyNexa.svelte';
	import Accordion from '$lib/components/Accordion.svelte';

	// the larger contact
	import Contact from '$lib/components/landing-page/Contact.svelte';
	import faqs from '$lib/data/career-faqs.js';
	import { FormStore } from '$lib/stores/formStore.svelte';
	let formStore = new FormStore();
	formStore.data['page_source'] = 'career';
</script>

<svelte:head>
	<title>Careers | Clarence Home Loans</title>
</svelte:head>

<Contact {formStore} />
<Hero
	title="Take Control of Your Income and Career"
	subtitle=" Step into a better position — earn more, work your way."
	text="Tired of capped commissions and limited product options as a Retail loan officer? In the broker world, you gain full control over your pipeline, access to hundreds of lenders, and the freedom to build your own brand — all while earning upwards of 275bps per deal."
	imagePath="wfh.avif"
/>

<WhyNexa />

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
