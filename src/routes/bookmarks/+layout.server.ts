import { RAINDROP_CLIENT_SECRET } from '$env/static/private';
import type { Collection } from '$lib/types';

export const load = async ({ fetch }) => {
	const url = `https://api.raindrop.io/rest/v1/collections`;
	const response = await fetch(url, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${RAINDROP_CLIENT_SECRET}`,
			'Content-Type': 'application/json'
		}
	});

	const { items } = await response.json();

	return {
		collections: items as Collection[]
	};
};
