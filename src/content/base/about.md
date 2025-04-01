---
title: 'About Us'
meta_description: 'Here is an about me page'
short_summary: 'a short summary of this page'
---

<div class="grid">
	<div class="left">
        <h3 class="title">
            Committed to providing exceptional service and top mortgage solutions.
        </h3>
	    <p>
		Clarence Mortgage was founded in June 2016 in Arizona with a commitment to providing exceptional service and expert guidance to homebuyers and homeowners. Owned and operated by Austin Clarence, the company has built a strong reputation for offering accurate, competitive pricing and a smooth, hassle-free mortgage process.
	    </p>

	    <p>
	    With a focus on delivering personalized mortgage solutions, Clarence Mortgage is dedicated to ensuring that every client receives the best possible experience. Whether it's purchasing a first home, refinancing, or exploring various mortgage options, the team at Clarence Mortgage is here to provide clear communication and expert advice tailored to each individual’s needs.
	    </p>

	    <p>
	    At Clarence Mortgage, integrity, reliability, and client satisfaction are at the core of everything we do. The company’s dedication to accuracy and great pricing continues to drive its growth and success in the Arizona market.
	    </p>

	</div>
	<div class="right">

	    <div class="image-wrapper">
		<enhanced:img
		class="image"
		src="/static/images/austin.webp"
		alt="Image of owner Austin Clarence in suit similing."
		/>
		<div>
		Austin Clarence - Owner
		</div>
	</div>
    </div>
	    <p>
	    Thank you for considering Clarence Mortgage – where your homeownership goals are our priority.
	    </p>
</div>

<style lang="scss">
	@use '/src/styles/base';

	.image-wrapper {
		display: flex;
		flex-direction:column;
		font-size:small;
		justify-content: center;
		align-items: center;
		height: 100%;
		overflow: hidden;
		width: 75%;
	}

	.image {
		height:100%;
		width:100%;
		object-fit: contain;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.left,
	.right {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title {
		margin: 0;
		margin-bottom: var(--space-md);
		line-height: 1.1;
		color: var(--ink);
	}

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
	}

	@media (min-width: base.$lg) {
		section {
			height: 40vh;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}

		.grid {
			grid-template-columns: repeat(2, 1fr);
		}

	.image-wrapper {
		width: 50%;
		}
	}
</style>

