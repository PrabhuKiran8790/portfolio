<script>
	import { page } from '$app/stores';

	export let title = '';
	export let description = '';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="description" content={description} />

	<meta
		property="og:image"
		content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${title}&description=${description}`}
	/>

	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta
		property="twitter:image"
		content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${title}&description=${description}`}
	/>
	<meta property="og:url" content={`https://v3-prabhukirankonda.vercel.app${$page.url.pathname}`} />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
</svelte:head>
