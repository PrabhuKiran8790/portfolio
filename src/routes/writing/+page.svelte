<script>
	import { Card, Masonry, PostsList } from '$lib/components/site';
	import { headerTitle, seriesPostCoverFolder } from '$lib/stores.svelte';

	let { data } = $props();

	// all subposts of the series post where coverFolder is equal toseriesPostCoverFolder
	let item = $derived(
		data.seriesPosts.filter((post) => {
			return post.coverFolder === seriesPostCoverFolder.value;
		})[0]
	);

	headerTitle.value = 'Writing';
</script>

<div class="lg:hidden">
	<PostsList posts={data.posts} seriesPosts={data.seriesPosts} />
</div>

<div class="hidden h-full lg:block">
	{#if seriesPostCoverFolder.value}
		<div class="bg-grid flex h-full w-full flex-wrap items-center justify-center">
			<div class="p-10">
				<div>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
				</div>
				<div class="scrollable-area__ w-full">
					<Masonry items={item['subPosts']} gridGap={'1rem'} stretchFirst={false} reset>
						{#each item['subPosts'] as post}
							<Card title={post.title} image={post.image || ''} {post} />
						{/each}
					</Masonry>
				</div>
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
	.scrollable-area__ {
		@apply h-full max-h-[70dvh] min-h-[40dvh] overflow-y-auto overflow-x-hidden;
	}
</style>
