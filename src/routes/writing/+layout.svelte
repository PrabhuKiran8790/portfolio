<script lang="ts">
	import { headerTitle } from '$lib/stores.svelte';
	import { PostsList } from '$lib/components/site';

	let { data, children } = $props();
	headerTitle.value = 'Writing';
</script>

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">Writing</span>
		</div>
	</div>
	<PostsList posts={data.posts} seriesPosts={data.seriesPosts} />
</div>
<div class="lg:bg-dots flex-1 bg-white">
	{@render children()}
</div>
