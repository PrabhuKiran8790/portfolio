import { RAINDROP_CLIENT_SECRET } from '$env/static/private';
import type { Bookmark } from '$lib/types';

export const load = async ({ params, parent, fetch }) => {
	const { collections } = await parent();

	const collection_id = collections.find(
		(collection) => collection.slug === params.collection_slug
	)?._id;

	const url = `https://api.raindrop.io/rest/v1/raindrops/${collection_id}`;

	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${RAINDROP_CLIENT_SECRET}`,
			'Content-Type': 'application/json'
		}
	});

	const { items } = await response.json();
	return {
		bookmarks: items as Bookmark[],
		title: collections.find((collection) => collection.slug === params.collection_slug)?.title
	};
};
