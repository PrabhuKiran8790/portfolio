<script module>
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

<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<!-- <slot {title} {date} {description} {tags} {image} {draft} {icon} {useIconInHome} {order} /> -->

{@render children()}
