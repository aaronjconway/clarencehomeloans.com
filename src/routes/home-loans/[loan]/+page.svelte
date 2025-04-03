<script lang="ts">
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'

    const { data } = $props()
    const loan = $derived(data.result?.[0])
</script>

<section class="header">
    <div class="container">
        <div class="header-inner">
            <div>
                <h1>{loan?.title}</h1>
                <div class="summary">{loan?.short_summary}</div>
            </div>
            <div>detials</div>
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
        {#if loan}
            <SimpleCta
                title={loan.ad1.title}
                subTitle={loan.ad1.subtitle}
                description={loan.ad1.text}
            />
        {/if}
    </div>
    <div class="container content">
        {#if loan}
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
        color: white;
        padding: var(--space-xl) 0;
        h1 {
            font-size: var(--text-xxxl);
        }
    }

    @media (min-width: base.$lg) {
        .header-inner {
            display: grid;
            .summary {
                /* max-width: 66%; */
            }
        }
    }
</style>
