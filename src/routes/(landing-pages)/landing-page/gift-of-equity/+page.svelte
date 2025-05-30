<script lang="ts">
	import Hero from '$lib/components/landing-page/Hero.svelte';
	import WhyUs from '$lib/components/landing-page/WhyUs.svelte';
	import { reviews } from '$lib/data/reviews.js';
	import Testimonials from '$lib/components/sections/Testimonials.svelte';
	import GOEForm from '../../../(form-pages)/form/gift-of-equity/GOEForm.svelte';
	import SimpleCta from '$lib/components/sections/SimpleCTA.svelte';
	import Stats from '$lib/components/landing-page/Stats.svelte';
</script>

<svelte:head>
	<title>Gift of Equity Family Home Buying Program | Clarence Home Loans</title>
	<meta
		name="description"
		content="Explore how a Gift of Equity can help you buy a home with little to no out-of-pocket costs. Start our simple step-by-step form to see what you qualify for—no credit check required to begin."
	/>
	<meta
		name="keywords"
		content="gift of equity, gift of equity home loan, buy home from family, zero down home loan, gift of equity mortgage, home buying assistance, Clarence Home Loans"
	/>
	<meta
		name="author"
		content="Clarence Home Loans"
	/>
</svelte:head>

<div class="form">
	<GOEForm />
</div>
<Hero
	title="Family Home Buying Program"
	subtitle="Helping families achieve homeownership — with guidance, flexibility, and real savings."
	text="As a mortgage broker, we specialize in supporting families through the home buying process with customized loan options, low down payments, and flexible qualification guidelines. Whether you're buying your first home or upgrading for more space, this program is designed with your family's needs in mind."
	imagePath="goe-family.avif"
/>

<Stats
	statData={[
		{
			number: 'Over $4,000',
			text: 'Saved vs big lenders'
		},
		{ number: '17', text: 'Average days to close' },
		{ number: '180+', text: 'Familes Helped' }
	]}
/>

<Testimonials {reviews} />
<section>
	<div class="container">
		<div class="faq-wrapper">
			<h2>Frequently Asked Questions</h2>
			<div class="item">
				<div class="title">How does the Family Home Buying Program work?</div>

				<p>
					<strong>Our Family Home Buying Program</strong>
					makes it easier to buy a home from a family member. You can use a
					<strong>gift of equity</strong>
					from your relative to help cover the purchase—and even
					<strong>roll in other debts</strong>
					like credit cards or personal loans into your mortgage.
				</p>

				<p>
					In many cases, you can qualify for a <strong>
						$0 down payment AND $0 out of pocket
					</strong>
					, which means you can become a homeowner without paying anything upfront
					(minus small things like an appraisal). Our team will be with you every
					step of the way to make the process simple and stress-free.
				</p>
			</div>

			<div class="item">
				<div class="title">What are the rates/fees?</div>
				<p>
					Our Family Home Buying Program typically offers some of the <strong>
						best available rates
					</strong>
					. Because of the gift of equity and low risk to lenders, families can often
					qualify for
					<strong>better terms</strong>
					than traditional loan programs. Rates depend on your full financial picture,
					but we’ll get you the most competitive option available.
				</p>
			</div>
			<div class="item">
				<div class="title">
					Does the seller have to pay any taxes on the gift?
				</div>
				<p>
					A <strong>gift of equity</strong>
					typically does
					<strong>not result in taxes</strong>
					for the buyer. However, the family member giving the gift may need to
					<strong>file a gift tax return</strong>
					if the amount exceeds the annual gift tax exclusion (currently $18,000
					per person in 2024).
					<strong>Just filing the form doesn’t mean they owe taxes</strong>
					—most people won’t, because they can apply it toward their
					<strong>lifetime gift and estate tax exemption</strong>
					(which is over $13 million as of 2024). We always recommend consulting
					a tax advisor, and our team will help guide you through the process.
				</p>
			</div>
			<div class="item">
				<div class="title">
					Do I need to be a first-time homebuyer to qualify?
				</div>
				<p>
					No! Whether you’re buying your first home or your next one, our Family
					Home Buying Program is designed to help families of all types secure
					the best deal possible with flexible options and low down payment
					requirements.
				</p>
			</div>

			<div class="item">
				<div class="title">
					What kind of support can I expect during the home buying process?
				</div>
				<p>
					We provide personalized support from start to finish. Our team is
					available 7 days a week to guide you through every step, from
					pre-approval to closing, ensuring the process is as smooth and
					stress-free as possible.
				</p>
			</div>

			<div class="item">
				<div class="title">
					Can I apply if I’m part-time or on a contract basis?
				</div>
				<p>
					Absolutely! Whether you’re working full-time, part-time, or on a
					contract basis, we can work with your income type to help you qualify
					for the Family Home Buying Program and purchase a home for your
					family.
				</p>
			</div>
		</div>
	</div>
</section>

<WhyUs />

<section>
	<div class="container">
		<SimpleCta
			subTitle="Start with Trusted Expert Advice"
			title="Helping families across the country make homeownership a reality."
			buttonText="Request more info"
			buttonLink="#main"
		/>
	</div>
</section>

<style lang="scss">
	.title {
		margin-top: var(--space-lg);
		font-size: var(--text-lg);
		font-weight: bold;
	}
</style>
