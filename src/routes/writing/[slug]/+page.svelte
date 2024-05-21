<script lang="ts">
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
	<meta
		property="og:image"
		content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${meta.title}`}
	/>
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
