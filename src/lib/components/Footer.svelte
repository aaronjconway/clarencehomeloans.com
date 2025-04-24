<script>
    import Logo from '$lib/components/Logo.svelte'
</script>

<footer>
    <div class="container">
        <hr />
        <p class="details">
            Clarence Mortgage is Empowered by Nexa Mortgage, a mortgage broker
            NMLS #1660690, as required by law, with its main office located at
            3100 W Ray Road #201, Office #209, Chandler AZ 85226. Corporate
            phone number (602) 344-9333. This site is directed at, and made
            available to, persons in the continental U.S., Alaska and Hawaii
            only. Arizona State License - AZMB 0944059. This form does NOT
            constitute a commitment to lend.
        </p>
        <div class="footer-content">
            <div class="footer-column logo">
                <div class="logo">
                    <Logo />
                    <div class="address">
                        <span class="address-text">3100 W Ray Road #201</span>
                        <span class="address-text">Office #209</span>
                        <span class="address-text">Chandler, AZ 85226</span>
                    </div>
                    <hr />
                </div>
                <div class="contact-info">
                    <p>Austin Clarence NMLS 1509690</p>
                    <p>AZMB 0937532</p>
                    <p>Nexa Mortgage NMLS 1660690</p>
                    <p>AZMB 0944059</p>
                    <br />
                    <!-- TODO: add phone -->
                    <a href="tel:">Phone: (602) 737-2576</a>
                    <a href="/contact">Send an Email</a>
                </div>
            </div>
            <div class="footer-column">
                <div class="footer-column-header">Company</div>
                <ul>
                    <li><a href="/landing-page/careers">Careers</a></li>
                    <li>
                        <a href="/faq">Frequently Asked Questions</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <div class="footer-column-header">About Us</div>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/licensing">Licensing</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li>
                        <a href="/texas-compliance-notice"
                            >Texas Compliance Notice</a
                        >
                    </li>
                </ul>
            </div>
        </div>
        <div class="equal-housing">
            <img
                class="equal-housing-image"
                width={100}
                src={'/eqlhousing.svg'}
                alt="A 2d simple house outline with the words equal housing opportunity below it."
            />
        </div>
    </div>
</footer>

<style lang="scss">
    .container {
        margin-top: 4rem;
    }

    .footer-column-header {
        font-size: var(--text-md);
        font-weight: bold;
        margin-bottom: var(--space-sm);
    }

    li {
        margin-bottom: var(--space-sm);
    }

    footer {
        a {
            color: inherit;
            text-decoration: inherit;
        }

        .details {
            margin-top: 2rem;
            margin-bottom: 2rem;
            font-size: var(--text-sm);
            text-align: left;
        }
    }

    .footer-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: var(--space-xl);
        padding: var(--space-md) 0;
    }

    .contact-info {
        display: flex;
        flex-direction: column;
        gap: var(--space-xs);

        p {
            margin: 0;
            padding: 0;
        }
    }

    .footer-column {
        display: flex;
        flex-direction: column;
        justify-content: start;
        white-space: nowrap;
    }

    .logo {
        margin: 0;
        padding: 0;

        @media (min-width: 1024px) {
            grid-column: span 1;
        }
    }

    .address {
        margin: var(--space-md) 0;
        font-size: var(--text-sm);
        line-height: 1;
    }

    .address-text {
        display: block;
        margin-top: var(--space-xs);
    }
</style>
