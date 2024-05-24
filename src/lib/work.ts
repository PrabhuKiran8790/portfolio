import type { Work } from './types';

export const works: Work[] = [
	{
		_id: 1,
		title: 'Corgi AI: Create anything with AI',
		note: 'Corgi AI is a collection of AI tools for different usecases. It includes a chatGPT clone with streaming responses, Image Generation, Audio Generation, Image Restoration and PDF Chat(beta). It is a full fledged SaaS application with stripe payments. It is Deployed using Docker with a VPS hosting on [fly.io](https://fly.io)',
		link: 'https://corgi-ai.fly.dev/',
		domain: 'corgi-ai.fly.dev',
		cover: 'https://corgi-ai.fly.dev/cover.png',
		tags: ['SvelteKit', 'Docker', 'TypeScript', 'Stripe'],
		excerpt: ''
	}
];
