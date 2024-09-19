<script lang="ts">
	import { page } from '$app/stores';
	import { PageTitle } from '$lib/components/site';
	import { headerTitle } from '$lib/stores.svelte';
	import { formatDate } from '$lib/utils.js';

	let { data } = $props();

	let meta = $derived(data.meta);
	let Content = $derived(data.content);
	headerTitle.value = data.meta.title;
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta property="description" content={meta.description} />
	{#if !data.seriesPost}
		<meta
			property="og:image"
			content={`${$page.url.origin}/writing/social.png?title=${meta.title}`}
		/>
	{:else}
		<meta
			property="og:image"
			content={`${$page.url.origin}/writing/social.png?title=${meta.title}&isSeries=true&currentPart=${data.seriesPost?.subPosts.find((post) => post.title === meta.title)?.order}&CoverFolderName=${data.seriesPost.title}&totalParts=${data.seriesPost.subPosts.length}`}
		/>
	{/if}
	<meta property="og:description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	{#if !data.seriesPost}
		<meta
			name="twitter:image"
			property="twitter:image"
			content={`${$page.url.origin}/writing/social.png?title=${meta.title}`}
		/>
	{:else}
		<meta
			name="twitter:image"
			property="twitter:image"
			content={`${$page.url.origin}/writing/social.png?title=${meta.title}&isSeries=true&currentPart=${data.seriesPost?.subPosts.find((post) => post.title === meta.title)?.order}&CoverFolderName=${data.seriesPost.title}&totalParts=${data.seriesPost.subPosts.length}`}
		/>
	{/if}
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" property="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:alt" property="twitter:title" content={meta.title} />
	<meta name="twitter:title" property="twitter:title" content={meta.title} />
	<meta name="twitter:description" property="twitter:description" content={meta.description} />
</svelte:head>

<div class="scrollable-area bg-white">
	<div class="content-wrapper mx-auto w-screen lg:max-w-[30rem] xl:max-w-[40rem] 2xl:max-w-[52rem]">
		<div class="content mb-24">
			<PageTitle title={meta.title} subtitle={formatDate(meta.date)} />
			<div class="mdsvex" id="mdsvex">
				<!-- <svelte:component this={content} /> -->
				<Content />
			</div>
		</div>
	</div>
</div>
