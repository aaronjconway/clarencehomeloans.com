<script lang="ts">
    import { page } from '$app/state'
    import Facebook from 'virtual:icons/openmoji/facebook'
    import Twitter from 'virtual:icons/openmoji/twitter'
    import LinkedIn from 'virtual:icons/openmoji/linkedin'
    import Email from 'virtual:icons/openmoji/e-mail'

    const { title } = $props()
</script>

<div class="container">
    <div class="wrapper">
        <div>Share:</div>
        <div class="social-item">
            <a
                href={`https://facebook.com/sharer.php?u=https://clarencehomeloans.com${page.url.pathname}&t=${title}`}
                aria-label="Facebook"
                ><div class="icon">
                    <div class="icon">
                        <Facebook height={'100%'} width={'100%'} />
                    </div>
                </div></a
            >
        </div>

        <div class="social-item">
            <a
                href={`https://twitter.com/intent/tweet?url=https://clarencehomeloans.com${page.url.pathname}&text=${title}`}
                aria-label="Twitter"
            >
                <div class="icon">
                    <div class="icon">
                        <Twitter height="100%" width="100%" />
                    </div>
                </div>
            </a>
        </div>

        <div class="social-item">
            <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://clarencehomeloans.com${page.url.pathname}&title=${title}`}
                aria-label="LinkedIn"
            >
                <div class="icon">
                    <div class="icon">
                        <LinkedIn height="100%" width="100%" />
                    </div>
                </div>
            </a>
        </div>

        <div class="social-item">
            <a
                href={`mailto:?subject=${title}&body=Check%20out%20this%20page:%20https://clarencehomeloans.com${page.url.pathname}`}
                aria-label="Email"
            >
                <div class="icon">
                    <div class="icon">
                        <Email height="100%" width="100%" />
                    </div>
                </div>
            </a>
        </div>
    </div>
</div>

<style lang="scss">
    .icon {
        width: 40px;
        display: flex;
    }
    .container {
        padding: 0;
    }

    .wrapper {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        padding: 1rem;
        gap: var(--space);
    }
</style>
