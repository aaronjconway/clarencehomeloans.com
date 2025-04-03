---
title: 'Frequently Asked Questions'
---

<script>
import Accordion from '$lib/components/Accordion.svelte'
import {faqs} from '$lib/data/faqs.tsx'
import SimpleCTA from '$lib/components/sections/SimpleCTA.svelte';
</script>

<div class="wrapper">
    <div>
Have questions? We’ve have answers! Browse our FAQ to find quick solutions to common inquiries. Whether you need help with orders, shipping, returns, or account management, we’re here to make things easy. If you don’t find what you’re looking for, feel free to contact us!

    </div>
    <div>
{#each faqs as faq}
            <Accordion title={faq.title}>
                {@html faq.content}
            </Accordion>
{/each}
    </div>
</div>

<div class="ad-wrapper">
    <SimpleCTA />
</div>

<style lang="scss">
    @use '/src/styles/base.scss';

    .ad-wrapper {
        margin-top:var(--space-xl)
    }

    .wrapper {
        display:grid;
        gap:1rem;
        grid-template-columns: 1fr;
    }

    /* Media query for mobile devices */
    @media (max-width: base.$sm) {
        .wrapper {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: base.$md) {

        .wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: base.$lg) {

        .wrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
