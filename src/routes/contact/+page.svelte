<script lang="ts">
    import type { ActionData } from './$types'
    import { enhance } from '$app/forms'
    let { form }: { form: ActionData } = $props()
    import Phone from 'virtual:icons/openmoji/mobile-phone'
    import Email from 'virtual:icons/openmoji/e-mail'
</script>

<section>
    <div class="container">
        <div class="wrapper">
            <div class="left">
                <h1>We're excited to help out!</h1>
                <p>
                    Have a question about us, starting a new loan, or just
                    looking to get some home buying education?
                </p>
                <p>Reach out anytime.</p>
                <div class="contact-wrapper">
                    <div class="icon-wrapper">
                        <Phone width="100%" height="100%" />
                    </div>
                    <a href="tel:6197720878">(619) 772 0878</a>
                </div>
                <div class="contact-wrapper">
                    <div class="icon-wrapper">
                        <Email width="100%" height="100%" />
                    </div>
                    <a href="mailto:info@gimmerate.com">info@gimmerate.com</a>
                </div>
            </div>
            <div class="right">
                {#if form?.success}
                    <div>
                        <h2>Thank you!</h2>
                        <p>We typically reach out within a few hours.</p>
                    </div>
                {:else}
                    <form method="POST" use:enhance>
                        <div class="name-group">
                            <div class="form-group">
                                <label for="first_name">First Name</label>
                                <input
                                    type="text"
                                    id="first_name"
                                    name="first_name"
                                    required
                                />
                            </div>
                            <div class="form-group">
                                <label for="last_name">Last Name</label>
                                <input
                                    type="text"
                                    id="last_name"
                                    name="last_name"
                                    required
                                />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                            />
                        </div>

                        <div class="form-group">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea name="message" required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="privacy">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    required
                                />
                                I agree to the
                                <a
                                    class="link"
                                    href="/privacy-policy?from=contact"
                                    >privay policy</a
                                >
                            </label>
                        </div>

                        <button type="submit" class="primary">Submit</button>
                    </form>
                {/if}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    .wrapper {
        display: grid;
        grid-template-columns: 2fr;
        gap: 12rem;
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
