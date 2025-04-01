<section>
    <div class="container">
        <header>
            <h2>How does this work?</h2>
            <p>We make sure you're getting the best possible deal.</p>
            <a href="/faq">Frequently Asked Questions</a>
        </header>
        <div class="steps-wrapper">
            <div class="step">
                <div class="step-header">
                    <div class="step-number">1</div>
                    <div class="step-header-text">Chat</div>
                </div>
                <div class="step-content">
                    Have a seasoned professional evaluate your situation wether
                    that's just getting started or you already have a loan
                    estimate.
                </div>
            </div>
            <div class="step">
                <div class="step-header">
                    <div class="step-number">2</div>
                    <div class="step-header-text">Strategize</div>
                </div>
                <div class="step-content">
                    Conduct a detailed review of your unique scenario ensuring
                    you have accurate information.
                </div>
            </div>
            <div class="step">
                <div class="step-header">
                    <div class="step-number">3</div>
                    <div class="step-header-text">Match</div>
                </div>
                <div class="step-content">
                    Find a set of reliable and great priced lenders that meet
                    your goals.
                </div>
            </div>
            <div class="step">
                <div class="step-header">
                    <div class="step-number-wrapper">
                        <div class="step-number">4</div>
                    </div>
                    <div class="step-header-text">Choose</div>
                </div>
                <div class="step-content">
                    Get connected with that lender and keep us in the background
                    to ensure a smooth process.
                </div>
            </div>
        </div>
        <div class="cta">
            <a class="btn" href="/process">Read more about the process</a>
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base.scss';

    header {
        text-align: center;
        margin-bottom: var(--space-lg);
    }

    section {
        background: var(--grey-100);
        margin: 0;
        padding: 0;
    }

    h2 {
        margin-bottom: var(--space-xl);
    }

    .cta {
        margin: var(--space-lg) 0;
        display: flex;
        justify-content: center;
        width: 100%;
        border-radius: 2px;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: var(--space-xl) 5%;

        @media (min-width: base.$lg) {
            padding: var(--space-xl) 0;
        }
    }

    .step {
        margin-bottom: var(--space-md);
        @media (min-width: base.$md) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: base.$lg) {
            grid-template-columns: repeat(4, 1fr);
            gap: var(--space-md);
            padding: 0;
            margin: var(--space-lg);
            width: 100%;
        }
    }

    .step-header {
        display: flex;
        font-weight: 700;
        font-size: var(--text-md);
        align-items: center;
        padding-left: 30%;
        padding-bottom: var(--space-md);
    }

    .step-header-text {
        margin-left: var(--space-sm);
        width: 100%;
    }

    .step-number {
        display: flex;
        background: var(--green-600);
        font-size: 40px;
        color: white;
        align-items: center;
        align-self: flex-start;
        border-radius: 100%;
        margin: 0;
        flex-shrink: 0;
        height: var(--space-xl);
        justify-content: center;
        width: var(--space-xl);
    }

    .steps-wrapper {
        display: grid;
        gap: var(--space-xl);
        grid-template-columns: 1fr;
        margin-bottom: var(--space-xl);

        @media (min-width: base.$md) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: base.$lg) {
            margin-top: var(--space-md);
            grid-template-columns: repeat(4, 1fr);
            padding: 0;
        }
    }

    @media (min-width: base.$lg) {
        .step-header-text {
            text-align: unset;
        }
        .step-header {
            padding-left: 0;
        }
    }
</style>
