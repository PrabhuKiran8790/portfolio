<script>
	import { headerTitle } from '$lib/stores';
	import { Metatags, PostsList } from '$lib/components/site';
	import { seriesPostCoverFolder } from '$lib/stores';
	import { Card, Masonry } from '$lib/components/site';

	export let data;

	// all subposts of the series post where coverFolder is equal toseriesPostCoverFolder
	$: item = data.seriesPosts.filter((post) => {
		return post.coverFolder === $seriesPostCoverFolder;
	})[0];

	$: {
		$headerTitle = 'Writing';
	}
</script>

<Metatags title="Writing" description="Learnings, thoughts, and experiences" />

<div class="lg:hidden">
	<PostsList posts={data.posts} seriesPosts={data.seriesPosts} />
</div>

<div class="hidden h-full lg:block">
	{#if $seriesPostCoverFolder}
		<div class="bg-grid flex h-full w-full flex-col items-center justify-center">
			<div class="p-20">
				<div>
					<h1>{item.title}</h1>
					<p>{item.description}</p>
				</div>
				<div class="scrollable-area__ w-full">
					<Masonry items={item['subPosts']} gridGap={'1rem'} stretchFirst={false} reset>
						{#each item['subPosts'] as post}
							<Card title={post.title} image={post.image} {post} />
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
