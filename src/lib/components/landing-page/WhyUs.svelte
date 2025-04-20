<!-- <script lang="ts"> -->
<!--     /* -->
<!--      * landing page section for explaining why austin specific -->
<!--      * -->
<!--      * -->
<!--      * */ -->
<!-- </script> -->

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
            <h2>Why Homebuyers Choose Us</h2>
            <p>
                Dedicated support, flexible loan options, and a home buying
                experience built around your life.
            </p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Save Thousands in Costs</div>
                <div class="content">
                    On average, our clients save over <strong>$4,000</strong> compared
                    to traditional programs. Lower fees, better rates, and zero fluff
                    — just real savings you can count on.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-phone"></i>
                <div class="header">Personalized Support</div>
                <div class="content">
                    We’re available 7 days a week to answer your questions,
                    explain your options, and guide you from pre-approval to
                    closing — all on your schedule.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-heart"></i>
                <div class="header">Tailored Loan Programs</div>
                <div class="content">
                    From low down payments to flexible credit guidelines, our
                    loan options are designed to meet you where you are and help
                    make homeownership more accessible.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-briefcase"></i>
                <div class="header">We Understand Unique Incomes</div>
                <div class="content">
                    Whether you're hourly, self-employed, rely on bonuses or
                    contract work — we know how to document and navigate your
                    income to help you qualify with confidence.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-bolt"></i>
                <div class="header">Fast, Hassle-Free Closings</div>
                <div class="content">
                    We streamline the process to help you close quickly — often
                    in just 2–3 weeks. No unnecessary delays or overwhelming
                    paperwork.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-laptop"></i>
                <div class="header">Easy Online Experience</div>
                <div class="content">
                    Apply anytime from your phone or laptop. Our secure online
                    tools make it simple to track your loan, upload documents,
                    and stay in the loop — stress-free.
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="container compact">
        <header>
            <h2>Homeownership Support Built for You</h2>
        </header>
        <p>
            With over <strong
                >nine years of experience in real estate and lending</strong
            >, we understand that everyone’s journey to homeownership is
            different. That’s why we’ve created a program designed to meet you
            where you are — built around your schedule, your needs, and your
            goals.
        </p>

        <p>
            We’re not just mortgage experts — we’re committed to being your
            advocate. We <strong
                >work closely with you throughout the entire process</strong
            >, offering flexible loan options, personalized guidance, and a
            dedication to making homeownership more accessible for individuals
            and families from all walks of life.
        </p>
        <p>
            From <strong>pre-approval to closing</strong>, we help simplify the
            path to your new home. Whether you're a first-time buyer or planning
            your next move, you’ll have a team that understands your priorities
            and works around your schedule. With us, you’re not just getting a
            mortgage — <strong>you’re gaining a trusted partner</strong> who’s here
            to support you every step of the way.
        </p>
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

            &:after {
                content: '';
                display: block;
                width: 40px;
                height: 5px;
                border-radius: 10px;
                border: var(--green-400) solid 1px;
                background: var(--green-400);
            }
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
