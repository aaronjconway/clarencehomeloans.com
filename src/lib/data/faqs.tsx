export default interface Faq {
	title: string;
	content: string;
}

const faqs: Faq[] = [
	{
		title: `What are your rates?`,
		content: `

        <p>Everyones favorite question!</p>

        <p>There are many factors that go into your unique rate quote.</p>
        <p> As a broker we are normally much less from the jump. </p> `
	},

	{
		title: `What does "Powered by Nexa Mortgage" mean?`,
		content: `

        <p>Nexa Mortgage helps with the complexities of brokerage licensing and compliance.</p>

        <p>
                Nexa also provides the connection to 100+ lenders and takes a very small percentage of our
                commission. This allows us to provide many options and have full control over our
                pricing.
        </p> `
	},
	{
		title: `What value do you provide over anyone else?`,
		content: `


				<p>We provide superior level of care at tangibly better pricing.</p>

				<ul>
					<li>
						We answer our phones on the weekend, late night and early morning. This can be the difference in getting an offer accepted or rejected.
					</li>
					<li>Our pricing is substantially better.</li>
					<li>Our knowledge and problem solving ability is underwriter level.</li>
					<li>Nobody moves as quickly as we do.</li>
					<li>We genuinely care about your success.</li>
				</ul>
`
	},
	{
		title: `How long have you been open?`,
		content: `
				<p>Clarence Mortgage has been helping clients since 2016.</p>

`
	},
	{
		title: `Do you know what you're doing?`,
		content: `
				<p>
					Austin Clarence has closed hundreds of loans combined (that's a lot) including very complex
					and non-standard situations.
				</p>

                      `
	},
	{
		title: `How can I be sure you are licensed correctly?`,
		content: `
              <p> Please feel free to check out our <a href="/licensing">licensing page</a> where we show you how to look up a license and show ours. </p>`
	},
	{
		title: `You say you have good pricing but everyone says that.`,
		content: `<p>First, we implore you to get a quote with us. Not only will it be very accurate, it will be nearly unbeatable. </p> <p> Since we work with Nexa Mortgage, which is a broker that takes a very small commission, not only do we have control over our pricing unlike most places, we get wholesale discounts that others can't get. </p>`
	},
	{
		title: "What's the point of a broker? Aren't you just a middle man?",
		content: `<p> Yes, we are a middle man. We facilitate the qualification, customer service, and get pricing that you <u>can't</u> get yourself. </p>

        <p> If we both call the same lender we will be many thousands of dollars cheaper while <i>still making money</i> and providing better service. </p > `
	}
];

export { faqs };
