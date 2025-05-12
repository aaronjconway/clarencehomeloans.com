<script lang="ts">
	import '/src/styles/globals.scss';
	import '@fortawesome/fontawesome-free/css/all.min.css';
	import Header from '$lib/components/forms/Header.svelte';
	import Footer from '$lib/components/forms/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Google tag (gtag.js) -->
	<script
		async
		src="https://www.googletagmanager.com/gtag/js?id=G-51P86CD244"
	></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());
		gtag('config', 'G-51P86CD244');
	</script>
</svelte:head>

<Header />
<div class="form">
	{#if children}
		{@render children()}
	{:else}
		<p>Uh oh! Looks like something is missing.</p>
	{/if}
</div>
<Footer />
