<script lang="ts">
    import BreadCrumbs from '$lib/components/BreadCrumbs.svelte'
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'

    const { data } = $props()
    const loan = $derived(data.loan?.[0])
</script>

<section class="header">
    <BreadCrumbs />
    <div class="container">
        <div class="header-inner">
            <div>
                <h1>{loan?.title}</h1>
                <div class="summary">{loan?.short_summary}</div>
            </div>
            <!-- <div><pre>{JSON.stringify(loan, null, 4)}</pre></div> -->
        </div>
    </div>
</section>
<section>
    <div class="container content">
        {#if loan}
            <div>
                {@html loan.content1}
            </div>
        {/if}
    </div>
    <div class="container">
        {#if loan?.ad1}
            <SimpleCta
                title={loan.ad1.title}
                subTitle={loan.ad1.subtitle}
                description={loan.ad1.text}
            />
        {/if}
    </div>
    <div class="container content">
        {#if loan?.content2}
            <div>
                {@html loan.content2}
            </div>
        {/if}
    </div>
    <div class="container">
        {#if loan}
            <SimpleCta
                title={loan.ad2.title}
                subTitle={loan.ad2.subtitle}
                description={loan.ad2.text}
            />
        {/if}
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    /* .content { */
    /*     max-width: 800px; */
    /* } */

    .header {
        margin: 0;
        background: var(--green-600);
        padding: var(--space-md) 0;
        color: white;

        .header-inner {
            padding: var(--space-lg) 0;
            display: grid;
            gap: var(--space-lg);
        }
    }

    @media (min-width: base.$lg) {
        .header-inner {
            padding: var(--space-lg) 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-xl);
        }
    }
</style>
