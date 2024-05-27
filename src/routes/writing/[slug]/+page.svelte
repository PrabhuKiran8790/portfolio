<script lang="ts">
	import { page } from '$app/stores';
	import { PageTitle } from '$lib/components/site';
	import { headerTitle } from '$lib/stores.js';
	import { formatDate } from '$lib/utils.js';

	export let data;

	let { content, meta } = data;

	$: {
		content = data.content;
		meta = data.meta;
		$headerTitle = meta.title;
	}
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="description" content={meta.description} />
	{#if !data.seriesPost}
		<meta
			property="og:image"
			content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${meta.title}`}
		/>
	{:else}
		<meta
			property="og:image"
			content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${meta.title}&isSeries=true&currentPart=${data.seriesPost?.subPosts.find((post) => post.title === meta.title)?.order}&CoverFolderName=${data.seriesPost.title}&totalParts=${data.seriesPost.subPosts.length}`}
		/>
	{/if}
	<meta property="og:description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	{#if !data.seriesPost}
		<meta
			property="twitter:image"
			content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${meta.title}`}
		/>
	{:else}
		<meta
			property="twitter:image"
			content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${meta.title}&isSeries=true&currentPart=${data.seriesPost?.subPosts.find((post) => post.title === meta.title)?.order}&CoverFolderName=${data.seriesPost.title}&totalParts=${data.seriesPost.subPosts.length}`}
		/>
	{/if}
	<meta
		property="og:url"
		content={`https://v3-prabhukirankonda.vercel.app/writing/${$page.params.slug}`}
	/>
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={meta.title} />
	<meta property="twitter:description" content={meta.description} />
	<meta property="og:image:width" content="800" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<div class="scrollable-area bg-white">
	<div class="content-wrapper mx-auto w-screen lg:max-w-[30rem] xl:max-w-[52rem]">
		<div class="content mb-24">
			<PageTitle title={meta.title} subtitle={formatDate(meta.date)} />
			<div class="mdsvex" id="mdsvex">
				<svelte:component this={content} />
			</div>
		</div>
	</div>
</div>
