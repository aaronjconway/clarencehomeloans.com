const subPage = 'learn';

export const load = async ({ params }: any) => {
	try {
		const page = await import(`../../../content/${subPage}/${params.page}.md`);
		return { content: page.default, metadata: page.metadata };
	} catch (error) {
		return;
	}
};
