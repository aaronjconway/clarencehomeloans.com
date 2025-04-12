<section>
    <div class="container">
        <header>
            <h2>Why work with Clarence Home Loans?</h2>
            <p>Get the best balance of pay and support</p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-legal"></i>
                <div class="header">Licensing & Compliance</div>
                <div class="content">
                    We handle the heavy lifting—stay focused on getting new
                    business and not the details of brokerage licensing.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Compensation & Options</div>
                <div class="content">
                    Earn up to ( and sometimes over ) 275bps with access to 200+
                    lenders. Maximize your margins and your freedom—no caps, no
                    nonsense.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-shield"></i>
                <div class="header">Support</div>
                <div class="content">
                    From marketing tools to loan specific help, we’ve got your
                    back with real people, real answers, and real-time
                    solutions.
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
            gap: var(--space-md);
        }
    }
</style>
