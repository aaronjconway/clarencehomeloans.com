import { error } from "@sveltejs/kit";
const subPage = 'base';
//testing

export const load = async ({ params, url }: any) => {
	const from = (url.searchParams.get('from'))
	try {
		const page = await import(`../../content/${subPage}/${params.page}.md`);
		return { content: page.default, metadata: page.metadata, from: from };
	} catch (e) {
		error(404, `Could not find ${params.slug}`)
	}
};
