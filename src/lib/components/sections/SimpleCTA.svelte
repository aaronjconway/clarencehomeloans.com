<script>
    const {
        subTitle = 'sign up for free',
        title = 'Get your home buying and rate questions answered today.',
        description = 'Answer a few questions to get a personalized offer.',
        buttonText = 'Get Started Today',
        buttonLink = 'purchase',
    } = $props()
</script>

<section>
    <div class="wrapper">
        <div class="left">
            <div class="sub-title">{subTitle}</div>

            <h2>{title}</h2>
            <p>
                {description}
            </p>
        </div>
        <div class="right">
            <a
                href={buttonLink != 'null'
                    ? '/form/purchase'
                    : `/form/${buttonLink}`}
                class="btn">{buttonText}</a
            >
            <div class="credit-info-wrapper">
                <div>
                    <div>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 0.666504L2 3.33317V7.33317C2 11.0332 4.56 14.4932 8 15.3332C11.44 14.4932 14 11.0332 14 7.33317V3.33317L8 0.666504ZM6.66667 11.3332L4 8.6665L4.94 7.7265L6.66667 9.4465L11.06 5.05317L12 5.99984L6.66667 11.3332Z"
                                fill="#006642"
                            >
                            </path>
                        </svg><span class="">No Credit Check</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base.scss';

    .credit-info-wrapper {
        background: var(--green-100);
        font-size: var(--text-xs);
        padding: 4px 8px;
        border-radius: 4px;
        div {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }

    section {
        border-radius: 4px;
    }

    .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-md);
        padding: var(--space);
        background: var(--grey-200);
        border-radius: 4px;

        .right {
            display: flex;
            gap: var(--space-sm);
            flex-direction: column;
            justify-content: start;
            align-items: start;
        }

        .sub-title {
            color: var(--green-400);
            text-transform: uppercase;
            font-weight: bold;
        }

        h2 {
            font-size: var(--text-xl);
            margin-top: var(--space-md);
        }

        p {
            font-size: var(--text);
        }
    }

    @media (min-width: 786px) {
        .wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding: var(--space-lg);
            background: var(--grey-100);
            border-radius: 4px;

            .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: start;
                width: fit-content;
                margin: 0 auto;
            }

            .sub-title {
                color: var(--green-400);
                text-transform: uppercase;
                font-weight: bold;
            }

            h2 {
                font-size: var(--text-xl);
                margin-top: var(--space-md);
            }

            p {
                font-size: var(--text);
                padding: 0;
                margin: 0;
            }
        }
    }
</style>
