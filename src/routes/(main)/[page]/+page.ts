import { error } from "@sveltejs/kit";
const subPage = 'base';

export const load = async ({ params }: any) => {
	try {
		const page = await import(`../../../content/${subPage}/${params.page}.md`);
		return { content: page.default, metadata: page.metadata };
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
};
