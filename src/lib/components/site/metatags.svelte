<script lang="ts">
	import { MetaTags } from 'svelte-meta-tags';
	import { page } from '$app/stores';

	const routes = [
		{
			title: 'Home',
			description: 'Electrical Engineer, Software Developer and Writer',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Prabhu Kiran Konda&description=Electrical Engineer, Software Developer and Writer',
			url: 'https://prabhukirankonda.vercel.app/',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Prabhu Kiran Konda&description=Electrical Engineer, Software Developer and Writer',
				imageAlt: 'Prabhu Kiran Konda',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt',
				handle: '@prabhukirantwt'
			}
		},
		{
			title: 'Bookmarks',
			description: 'A collection of bookmarks that I find interesting',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Bookmarks&description=A collection of bookmarks that I find interesting',
			url: 'https://prabhukirankonda.vercel.app/bookmarks',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Bookmarks&description=A collection of bookmarks that I find interesting',
				imageAlt: 'Bookmarks',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt',
				handle: '@prabhukirantwt'
			}
		},
		{
			title: 'Writing',
			description: 'Learnings, thoughts and ideas.',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Writing&description=Learnings, thoughts and ideas.',
			url: 'https://prabhukirankonda.vercel.app/writing',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Writing&description=Learnings, thoughts and ideas.',
				imageAlt: 'Writing',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt',
				handle: '@prabhukirantwt'
			}
		},
		{
			title: 'Journey',
			description: 'My journey through the years',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Journey&description=My journey through the years',
			url: 'https://prabhukirankonda.vercel.app/journey',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Journey&description=My journey through the years',
				imageAlt: 'Journey',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt',
				handle: '@prabhukirantwt'
			}
		},
		{
			title: 'Work',
			description: 'A collection of my work',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Work&description=A collection of my work',
			url: 'https://prabhukirankonda.vercel.app/work',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Work&description=A collection of my work',
				imageAlt: 'Work',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt',
				handle: '@prabhukirantwt'
			}
		}
	];

	// Function to get the route metadata based on the current URL pathname
	const getRouteMeta = (pathname: string) => {
		return routes.find((route) => route.url.endsWith(pathname)) || {};
	};

	let currentMeta: any = $derived(getRouteMeta($page.url.pathname));
</script>

<MetaTags
	title={currentMeta.title}
	titleTemplate="%s | Prabhu Kiran Konda"
	description={currentMeta.description}
	canonical={currentMeta.url}
	openGraph={{
		url: currentMeta.url,
		title: currentMeta.title,
		description: currentMeta.description,
		images: [
			{
				url: currentMeta.image,
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			}
		],
		siteName: 'Prabhu Kiran Konda'
	}}
	twitter={{
		handle: currentMeta.twitter?.handle || '@handle',
		site: currentMeta.twitter?.site || '@site',
		cardType: currentMeta.twitter?.cardType || 'summary_large_image',
		title: `${currentMeta.twitter?.title || currentMeta.title} | Prabhu Kiran Konda`,
		description: currentMeta.twitter?.description || currentMeta.description,
		image: currentMeta.twitter?.image || currentMeta.image,
		imageAlt: currentMeta.twitter?.imageAlt || 'Twitter image alt'
	}}
/>
