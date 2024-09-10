<script context="module">
	// import '../../../app.pcss';
	import './markdown.pcss';
	import {
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		blockquote,
		pre,
		p,
		li,
		ol,
		ul,
		hr,
		img
	} from '$lib/components/markdown';

	export { a, h1, h2, h3, h4, h5, blockquote, pre, p, li, ol, ul, hr, img };
</script>

<script>
	// these props are what we expect in frontmatter
	// typescript cannot be used in this file.
	export let title;
	export let date;
	export let description;
	export let tags;
	export let image;
	export let draft;
	export let icon;
	export let useIconInHome;
	export let order;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<slot {title} {date} {description} {tags} {image} {draft} {icon} {useIconInHome} {order} />
