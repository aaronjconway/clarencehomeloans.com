<script>
    import Transparent from 'virtual:icons/openmoji/magnifying-glass-tilted-right'
    import Money from 'virtual:icons/openmoji/dollar-banknote'
    import Check from 'virtual:icons/openmoji/check-mark-button'
    import Rocket from 'virtual:icons/openmoji/rocket'
    import Mobile from 'virtual:icons/openmoji/mobile-info'
    import Light from 'virtual:icons/openmoji/light-bulb'
</script>

<section>
    <div class="container">
        <div class="main-heading">
            <p class="sub-title">BENEFITS</p>
            <h2 class="after">Why Work with Us?</h2>
            <p class="sub-heading">High level information and transparency</p>
        </div>
        <div class="features-grid">
            <div class="feature">
                <div class="icon-wrapper">
                    <Transparent width="100%" height="100%" />
                </div>
                <div class="feature-content">
                    <div class="heading">Transparent</div>
                    <div class="sub-heading">{`We do not sugar coat`}</div>
                    <div class="content">
                        Our licensed ( yes licensed ) loan officers can get you
                        conscise and realistic information.
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="icon-wrapper">
                    <Money height={'100%'} width={'100%'} />
                </div>
                <div class="feature-content">
                    <div class="heading">Free</div>
                    <div class="sub-heading">
                        {`No cost at any time`}
                    </div>
                    <div class="content">
                        Read more about how we make money and provide this
                        service.
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="icon-wrapper">
                    <Rocket height={'100%'} width={'100%'} />
                </div>
                <div class="feature-content">
                    <div class="heading">Speed</div>
                    <div class="sub-heading">
                        {`Fast response and analysis`}
                    </div>
                    <div class="content">
                        We typically provide same day answers with long term
                        support for any stage home buyer.
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="icon-wrapper">
                    <Check height={'100%'} width={'100%'} />
                </div>
                <div class="feature-content">
                    <div class="heading">Simple</div>
                    <div class="sub-heading">
                        {`Easy to use online application`}
                    </div>
                    <div class="content">
                        Our streamlined process makes it incredibly easy to view
                        your proposal.
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="icon-wrapper">
                    <Mobile height={'100%'} width={'100%'} />
                </div>
                <div class="feature-content">
                    <div class="heading">Communication</div>
                    <div class="sub-heading">{`Available on weekends`}</div>
                    <div class="content">
                        We're educational, patient and readily accesible when
                        you need it - from hand holding to high level technical
                        analysis.
                    </div>
                </div>
            </div>
            <div class="feature">
                <div class="icon-wrapper">
                    <Light height={'100%'} width={'100%'} />
                </div>
                <div class="feature-content">
                    <div class="heading">Knowledge</div>
                    <div class="sub-heading">{`Highly experienced`}</div>
                    <div class="content">
                        Our guidline knowlege will give you confidence even on
                        the trickiest of situations. We routinely find solutions
                        others don't.
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base.scss';

    .main-heading {
        text-align: center;

        h2 {
            margin: 0;
            padding: 0;
        }
    }

    .feature-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .features-grid {
        margin-top: var(--space-xl);
        border: solid 1px var(--mid-grey);
        background: var(--grey-100);
        border-radius: 8px;
        padding: var(--space-md) var(--space-xs);
        display: grid;
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: var(--space-lg);

        @media (min-width: base.$md) {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: var(--space-sm);
        }

        @media (min-width: base.$lg) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            padding: var(--space-xl);
        }

        @media (min-width: base.$lg) {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            padding: var(--space-xl);
            .feature {
                margin: 10rem;
            }
        }

        .feature {
            display: flex;
            flex-direction: column;
            margin: 1rem;

            .feature-content {
                text-align: center;
                justify-content: start;

                .heading {
                    font-size: var(--text-md);
                    font-weight: bold;
                }

                .content {
                    margin-top: var(--space-sm);
                    text-align: left;
                    font-size: var(--text-sm);
                }

                .sub-heading {
                    padding: var(--space-xs) 0;
                    color: var(--green-500);
                    font-weight: bold;
                }
            }

            .icon-wrapper {
                width: 100%;
                margin-right: 1rem;
                height: 100px;
                margin-bottom: var(--space-lg);
                display: flex;
                justify-content: start;
                align-items: start;
            }
        }
    }
</style>
