---
title: 'Frequently Asked Questions'
---

<script>
import Accordion from '$lib/components/Accordion.svelte'
import {faqs} from '$lib/data/faqs.tsx'
import SimpleCTA from '$lib/components/sections/SimpleCTA.svelte';
</script>

Have questions? We’ve have answers! Browse our FAQ to find quick solutions to common inquiries. Whether you need help with orders, shipping, returns, or account management, we’re here to make things easy. If you don’t find what you’re looking for, feel free to contact us!

<div>
{#each faqs as faq}
            <Accordion title={faq.title}>
                {@html faq.content}
            </Accordion>
{/each}
</div>

<div class="ad-wrapper">
    <SimpleCTA />
</div>

<style lang="scss">
    .ad-wrapper {
        margin-top:var(--space-xl)
    }
</style>
