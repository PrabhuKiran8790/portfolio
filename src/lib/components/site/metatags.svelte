<script>
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
				creator: '@prabhukirantwt'
			}
		},
		{
			title: 'Bookmarks',
			description: 'Bookmarks',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Bookmarks&description=A collection of bookmarks that I find interesting',
			url: 'https://prabhukirankonda.vercel.app/bookmarks',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Bookmarks&description=A collection of bookmarks that I find interesting',
				imageAlt: 'Bookmarks',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt'
			}
		},
		{
			title: 'Writing',
			description: 'Writing',
			image:
				'https://prabhukirankonda.vercel.app/social.png?title=Writing&description=Learnings, thoughts and ideas.',
			url: 'https://prabhukirankonda.vercel.app/writing',
			twitter: {
				cardType: 'summary_large_image',
				image:
					'https://prabhukirankonda.vercel.app/social.png?title=Writing&description=Learnings, thoughts and ideas.',
				imageAlt: 'Writing',
				site: '@prabhukirantwt',
				creator: '@prabhukirantwt'
			}
		}
	];

	// Function to get the route metadata based on the current URL pathname
	const getRouteMeta = (pathname) => {
		return routes.find((route) => route.url.endsWith(pathname)) || {};
	};

	let currentMeta = getRouteMeta($page.url.pathname);

	$: {
		const currentMeta = getRouteMeta($page.url.pathname);
	}
</script>

<MetaTags
	title={currentMeta.title}
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
		siteName: 'SiteName'
	}}
	twitter={{
		handle: currentMeta.twitter?.handle || '@handle',
		site: currentMeta.twitter?.site || '@site',
		cardType: currentMeta.twitter?.cardType || 'summary_large_image',
		title: currentMeta.twitter?.title || currentMeta.title,
		description: currentMeta.twitter?.description || currentMeta.description,
		image: currentMeta.twitter?.image || currentMeta.image,
		imageAlt: currentMeta.twitter?.imageAlt || 'Twitter image alt'
	}}
/>
