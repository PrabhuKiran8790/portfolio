import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import Comp from './comp.svelte';

const fontFile = await fetch('https://og-playground.vercel.app/inter-latin-ext-700-normal.woff');
const fontData: ArrayBuffer = await fontFile.arrayBuffer();

export async function GET({ url }) {
    const width = 1200;
    const height = 630;

    // @ts-expect-error svelte SSR
    const result = Comp.render({
        title: url.searchParams.get('title'),
        count: url.searchParams.get('count'),
    });
    const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
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
