<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn, localToGithubURL } from '$lib/utils';
	import { dev } from '$app/environment';
	import { page } from '$app/stores';

	// let className: string | undefined | null = undefined;
	// export { className as class };
	export let src: HTMLImgAttributes['src'] = undefined;
	export let alt: HTMLImgAttributes['alt'] = undefined;

	if (!dev && (src?.startsWith('/posts') || src?.startsWith('/series'))) {
		// only convert if starts with /posts because assets in static folder will be processed by vite
		src = localToGithubURL({ src });
	}
</script>

<!-- <div class="flex flex-col items-center justify-center gap-1">
	<img
		{src}
		{alt}
		class={cn('mt-4 animate-reveal rounded-md', className)}
		{...$$restProps}
		loading="lazy"
	/>
	<p class="text-center text-sm text-muted-foreground">{alt ? alt : ''}</p>
</div> -->

<div class="mx-auto mt-10 lg:px-4">
	<div class="mb-5 flow-root">
		<div
			class={cn(
				'-m-2 rounded-xl bg-gray-100 p-2 ring-1 ring-inset ring-gray-900/10 transition-colors duration-300 hover:bg-gray-200/80 hover:shadow-xl lg:-m-4 lg:rounded-2xl',
				$page.url.pathname !== '/journey' ? 'lg:p-2' : 'lg:p-3'
			)}
		>
			<img
				{src}
				{alt}
				loading="lazy"
				class="animate-reveal rounded-lg bg-white ring-1 ring-gray-900/10 transition-colors duration-300 hover:shadow-xl lg:rounded-xl"
			/>
		</div>
	</div>
	{#if alt}
		<p class="text-center text-xs text-muted-foreground">{alt ? alt : ''}</p>
	{/if}
</div>
