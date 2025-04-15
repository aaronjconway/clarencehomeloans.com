<script lang="ts">
    /*
     * landing page section for explaining what nexa is or why nexa
     *
     *
     * */
</script>

<section>
    <div class="container">
        <header>
            <h2>Why work with Nexa Mortgage and Clarence Home Loans?</h2>
            <p>The best pay and support — no compromises.</p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-phone"></i>
                <div class="header">Support</div>
                <div class="content">
                    12 hours per day 6 days a week get live support with
                    licensed Loan Officer coaches.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Compensation</div>
                <div class="content">
                    Keep 100% of your profits with Nexa100 and regularly earn
                    over 200bps while still being highly competitive. Maximize
                    your margins and your freedom—no caps, no nonsense.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-shield"></i>
                <div class="header">Community</div>
                <div class="content">
                    With close to 3,000 loan officers and an engaged Facebook
                    group, your voice matters and we genuinely enjoy supporting
                    one another.
                </div>
            </div>

            <div class="item">
                <i class="fa fa-bolt"></i>
                <div class="header">Processing</div>
                <div class="content">
                    With close to 3,000 loan officers and an engaged Facebook
                    group, your voice matters and we genuinely enjoy supporting
                    one another.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-percent"></i>
                <div class="header">Rates</div>
                <div class="content">
                    When it comes to mortgage rates, we don’t just compete — we
                    lead. With access to hundreds of lenders, NEXA Mortgage
                    helps you lock in the best rate for your unique situation.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-laptop"></i>
                <div class="header">Technology</div>
                <div class="content">
                    Our advanced web-based platform makes the mortgage process
                    faster, easier, and more reliable. Apply, track, and manage
                    your loan—all from the convenience of your device.
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
