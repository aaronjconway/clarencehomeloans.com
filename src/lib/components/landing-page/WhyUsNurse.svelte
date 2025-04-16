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
            <h2>Homeownership Support Built for Nurses</h2>
        </header>
        <p>
            With over <strong
                >nine years of experience in real estate and lending</strong
            >, we understand the unique challenges healthcare professionals face
            when buying a home. That’s why we’ve created a program specifically
            for nurses — built around your schedule, your needs, and your goals.
        </p>

        <p>Most importanly, <strong>you deserve it.</strong></p>

        <p>
            We’re not just mortgage experts — we’re advocates for nurses. We <strong
                >work closely with you throughout the entire process</strong
            >, offering flexible loan options, personalized guidance, and a
            commitment to making homeownership more accessible for those who
            care for others every day.
        </p>
        <p>
            From <strong>pre-approval to closing</strong>, we help simplify the
            path to your new home. Whether you're a first-time buyer or
            relocating, you’ll have a team that understands your profession and
            works around your schedule. With us, you’re not just getting a
            mortgage — <strong>you’re gaining a trusted partner</strong> who’s here
            to support you every step of the way.
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
            <h2>Why Nurses Choose Us for Home Financing</h2>
            <p>
                Dedicated support, flexible loan options, and a home buying
                experience built around your life as a nurse.
            </p>
        </header>
        <div class="grid">
            <div class="item">
                <i class="fa fa-dollar"></i>
                <div class="header">Save Thousands in Costs</div>
                <div class="content">
                    On average, nurses save over <strong>$4,000</strong> when working
                    with us compared to traditional "Hero's" programs. Lower fees,
                    better rates, and zero fluff — just real savings you deserve.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-phone"></i>
                <div class="header">Personalized Support</div>
                <div class="content">
                    We’re available 7 days a week to answer your questions,
                    explain your options, and guide you from pre-approval to
                    closing — on your schedule.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-heart"></i>
                <div class="header">Nurse-Focused Programs</div>
                <div class="content">
                    From low down payments to relaxed credit guidelines, our
                    loan options are designed to support nurses and healthcare
                    professionals like you.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-user-md"></i>
                <div class="header">We Understand Nurse Income</div>
                <div class="content">
                    Whether you're paid hourly, work per diem, rely on overtime,
                    or have travel nurse contracts — we know how to navigate and
                    document your income to help you qualify. We've helped
                    nurses in every kind of role buy homes, and we tailor the
                    process to fit your unique pay structure.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-bolt"></i>
                <div class="header">Fast, Hassle-Free Closings</div>
                <div class="content">
                    We streamline the process to help you close quickly — often
                    in 2–3 weeks. No unnecessary delays or piles of paperwork.
                </div>
            </div>
            <div class="item">
                <i class="fa fa-laptop"></i>
                <div class="header">Easy Online Experience</div>
                <div class="content">
                    Apply from your phone or laptop anytime. Our secure online
                    tools make it easy to track your loan and upload documents
                    without the stress.
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
