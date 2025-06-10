type Faq = {
	title: string;
	content: string;
};

const faqs: Faq[] = [
	{
		title: 'What is a DSCR loan?',
		content:
			'A DSCR (Debt-Service Coverage Ratio) loan is a type of mortgage for real estate investors. Instead of using your personal income or tax returns to qualify, lenders look at the income the property generates compared to the monthly debt payments.'
	},
	{
		title: 'Do I need to show personal income or tax returns?',
		content:
			"Nope! DSCR loans don’t require W2s, pay stubs, or tax returns. Approval is based on the property's cash flow — making it ideal for self-employed investors or those with non-traditional income."
	},
	{
		title: 'How is the DSCR calculated?',
		content:
			"The DSCR is calculated by dividing the property's monthly rental income by its monthly mortgage payment (PITIA). For example, if your rental income is $2,000 and your mortgage payment is $1,500, your DSCR is 1.33."
	},
	{
		title: 'What DSCR do I need to qualify?',
		content:
			'Most lenders look for a DSCR of at least 0.75 or higher, meaning the property brings in enough income to cover the mortgage. However, some programs allow for lower DSCRs with compensating factors or larger down payments.'
	},
	{
		title: 'Can I use short-term rental income (Airbnb, VRBO)?',
		content:
			'Yes! Many DSCR lenders allow income from short-term rentals as long as it can be documented with platforms like Airbnb or a 12-month rental history. Policies vary by lender, so ask about your specific scenario.'
	},
	{
		title: 'How much do I need for a down payment?',
		content:
			'Most DSCR loans require at least 20-25% down. The exact amount depends on your credit score, DSCR ratio, and property type.'
	},
	{
		title: 'Can I close in an LLC or business name?',
		content:
			'Absolutely. DSCR loans are investor-focused, so closing in the name of an LLC or corporation is not only allowed, it’s common.'
	},
	{
		title: 'What types of properties are eligible?',
		content:
			"DSCR loans can be used for single-family homes, commercial, 2-4 unit properties, condos, townhomes, and even some short-term rentals or vacation properties — as long as they're non-owner occupied."
	},
	{
		title: 'How fast can I close?',
		content:
			'Many DSCR loans close in 2–3 weeks, especially when you have your documents ready. With no income verification, the process is often faster than traditional loans.'
	},
	{
		title: 'Is this a good option for first-time investors?',
		content:
			'Yes! DSCR loans are great for both new and experienced investors. If your property cash flows and you have the down payment, you’re in a strong position to qualify.'
	}
];

export default faqs;
