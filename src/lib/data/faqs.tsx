export default interface Faq {
	title: string;
	content: string;
}

const faqs: Faq[] = [
	{
		title: `Is my information secure?`,
		content: `

        <p>Yes! We regularly have cyber security audits.</p>
        <p>Our system is very simple and easy to contain meaning there are very few places to have any sort of leaks.</p>
        <p>We do not store any important info such as SSN's</p>
      `
	},
	{
		title: `What are your rates?`,
		content: `

        <p>We don't have any! We are not a lender.</p>

        <p>We facilitate the finding of the best solution for you.</p>
      `
	},
	{
		title: `Are you just going to sell my info?`,
		content: `
			<p>Only with your consent and only exclusively meaning not spamming many lenders.</p>
			<p>We hand pick and vet our connections to ensure that you're getting the best experience.</p>
				<p>
				Have you ever been to chick-fil-a? Were you mad at paying for a delicious, fast, great experience?
				</p>
				<p> Same deal! We take great pride in making sure you're comfortable the whole way</p>

`,
	},
	{
		title: `What value do you provide over anyone else?`,
		content: `


	<p> We provide superior level of care in finding you the best rates.</p >

		<ul>
			<li> We answer our phones on the weekend, late night and early morning. </li>
			<li>Nobody moves as quickly as we do.</li>
			<li>Our knowledge and problem solving ability is underwriter level.</li>
			<li>We genuinely care about your success.</li>
		</ul>
`,
	},
	{
		title: `How long have you been open ? `,
		content: `
			<p>GimmeRate is a brand new venture.</p>
			<p>However, we have been helping clients in this industry since 2016.</p >

		`,
	},
	{
		title: `Do you know what you're doing?`,
		content: `
				<p>
					We've close closed nearly 1000 loans combined (that's a lot) including very complex
					and non-standard situations in our previous career.
				</p>
				<p>We regularly consult our high level underwriter relationships to ensure we're providing up to date and accurate information.</p>

                      `,
	},
];

export { faqs };
