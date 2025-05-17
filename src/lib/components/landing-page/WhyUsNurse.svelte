<script>
	import SimpleCta from '../sections/SimpleCTA.svelte';
</script>

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
			<h2>Here’s how we help you</h2>
			<h3>
				<blockquote>
					We’re faster, better priced, less closing costs, more knowledgeable &
					more available than anyone else.
				</blockquote>
			</h3>
		</header>
		<p>
			Unfortunately, searching for “nurse” programs makes you a <strong>
				prime target to be taken advantage of.
			</strong>
		</p>
		<p>
			The majority of “Programs” out there are nothing but sales funnels with no
			real benefits. The vast majority of those lenders are also incredibly
			expensive because they pass the cost of marketing on to the clients.
		</p>

		<h3 style="text-align: center; margin-top:var(--space-lg)">
			We simply just make less to provide this service.
		</h3>
		<p>
			Not only are we better than the other "Heroes" or "Next Door" programs up
			front, we additionally reduce our compensation.
		</p>

		<SimpleCta
			subTitle="You Care for Others—Let Us Care for You"
			title="Home buying support designed exclusively for nurses."
			buttonText="Learn more"
			buttonLink="#main"
		/>
	</div>
</section>

<section>
	<div class="container">
		<header>
			<h2>Why Healthcare Professionals Choose Us</h2>
			<p>
				Dedicated support, flexible loan options, and a home buying experience
				built around your life as a nurse.
			</p>
		</header>
		<div class="grid">
			<div class="item">
				<i class="fa fa-dollar"></i>
				<div class="header">Save Thousands in Costs</div>
				<div class="content">
					On average, nurses save over <strong>$5,000</strong>
					when working with us compared to traditional "Hero's" programs. Lower fees,
					better rates, and zero fluff — just real savings you deserve.
				</div>
			</div>
			<div class="item">
				<i class="fa fa-phone"></i>
				<div class="header">Personalized Support</div>
				<div class="content">
					We’re available 7 days a week to answer your questions, explain your
					options, and guide you from pre-approval to closing — on your
					schedule.
				</div>
			</div>
			<div class="item">
				<i class="fa fa-heart"></i>
				<div class="header">Nurse-Focused Programs</div>
				<div class="content">
					From low down payments to relaxed credit guidelines, our loan options
					are designed to support nurses and healthcare professionals like you.
				</div>
			</div>
			<div class="item">
				<i class="fa fa-user-md"></i>
				<div class="header">We Understand Nurse Income</div>
				<div class="content">
					Whether you're paid hourly, work per diem, rely on overtime, or have
					travel nurse contracts — we know how to navigate and document your
					income to help you qualify. We've helped nurses in every kind of role
					buy homes, and we tailor the process to fit your unique pay structure.
				</div>
			</div>
			<div class="item">
				<i class="fa fa-bolt"></i>
				<div class="header">Fast, Hassle-Free Closings</div>
				<div class="content">
					We streamline the process to help you close quickly — often in 2–3
					weeks. No unnecessary delays or piles of paperwork.
				</div>
			</div>
			<div class="item">
				<i class="fa fa-laptop"></i>
				<div class="header">Easy Online Experience</div>
				<div class="content">
					Apply from your phone or laptop anytime. Our secure online tools make
					it easy to track your loan and upload documents without the stress.
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
	blockquote {
		color: #555;
		border-left: 4px solid var(--green-400);
		padding: var(--space-sm) var(--space);
		margin: var(--space) 0;
		background-color: #f9fafb;
		position: relative;
	}
</style>
