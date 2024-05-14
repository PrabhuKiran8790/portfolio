import { getPosts, getSeriesPosts } from '$lib/posts';

export const load = async () => {
	const posts = await getPosts();
	const seriesPosts = await getSeriesPosts();

	return {
		posts,
		seriesPosts
	};
};
