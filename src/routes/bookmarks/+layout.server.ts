import { RAINDROP_CLIENT_SECRET } from '$env/static/private';
import type { Collection } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ fetch }) => {
	const fetchCollections = async () => {
		const url = `https://api.raindrop.io/rest/v1/collections`;
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${RAINDROP_CLIENT_SECRET}`,
				'Content-Type': 'application/json'
			}
		});

		const { items } = await response.json();
		return items as Collection[];
	};

	return {
		collections: fetchCollections()
	};
};
