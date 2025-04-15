<script lang="ts">
    /*
     * Not specific to any one page since uses action in +page.server to send events
     TODO:-- not a huge fan that this is coupled to the page at /?contact form action
     I think I would rather have a component with {data} {/path} whatever to make a post with contact
     info
     * */
    import { enhance } from '$app/forms'
    import Phone from 'virtual:icons/openmoji/mobile-phone'
    import Email from 'virtual:icons/openmoji/e-mail'

    let { form } = $props()

    let phone = $state('')
    function formatPhone() {
        let value = phone
        value = value.replace(/\D/g, '')
        var size = value.length
        if (size > 0) value = '(' + value
        if (size > 3) value = value.slice(0, 4) + ') ' + value.slice(4, 11)
        if (size > 6) value = value.slice(0, 9) + '-' + value.slice(9)
        phone = value
    }
</script>

<section>
    <div class="container">
        <div class="wrapper">
            <div class="left">
                <h1>Learn more with a short call or email.</h1>
                <p>
                    Have a question about the process or ready to get started
                    earning more?
                </p>
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
                {#if form?.success}
                    <div>
                        <h2>Thank you!</h2>
                        <p>We typically reach out within a few hours.</p>
                    </div>
                {:else}
                    <form method="POST" use:enhance action="?/contact">
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
                            <div class="form-group special">
                                <label for="special">
                                    <input type="text" name="special" />
                                </label>
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

                        <div class="name-group">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    bind:value={phone}
                                    oninput={formatPhone}
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
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label for="privacy" class="privacy">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    name="privacy"
                                    required
                                />
                                I agree to be contacted by Clarence Home Loans via
                                call, email, and text. To opt out, you can reply
                                'stop' at any time or click the unsubscribe link
                                in the emails. Message and data rates may apply.
                                <a href="/privacy-policy?from=contact"
                                    >Privacy policy</a
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
    .privacy {
        font-size: var(--text-sm);
    }
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
            .form-group {
            }
        }
    }

    .special {
        display: none;
    }
</style>
