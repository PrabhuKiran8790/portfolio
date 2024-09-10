<script lang="ts">
	import { page } from '$app/stores';
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Tabs from '$lib/components/ui/tabs';
	import { seriesPostCoverFolder } from '$lib/stores.svelte';
	import type { Post, SeriesPost } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';
	import { cubicInOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	let {
		posts = [],
		seriesPosts = []
	}: {
		posts: Post[];
		seriesPosts: SeriesPost[];
	} = $props();

	const [send, receive] = crossfade({
		duration: 150,
		easing: cubicInOut
	});

	// if series

	const pattern: RegExp = /-spn\d+-/; // -spn{order}- is the pattern for series post
	let seriesSlug = $derived($page.url.pathname.split('/').pop() || '');

	let isSeriesPost = $derived(pattern.test(seriesSlug));

	let activeSeriesPost: SeriesPost | undefined = $derived.by(() => {
		if (isSeriesPost) {
			// find the slug in subPosts
			return seriesPosts.find((seriesPost) => {
				return seriesPost.subPosts.some((subPost) => subPost.slug === seriesSlug);
			});
		}
	});
</script>

<Tabs.Root
	value={!isSeriesPost ? (seriesPostCoverFolder.value ? 'series' : 'posts') : 'series'}
	let:value
	class="mx-2 text-sm"
>
	<Tabs.List class="mt-1 w-full bg-zinc-200">
		<Tabs.Trigger value="posts" class="relative w-full">
			<span class={cn('z-20', value === 'posts' ? 'text-white' : 'text-black')}> Posts </span>

			{#if value === 'posts'}
				<div
					class="absolute left-0 top-0 h-8 w-full rounded-sm bg-black"
					in:send={{ key: 'active' }}
					out:receive={{ key: 'active' }}
				></div>
			{/if}
		</Tabs.Trigger>
		<Tabs.Trigger value="series" class="relative w-full">
			<span class={cn('z-20', value === 'series' ? 'text-white' : 'text-black')}> Series </span>
			{#if value === 'series'}
				<div
					class="absolute left-0 top-0 h-8 w-full rounded-sm bg-black"
					in:send={{ key: 'active' }}
					out:receive={{ key: 'active' }}
				></div>
			{/if}
		</Tabs.Trigger>
	</Tabs.List>
	<Tabs.Content value="posts" class="-mx-2 -mt-1">
		<div class="scrollable-area flex flex-col gap-1 p-2">
			{#each posts as post}
				{@const isActive = $page.url.pathname === `/writing/${post.slug}`}
				<a
					href={`/writing/${post.slug}`}
					onclick={() => {
						seriesPostCoverFolder.value = '';
					}}
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
	<Tabs.Content value="series" class="-mx-2 -mt-1">
		<div class="scrollable-area flex flex-col gap-1 p-2">
			<Accordion.Root class="flex flex-col gap-1" value={activeSeriesPost?.coverFolder}>
				{#each seriesPosts as seriesPost}
					<Accordion.Item value={seriesPost.coverFolder} class="border-none">
						<Accordion.Trigger
							class={cn(
								'rounded-lg py-0 transition-colors duration-300 hover:bg-gray-200 [&>*]:transition-colors [&>*]:duration-300',
								activeSeriesPost?.coverFolder === seriesPost.coverFolder
									? 'bg-gray-200'
									: seriesPostCoverFolder.value === seriesPost.coverFolder
										? 'bg-gray-200'
										: ''
							)}
							on:click={() => {
								seriesPostCoverFolder.value = seriesPost.coverFolder;
							}}
						>
							<span
								class={cn(
									'flex w-full flex-col items-start gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300'
								)}
							>
								<a class={cn('font-medium underline-offset-4 hover:underline')} href="/writing"
									>{seriesPost.title}</a
								>
								<span class={cn('font-medium', 'text-slate-500')}
									>{formatDate(seriesPost.date)}</span
								>
							</span>
						</Accordion.Trigger>
						<Accordion.Content class="mt-1 flex flex-col gap-1">
							{#each seriesPost.subPosts as subPost}
								{@const isActive = $page.url.pathname === `/writing/${subPost.slug}`}
								<a
									href={`/writing/${subPost.slug}`}
									class={cn(
										'mb-1 flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 [&>*]:transition-colors [&>*]:duration-300',
										isActive ? 'bg-black' : 'hover:bg-gray-200'
									)}
								>
									<span class={cn('font-medium', isActive && 'text-white')}>{subPost.title}</span>
									<span class={cn('font-medium', isActive ? 'text-slate-400' : 'text-slate-500')}
										>{formatDate(subPost.date)}</span
									>
								</a>
							{/each}
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</div>
	</Tabs.Content>
</Tabs.Root>
