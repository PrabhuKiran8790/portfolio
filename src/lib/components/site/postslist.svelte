<script lang="ts">
	import { page } from '$app/stores';
	import * as Tabs from '$lib/components/ui/tabs';
	import type { Post, SeriesPost } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade, fly } from 'svelte/transition';

	export let posts: Post[] = [];
	export let seriesPosts: SeriesPost[] = [];

	const [send, receive] = crossfade({
		duration: 150,
		easing: cubicInOut
	});

	// if series

	const pattern: RegExp = /-spn\d+-/; // -spn{order}- is the pattern for series post
	const seriesSlug: string = $page.url.pathname.split('/').pop() || '';

	// if the $page.url.pathname matches the pattern, then it's a series post
	$: isSeriesPost = pattern.test(seriesSlug);
</script>

<Tabs.Root value={isSeriesPost ? 'Series' : 'Posts'} let:value class="mx-2">
	<Tabs.List class="mt-1 w-full bg-zinc-200">
		<Tabs.Trigger value="Posts" class="relative w-full">
			<span class={cn('z-20', value === 'Posts' ? 'text-white' : 'text-black')}> Posts </span>

			{#if value === 'Posts'}
				<div
					class="absolute left-0 top-0 h-8 w-full rounded-sm bg-black"
					in:send={{ key: 'active' }}
					out:receive={{ key: 'active' }}
				></div>
			{/if}
		</Tabs.Trigger>
		<Tabs.Trigger value="Series" class="relative w-full">
			<span class={cn('z-20', value === 'Series' ? 'text-white' : 'text-black')}> Series </span>
			{#if value === 'Series'}
				<div
					class="absolute left-0 top-0 h-8 w-full rounded-sm bg-black"
					in:send={{ key: 'active' }}
					out:receive={{ key: 'active' }}
				></div>
			{/if}
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="Posts" class="-mx-2 -mt-1">
		<div class="scrollable-area flex flex-col gap-1 p-2">
			{#each posts as post}
				{@const isActive = $page.url.pathname === `/writing/${post.slug}`}
				<a
					href={`/writing/${post.slug}`}
					class={cn(
						'flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300',
						isActive ? 'bg-black' : 'hover:bg-gray-200'
					)}
				>
					<span class={cn('font-medium', isActive && 'text-white')}>{post.title}</span>
					<span class={cn('font-medium', isActive ? 'text-slate-400' : 'text-slate-500')}
						>{formatDate(post.date)}</span
					>
				</a>
			{/each}
		</div>
	</Tabs.Content>
	<Tabs.Content value="Series" class="-mx-2 -mt-1"></Tabs.Content>
</Tabs.Root>
