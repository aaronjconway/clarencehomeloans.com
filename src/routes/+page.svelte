<script>
	import Hero from '$lib/components/sections/Hero.svelte'
	import Benefits from '$lib/components/sections/Benefits.svelte'
	import Testimonials2 from '$lib/components/sections/Testimonials2.svelte'
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'
	import BannerLinks from '$lib/components/sections/BannerLinks.svelte'
	import HowItWorks from '$lib/components/sections/HowItWorks.svelte'
</script>

<svelte:head>
	<title>Your Arizona Mortgage Professional | Austin Clarence</title>
</svelte:head>

<Hero />
<BannerLinks />
<Testimonials2 />
<HowItWorks />
<Benefits />
<section>
	<div class="container">
		<SimpleCta />
	</div>
</section>
