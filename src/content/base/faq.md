---
title: 'Frequently Asked Questions'
---

<script>
import Accordion from '$lib/components/Accordion.svelte'
import {faqs} from '$lib/data/faqs.tsx'
import SimpleCTA from '$lib/components/sections/SimpleCTA.svelte';
</script>


<div class="wrapper faq">
{#each faqs as faq}
            <Accordion title={faq.title}>
                {@html faq.content}
            </Accordion>
{/each}
</div>
<SimpleCTA />

<style>
.wrapper {
    max-width:600px;
    margin:0 auto;
}
</style>
