<!-- <script lang="ts"> -->
<!--     /* -->
<!--      * landing page section for explaining why austin specific -->
<!--      * -->
<!--      * -->
<!--      * */ -->
<!-- </script> -->

<section>
    <div class="container compact">
        <header>
            <h2>Unbeatable Pricing. Unmatched Service.</h2>
        </header>

        <p>
            You deserve more than just a great loan — you deserve a team that’s
            committed to you from start to finish. That’s why we offer <strong
                >the best pricing available, paired with personalized service.</strong
            >
        </p>

        <p>
            With over <strong
                >nine years of experience in real estate and lending</strong
            >, we understand the unique demands of your profession. Our program
            is built to work around your schedule, your needs, and your goals.
        </p>

        <p>
            Whether you’re comparing loan estimates or just getting started,
            we’re here to ensure you get a competitive rate without sacrificing
            support. <strong
                >We make the process simple, transparent, and stress-free</strong
            > — just like it should be.
        </p>

        <p>
            From <strong>pre-approval through closing</strong>, you’ll have a
            dedicated team in your corner. We don’t just help you get a mortgage
            — <strong>we help you feel confident every step of the way.</strong>
        </p>
    </div>
</section>

<section>
    <div class="container">
        <div
            style="display:flex;flex-direction:column;justify-content: center; align-items: center;text-align: center;"
        >
            <h3>Fill out a few questions for more information.</h3>
            <a href="#main" class="btn">Start Now</a>
        </div>
    </div>
</section>

<section>
    <div class="container">
        <header>
            <h2>Why Choose Us to Compare Your Loan Estimate</h2>
            <p>
                Competitive pricing, unbeatable service, and a mortgage
                experience designed to save you time and money.
            </p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Better Rates, Real Savings</div>
                <div class="content">
                    Already have a Loan Estimate? We’ll match it — or beat it.
                    On average, clients save on average <strong>$4,000+</strong>
                    when they choose us over big-name lenders.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-phone"></i>
                <div class="header">Responsive, 7-Day Support</div>
                <div class="content">
                    Questions? We're available 7 days a week to provide fast
                    answers, walk you through your estimate, and help you make
                    confident decisions.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-thumbs-up"></i>
                <div class="header">No Junk Fees, No Gimmicks</div>
                <div class="content">
                    We keep it simple. No hidden charges, no unnecessary lender
                    fees — just transparent, competitive offers designed to work
                    in your favor.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-magnifying-glass"></i>
                <div class="header">Expert Estimate Reviews</div>
                <div class="content">
                    We break down your current Loan Estimate line by line —
                    explaining costs, pointing out red flags, and showing you
                    exactly where we can improve it.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-bolt"></i>
                <div class="header">Fast, Hassle-Free Closings</div>
                <div class="content">
                    We streamline the process to help you close in as little as
                    2–3 weeks. No delays, no confusion, just a smooth experience
                    from start to finish.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-laptop"></i>
                <div class="header">Easy Online Process</div>
                <div class="content">
                    Upload your Loan Estimate, track your progress, and sign
                    documents — all from your phone or computer. Fast, secure,
                    and stress-free.
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    section {
        margin-bottom: var(--space-xxl);
    }

    .container {
        display: flex;
        flex-direction: column;
    }

    .item {
        i {
            font-size: 32px;
        }

        .header {
            //
            font-weight: bold;
            font-size: var(--text-md);
        }

        .content {
            //
        }
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }

    header {
        text-align: center;
        margin-bottom: var(--space-xl);
    }

    /* Media query for mobile devices */
    @media (max-width: base.$sm) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: base.$lg) {
        .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-xl);
        }
    }
</style>
