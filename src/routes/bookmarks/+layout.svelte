<script lang="ts">
	import { headerTitle } from '$lib/stores.svelte';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { Skeleton } from '$lib/components/ui/skeleton';

	let { data, children } = $props();
	headerTitle.value = 'Bookmarks';
	const collections = $derived(data.collections);
</script>

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">{headerTitle.value}</span>
		</div>
	</div>
	<div class="scrollable-area flex flex-col gap-2 p-2">
		{#await collections}
			{#each Array(5) as _}
				<div
					class="flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300"
				>
					<Skeleton class="h-4 w-full" />
					<Skeleton class="h-4 w-full" />
				</div>
			{/each}
		{:then loadedCollections}
			{#each loadedCollections as collection}
				{@const isActive = $page.url.pathname === `/bookmarks/${collection.slug}`}
				<a
					href={`/bookmarks/${collection.slug}`}
					data-sveltekit-preload-data
					class={cn(
						'flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300',
						isActive ? 'bg-black' : 'hover:bg-gray-200'
					)}
				>
					<span class={cn('font-medium', isActive && 'text-white')}>{collection.title}</span>
					<span class={cn('font-medium', isActive ? 'text-slate-400' : 'text-slate-500')}
						>{collection.count} bookmark{collection.count > 1 ? 's' : ''}
					</span>
				</a>
			{/each}
		{:catch error}
			<p>Error loading collections: {error.message}</p>
		{/await}
	</div>
</div>
<div class="lg:bg-grid flex-1 bg-white">
	{@render children()}
</div>
