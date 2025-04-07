<script lang="ts">
    import type { ActionData } from './$types'
    import { enhance } from '$app/forms'
    let { form }: { form: ActionData } = $props()
    import Phone from 'virtual:icons/openmoji/mobile-phone'
    import Email from 'virtual:icons/openmoji/e-mail'

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
                <section>
                    <div class="container">
                        <h1>🚧 Under Construction 🚧</h1>
                        <p>
                            We are working hard to bring you something amazing.
                            Stay tuned! Please reach out via phone or email at
                            the moment.
                        </p>
                        <div class="spinner"></div>
                    </div>
                </section>
            </div>
            <!-- <div class="right"> -->
            <!--     {#if form?.success} -->
            <!--         <div> -->
            <!--             <h2>Thank you!</h2> -->
            <!--             <p>We typically reach out within a few hours.</p> -->
            <!--         </div> -->
            <!--     {:else} -->
            <!--         <form method="POST" use:enhance action="?/contact"> -->
            <!--             <div class="name-group"> -->
            <!--                 <div class="form-group"> -->
            <!--                     <label for="first_name">First Name</label> -->
            <!--                     <input -->
            <!--                         type="text" -->
            <!--                         id="first_name" -->
            <!--                         name="first_name" -->
            <!--                         required -->
            <!--                     /> -->
            <!--                 </div> -->
            <!--                 <div class="form-group beans"> -->
            <!--                     <label for="beans"> -->
            <!--                         <input type="text" name="beans" /> -->
            <!--                     </label> -->
            <!--                 </div> -->
            <!--                 <div class="form-group"> -->
            <!--                     <label for="last_name">Last Name</label> -->
            <!--                     <input -->
            <!--                         type="text" -->
            <!--                         id="last_name" -->
            <!--                         name="last_name" -->
            <!--                         required -->
            <!--                     /> -->
            <!--                 </div> -->
            <!--             </div> -->
            <!---->
            <!--             <div class="form-group"> -->
            <!--                 <label for="phone">Phone</label> -->
            <!--                 <input -->
            <!--                     type="tel" -->
            <!--                     id="phone" -->
            <!--                     name="phone" -->
            <!--                     required -->
            <!--                     bind:value={phone} -->
            <!--                     oninput={formatPhone} -->
            <!--                 /> -->
            <!--             </div> -->
            <!---->
            <!--             <div class="form-group"> -->
            <!--                 <label for="email">Email</label> -->
            <!--                 <input -->
            <!--                     type="email" -->
            <!--                     id="email" -->
            <!--                     name="email" -->
            <!--                     required -->
            <!--                 /> -->
            <!--             </div> -->
            <!--             <div class="form-group"> -->
            <!--                 <label for="message">Message</label> -->
            <!--                 <textarea name="message" required></textarea> -->
            <!--             </div> -->
            <!---->
            <!--             <div class="form-group"> -->
            <!--                 <label for="privacy" class="privacy"> -->
            <!--                     <input -->
            <!--                         type="checkbox" -->
            <!--                         id="privacy" -->
            <!--                         name="privacy" -->
            <!--                         required -->
            <!--                     /> -->
            <!--                     I agree to be contacted by Clarence Home Loans via -->
            <!--                     call, email, and text. To opt out, you can reply -->
            <!--                     'stop' at any time or click the unsubscribe link -->
            <!--                     in the emails. Message and data rates may apply. -->
            <!--                     <a href="/privacy-policy?from=contact" -->
            <!--                         >Privacy policy</a -->
            <!--                     > -->
            <!--                 </label> -->
            <!--             </div> -->
            <!---->
            <!--             <button type="submit" class="primary">Submit</button> -->
            <!--         </form> -->
            <!--     {/if} -->
            <!-- </div> -->
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

    .beans {
        display: none;
    }
</style>
