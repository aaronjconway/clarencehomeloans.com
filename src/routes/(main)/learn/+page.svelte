<script lang="ts">
    import SimpleCta from '$lib/components/sections/SimpleCTA.svelte'

    let { data } = $props()

    let articles = data.articles
</script>

<section>
    <div class="container">
        <header>
            <h1>Home loan options for everyone</h1>
        </header>

        <pre>{JSON.stringify(articles, null, 4)}</pre>
    </div>
</section>
<section>
    <div class="container">
        <SimpleCta
            subTitle="Start with Expert Advice"
            title="Not sure which loan is right for you? We’ll point you in the right direction."
            buttonText="Get Started"
        />
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    .grid {
        gap: var(--space-md);
    }

    /* Media query for mobile devices */
    @media (max-width: base.$sm) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: base.$md) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (min-width: base.$lg) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
