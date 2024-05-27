<script lang="ts">
	import { page } from '$app/stores';
	import { Card, Masonry, PageTitle } from '$lib/components/site';
	import Scrollarea from '$lib/components/site/scrollarea.svelte';
	import { Button } from '$lib/components/ui/button';
	import { work } from '$lib/config';
	import { headerTitle } from '$lib/stores';

	export let data;

	$: {
		$headerTitle = 'Prabhu Kiran Konda';
	}
	let title = 'Prabhu Kiran Konda';
	let description = 'Electrical Engineer, Software Developer and Writer';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="description" content={description} />

	<meta property="og:image" content={`https://prabhukirankonda.vercel.app/og-root.png?v=1`} />

	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta
		name="twitter:image"
		property="twitter:image"
		content={`https://prabhukirankonda.vercel.app/og-root.png?v=1`}
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" property="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:alt" property="twitter:title" content={title} />
	<meta name="twitter:title" property="twitter:title" content={title} />
	<meta name="twitter:description" property="twitter:description" content={description} />
	<meta name="twitter:site" content="@prabhukirantwt" />
	<meta name="twitter:creator" content="@prabhukirantwt" />
</svelte:head>

<Scrollarea class="w-full">
	<div class="content-wrapper relative flex w-full flex-col">
		<div class="content">
			<PageTitle title="Home" class="lg:hidden" />
			<p>
				Hi 👋 I'm Prabhu Kiran Konda, an Electrical Engineer, Software Developer and a writer based
				in Hyderabad, India
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
