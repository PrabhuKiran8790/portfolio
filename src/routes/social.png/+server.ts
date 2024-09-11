import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import Comp from './comp.svelte';
import sourceSerifPro from './Satoshi-Bold.ttf';

import { read } from '$app/server';
import { render } from 'svelte/server';
const fontData = read(sourceSerifPro).arrayBuffer();

export async function GET({ url }) {
	const width = 1200;
	const height = 630;

	const result = render(Comp, {
		props: {
			title: url.searchParams.get('title')!,
			description: url.searchParams.get('description')!
		}
	});
	const markup = toReactNode(`${result.body}`);
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'Satoshi',
				data: await fontData,
				style: 'normal'
			}
		],
		height: +height,
		width: +width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
