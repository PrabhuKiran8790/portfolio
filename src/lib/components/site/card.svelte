<script lang="ts">
	import { Calendar, Info } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { seriesPostCoverFolder } from '$lib/stores.svelte';
	import type { Post, Series } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';

	let {
		post = null,
		title = '',
		image = ''
	}: {
		post: Post | Series | null;
		title: string;
		image: string;
	} = $props();

	function isSeries(post: Post | Series): post is Series {
		return (post as Series).order !== undefined;
	}
</script>

{#if post}
	<a
		class="thumbnail-shadow relative flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
		href={`/writing/${post.slug}`}
		data-sveltekit-preload-data
		onclick={() => {
			seriesPostCoverFolder.value = '';
		}}
	>
		{#if isSeries(post)}
			<HoverCard.Root openDelay={400}>
				<HoverCard.Trigger
					class={cn(
						'absolute right-6 top-6 line-clamp-4 inline-flex items-center gap-1 rounded-lg outline-1 hover:outline'
					)}
				>
					<Badge
						variant="secondary"
						class="line-clamp-4 inline-flex items-center gap-1 rounded-lg px-1"
					>
						<span>Series</span>
						<Info size={14} />
					</Badge>
				</HoverCard.Trigger>
				<HoverCard.Content
					class="relative flex w-fit max-w-96 flex-col text-wrap rounded-xl bg-zinc-50 p-2 text-xs text-muted-foreground shadow-xl"
				>
					<span>Part of</span>
					<span class="flex flex-col gap-1">
						<span class="text-sm font-semibold text-primary">{post.coverTitle}</span>
						<span>{post.coverDescription}</span>
					</span>
					<span class="absolute right-2 top-1">
						{post.order} / {post.totalParts}
					</span>
				</HoverCard.Content>
			</HoverCard.Root>
		{/if}

		{#if !post.useIconInHome}
			<span class="aspect-[1200/630] overflow-hidden rounded-lg">
				<img
					alt="title"
					src={image || '/fallback.avif'}
					width={1200}
					height={630}
					class="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
					onerror={(e) => {
						const target = e.target;
						if (target instanceof HTMLImageElement) {
							target.onerror = null;
							target.src = '/fallback.avif';
						}
					}}
				/>
			</span>
		{/if}

		<div class="flex flex-col gap-1">
			<div class="flex gap-2">
				{#if post.useIconInHome}
					<div class="size-12">
						<img src={post.icon} alt={post.title} class="animate-reveal" />
					</div>
				{/if}
				<div class="flex-1">
					<h2 class="line-clamp-4 text-lg leading-snug">{title}</h2>
				</div>
			</div>
			<span class="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
				<Calendar size={14} />
				<span class="line-clamp-6 text-sm">{formatDate(post.date)}</span>
			</span>
		</div>
	</a>
{/if}
