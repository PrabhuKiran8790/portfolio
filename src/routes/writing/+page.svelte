<script>
	import { PostsList } from '$lib/components/site';
	import { seriesPostCoverFolder } from '$lib/stores';
	import { Card, Masonry } from '$lib/components/site';

	export let data;

	// all subposts of the series post where coverFolder is equal toseriesPostCoverFolder
	$: item = data.seriesPosts.filter((post) => {
		return post.coverFolder === $seriesPostCoverFolder;
	})[0];
</script>

<div class="lg:hidden">
	<PostsList posts={data.posts} seriesPosts={data.seriesPosts} />
</div>

<div class="hidden h-full lg:block">
	{#if $seriesPostCoverFolder}
		<div class="flex h-full flex-col items-center justify-center">
			<div>
				<h1>{item.title}</h1>
				<p>{item.description}</p>
			</div>

			<div class="p-24">
				<Masonry items={item['subPosts']} gridGap={'1rem'} stretchFirst={false} reset>
					{#each item['subPosts'] as post}
						<Card title={post.title} image={post.image} {post} />
					{/each}
				</Masonry>
			</div>
		</div>
	{/if}
</div>
