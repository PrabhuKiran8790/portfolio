import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts, getSeriesPosts, groupPostsByTag } from '$lib/posts';

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getPosts();
	const seriesPosts = await getSeriesPosts();

	if (url.searchParams.get('latest') == 'true') {
		// compare dates to get latest post

		const top5LatestPosts = posts.slice(0, 5);
		const seriesLatest = seriesPosts[0];

		if (!seriesLatest) {
			return json(top5LatestPosts);
		}

		const top5LatestSeriesPosts = seriesPosts.slice(0, 5);
		const allSeriesSubPosts = top5LatestSeriesPosts.map((series) => series.subPosts).flat();
		const allLatestPosts = [...top5LatestPosts, ...allSeriesSubPosts];
		const latestPosts = allLatestPosts
			.toSorted((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime())
			.slice(0, 5);

		return json(latestPosts);
	}

	if (url.searchParams.get('tags') == 'true') {
		return json(await groupPostsByTag());
	}

	if (url.searchParams.get('series') == 'true') {
		return json(seriesPosts);
	}

	return json(posts);
};
