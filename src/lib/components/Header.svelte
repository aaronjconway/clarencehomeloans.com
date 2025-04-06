<script lang="ts">
    import Logo from '$lib/components/Logo.svelte'
    import Hamburger from '$lib/components/Hamburger.svelte'
    import CloseButton from './CloseButton.svelte'
    import { goto, invalidateAll } from '$app/navigation'

    let { data } = $props()
    let { supabase, session } = $derived(data)

    const logout = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) {
            console.error(error)
        }
        invalidateAll()
        handleCloseNav()
        goto('/')
    }

    function handleCloseNav() {
        const mobileMenu = document.getElementById('nav_wrapper')
        mobileMenu?.classList.remove('show')
        return
    }

    $effect(() => {
        const navHandler = function (e: Event) {
            const target = e.target as HTMLElement
            if (target.classList.contains('nav-wrapper')) {
                target.classList.remove('show')
            }
        }

        document.body.addEventListener('click', navHandler)

        return () => {
            document.body.removeEventListener('click', navHandler)
        }
    })

    let navigationData = [
        {
            name: 'About',
            type: 'dropdown',
            links: [
                { name: 'About Us', link: '/about', type: 'link' },
                {
                    name: 'Frequently Asked Questions',
                    link: '/faq',
                    type: 'link',
                },
                {
                    name: 'Privacy Policy',
                    link: '/privacy-policy',
                    type: 'link',
                },
                { name: 'Contact', link: '/contact', type: 'link' },
                { name: 'Licensing', link: '/licensing', type: 'link' },
            ],
        },
        // {
        //     name: 'Loan Options',
        //     type: 'link',
        //     link: '/home-loans',
        // },
        // {
        //     name: 'Education',
        //     type: 'dropdown',
        //     links: [
        //         {
        //             name: 'Home Buying Education',
        //             link: '/pending',
        //             type: 'link',
        //         },
        //     ],
        // },
    ]
</script>

<header>
    <div class="container">
        <div class="header-wrapper">
            <Logo />
            <Hamburger />
            <div tabindex="0" class="nav-wrapper" id="nav_wrapper" role="menu">
                <nav class="nav">
                    <div class="mobile-header">
                        <div class="mobile-button-wrapper">
                            {#if session}
                                <div class="account">
                                    <a
                                        href="/account"
                                        class="btn"
                                        onclick={handleCloseNav}>My Account</a
                                    >
                                    <button class="primary" onclick={logout}
                                        >Sign Out</button
                                    >
                                </div>
                            {:else}
                                <div class="account">
                                    <a
                                        href="/auth/login"
                                        class="btn"
                                        onclick={handleCloseNav}>Login</a
                                    >
                                    <a
                                        href="/auth/signup"
                                        onclick={handleCloseNav}
                                        class="btn">Signup</a
                                    >
                                </div>
                            {/if}
                        </div>
                        <CloseButton />
                    </div>
                    <ul class="nav-list">
                        {#each navigationData as navItem}
                            <li class="nav-item">
                                {#if navItem.type === 'link'}
                                    <a
                                        href={navItem.link}
                                        class="nav-link"
                                        data-sveltekit-reload>{navItem.name}</a
                                    >
                                {:else if navItem.type === 'dropdown'}
                                    <button class="nav-link dropdown-button">
                                        {navItem.name}
                                    </button>
                                    <div
                                        role="menu"
                                        class="dropdown"
                                        tabindex="-1"
                                    >
                                        <ul class="dropdown-list">
                                            {#if navItem.links}
                                                {#each navItem.links as dropdownItem}
                                                    <li class="dropdown-item">
                                                        <a
                                                            href={dropdownItem.link}
                                                            class="dropdown-link"
                                                            data-sveltekit-reload
                                                        >
                                                            {dropdownItem.name}
                                                        </a>
                                                    </li>
                                                {/each}
                                            {/if}
                                        </ul>
                                    </div>
                                {/if}
                            </li>
                        {/each}
                    </ul>
                </nav>
                {#if session}
                    <div class="account">
                        <a href="/account" class="btn">My Account</a>
                        <button class="primary" onclick={logout}
                            >Sign Out</button
                        >
                    </div>
                {:else}
                    <div class="account">
                        <a href="/auth/login" class="btn">Login</a>
                        <a href="/auth/signup" class="btn">Signup</a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</header>

<style lang="scss">
    .account {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        padding: 0 var(--space-sm);
        a.btn {
            background: var(--grey-200);
            color: var(--grey-800);
            font-weight: bold;
            font-size: var(--text-sm);
        }

        button {
            background: var(--green-400);
            color: white;
            font-weight: bold;
            font-size: var(--text-sm);
        }
    }
</style>
