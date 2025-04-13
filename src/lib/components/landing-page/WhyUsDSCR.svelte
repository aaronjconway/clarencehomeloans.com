<section>
    <div class="container">
        <header>
            <h2>Why Choose Us for Your DSCR Loan?</h2>
            <p>
                Expert guidance, flexible options, and a process built for
                investors.
            </p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-phone"></i>
                <div class="header">Expert Support</div>
                <div class="content">
                    Get transparent and fast answers. Our experts are here 7
                    days a week to guide you through every step — from
                    pre-approval to closing.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Investor-Friendly Terms</div>
                <div class="content">
                    Competitive rates, great options, and flexible guidelines.
                    We structure deals that make sense for your goals.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-shield"></i>
                <div class="header">Experience</div>
                <div class="content">
                    We’ve helped hundreds of investors close on cash-flowing
                    properties. Our community of real estate pros knows: we get
                    it done, and we get it done right.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-bolt"></i>
                <div class="header">Fast Closings</div>
                <div class="content">
                    Skip the paperwork headache. DSCR loans are designed for
                    speed, and our team is built for efficiency — often closing
                    in 2–3 weeks or less.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-percent"></i>
                <div class="header">Access to Top Lenders</div>
                <div class="content">
                    With hundreds of lender relationships, we shop your loan to
                    find the best rate and structure for your unique property
                    and rental income.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-laptop"></i>
                <div class="header">Simple, Online Process</div>
                <div class="content">
                    Apply and manage your loan from anywhere. Our secure online
                    platform keeps everything moving smoothly, so you can focus
                    on your next investment.
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
