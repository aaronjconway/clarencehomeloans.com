<script lang="ts">
    import Contact from '$lib/components/forms/parts/Contact.svelte'
    import Phone from 'virtual:icons/openmoji/mobile-phone'
    import Email from 'virtual:icons/openmoji/e-mail'

    let {
        formStore,
        title = 'Learn more with a short call or email.',
        subTitle = 'Have a question about the process or ready to get started earning more?',
    } = $props()
</script>

<section>
    <div class="container">
        <div class="wrapper">
            <div class="left">
                <h1>{title}</h1>
                <p>{subTitle}</p>
                <p>Reach out anytime.</p>
                <div class="contact-wrapper">
                    <div class="icon-wrapper">
                        <Phone width="100%" height="100%" />
                    </div>
                    <a href="tel:6027372576">(602) 737-2576</a>
                </div>
                <div class="contact-wrapper">
                    <div class="icon-wrapper">
                        <Email width="100%" height="100%" />
                    </div>
                    <a href="mailto:aclarence@nexamortgage.com"
                        >aclarence@nexamortgage.com</a
                    >
                </div>
            </div>
            <div class="right">
                <Contact hasHeader={false} {formStore} />
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 2fr;
        gap: 12rem;
        margin-top: var(--space-xxl);
    }

    .contact-wrapper {
        display: flex;
        align-items: center;
        white-space: nowrap;

        .icon-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            width: 40px;
            height: 40px;
        }
    }

    @media (min-width: 786px) {
        .wrapper {
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
