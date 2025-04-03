<section>
    <div class="container">
        <div class="grid">
            <div class="left">
                <div class="sub-title">WELCOME</div>
                <h1 class="title">
                    Your Experienced and Trustworthy Mortgage Professionals
                </h1>
                <div class="action-wrapper">
                    <a class="btn" href="/pending">Start on a Purchase</a>
                    <a class="btn" href="/pending">Refinance</a>
                </div>
            </div>
            <div class="right">
                <div class="hero-image-wrapper">
                    <enhanced:img
                        class="hero-image"
                        src="/static/images/family.webp"
                        alt="A husband and wife, smiling, sitting on a couch in their home looking at a computer while kids run in the background."
                    />
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use '/src/styles/base';

    .action-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
        width: 100%;
        text-align: center;
        button,
        a {
            font-size: var(--text-md);
        }
    }

    //todo fix the image alt tag
    .hero-image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        overflow: hidden;
        width: auto;
    }

    .hero-image {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-md);
    }

    .left,
    .right {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }

    .title {
        margin: 0;
        margin-bottom: var(--space-md);
        line-height: 1.1;
        color: var(--ink);
    }

    /* Media query for mobile devices */
    @media (max-width: base.$sm) {
        .grid {
            grid-template-columns: 1fr;
        }
    }

    @media (min-width: base.$md) {
        section {
            height: 40vh;
        }
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .action-wrapper {
            width: fit-content;
        }
    }

    @media (min-width: base.$lg) {
        section {
            height: 60vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 1rem;
            margin-bottom: 4rem;
        }

        .grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .action-wrapper {
            display: flex;
            flex-direction: row;

            button,
            a {
                font-size: 20px;
                white-space: nowrap;
            }
        }
    }
</style>
