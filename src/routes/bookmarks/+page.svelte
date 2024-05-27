<script>
	import { page } from '$app/stores';
	import { headerTitle } from '$lib/stores';
	import { cn } from '$lib/utils';
	export let data;

	$: {
		$headerTitle = 'Bookmarks';
	}

	$: collections = data.collections;
</script>

<div class="lg:hidden">
	<div class="scrollable-area flex flex-col gap-2 p-2">
		{#each collections as collection}
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
	</div>
</div>
