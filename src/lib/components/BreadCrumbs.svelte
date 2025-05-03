<script lang="ts">
	// import { titleCase } from 'title-case'
	import { page } from '$app/state';
	let path = $derived(page.url.pathname);
	const paths = path.split('/').filter((x) => x);

	let parts = [
		{
			text: 'Home',
			href: '/',
			current: path === '/' ? 'page' : undefined
		}
	];

	paths.forEach((text, i) => {
		//if the text is a number then add the word page to it.
		if (/^\d+$/.test(text)) {
			text = 'Page ' + text;
		}

		const href = `/${paths.slice(0, i + 1).join('/')}`;
		//add the word page if it's a number
		parts.push({
			// text: titleCase(text.replace(/[-_]/g, ' ')),
			text: text.replace(/[-_]/g, ' '),
			href: href,
			current: path == href ? 'page' : undefined
		});
	});

	// dark applys to the darkness of the background
	// so the default is white color
	// dark should be used on dark backgrounds
	//and dark = false should be used on light background

	// default is  on dark background
	const { dark = true } = $props();
</script>

<div class="container">
	<nav
		aria-label="Breadcrumb"
		class="breadcrumb"
	>
		<ol
			class="breadcrumbs"
			role="list"
		>
			{#each parts as part, i}
				<li
					class="breadcrumb"
					role="listitem"
				>
					{#if i > 0}
						<i class="fa fa-arrow-right"></i>
					{/if}
					{#if part.current}
						<a
							class:dark
							href={part.href}
							aria-current="page"
						>
							{part.text}
						</a>
					{:else}
						<a
							class:dark
							href={part.href}
						>
							{part.text}
						</a>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
</div>

<style lang="scss">
	a {
		color: white;
		&.dark {
			// make normal
			color: unset;
		}
	}

	nav.breadcrumb ol {
		margin: 0;
		padding-left: 0;
		list-style: none;
	}

	nav.breadcrumb li {
		display: inline;
	}

	i {
		padding: 0 var(--space-xs);
	}

	/* nav.breadcrumb li + li::before { */
	/* 	display: inline-block; */
	/* 	margin: 0 var(--space-sm); */
	/* 	content: '/'; */
	/* } */

	nav.breadcrumb [aria-current='page'] {
		font-weight: 500;
		text-decoration: underline;
		color: var(--green-100);
		&.dark {
			color: var(--green-200);
		}
	}
</style>
