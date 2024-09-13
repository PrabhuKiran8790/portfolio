<script>
	import { page } from '$app/stores';
	import { headerTitle } from '$lib/stores.svelte';
	import { cn } from '$lib/utils';
	import { Skeleton } from '$lib/components/ui/skeleton';

	let { data } = $props();
	headerTitle.value = 'Bookmarks';
	const collections = $derived(data.collections);
</script>

<div class="lg:hidden">
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
