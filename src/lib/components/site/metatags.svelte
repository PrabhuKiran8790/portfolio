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
		content={`${$page.url.origin}/social.png?title=${title}&description=${description}`}
	/>

	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta
		name="twitter:image"
		property="twitter:image"
		content={`${$page.url.origin}/social.png?title=${title}&description=${description}`}
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" property="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:alt" property="twitter:title" content={title} />
	<meta name="twitter:title" property="twitter:title" content={title} />
	<meta name="twitter:description" property="twitter:description" content={description} />
	<meta name="twitter:site" content="@prabhukirantwt" />
	<meta name="twitter:creator" content="@prabhukirantwt" />
	<!-- height and widht -->
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="400" />
</svelte:head>
