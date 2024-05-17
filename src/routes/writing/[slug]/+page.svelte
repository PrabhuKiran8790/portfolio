<script lang="ts">
	import { PageTitle } from '$lib/components/site';

	export let data;

	let { content, meta } = data;

	$: {
		content = data.content;
		meta = data.meta;
	}
</script>

<div class="scrollable-area bg-white">
	<div class="content-wrapper mx-auto w-screen lg:max-w-[30rem] xl:max-w-[52rem]">
		<div class="content mb-24">
			<PageTitle title={meta.title} />
			<div class="mdsvex" id="mdsvex">
				<svelte:component this={content} />
			</div>
		</div>
	</div>
</div>
