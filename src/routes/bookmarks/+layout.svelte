<script lang="ts">
	import { headerTitle, seriesPostCoverFolder } from '$lib/stores.js';
	export let data;
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';

	$: {
		$headerTitle = 'Bookmarks';
	}

	$: collections = data.collections;
</script>

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">{$headerTitle}</span>
		</div>
	</div>
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
<div class="lg:bg-grid flex-1 bg-white">
	<slot />
</div>
