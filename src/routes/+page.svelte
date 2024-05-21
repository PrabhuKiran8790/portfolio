<script lang="ts">
	import { Card, PageTitle } from '$lib/components/site';
	import { Button } from '$lib/components/ui/button';
	import { Masonry } from '$lib/components/site';
	import { work } from '$lib/config';
	import Scrollarea from '$lib/components/site/scrollarea.svelte';
	import { headerTitle } from '$lib/stores';

	export let data;

	$: {
		$headerTitle = 'Prabhu Kiran Konda';
	}
</script>

<Scrollarea class="w-full">
	<div class="content-wrapper relative flex w-full flex-col">
		<div class="content">
			<PageTitle title="Home" class="lg:hidden" />
			<p>
				Hi 👋 I'm Prabhu Kiran, an Electrical Engineer, Software Developer and a writer based in
				Hyderabad, India
			</p>
			<p>
				Working as a {work.role} at {work.company}. I love training neural networks, building web
				applications and exploring Large Language Models. When I'm not coding, I'm usually thinking
				about physics, math, or archeology (yes, I'm a fan). Nice to meet you!
			</p>
			<Button variant="link" class="mb-0 p-0" href="/writing">
				<h2>Writing</h2>
			</Button>
			<div class="blog-cards">
				<Masonry items={data.posts} gridGap={'1rem'} stretchFirst={false} reset>
					{#each data.posts as post}
						<Card title={post.title} image={post.image} {post} />
					{/each}
				</Masonry>
			</div>
		</div>
	</div>
	<div class="min-h-11 lg:hidden"></div>
</Scrollarea>

<style lang="postcss">
	.blog-cards {
		@apply -mx-4 md:mx-0;
	}
</style>
