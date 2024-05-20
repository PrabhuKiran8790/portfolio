<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn, localToGithubURL } from '$lib/utils';
	import { dev } from '$app/environment';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: HTMLImgAttributes['src'] = undefined;
	export let alt: HTMLImgAttributes['alt'] = undefined;

	if (!dev && src?.startsWith('/posts')) {
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



<div class='mx-auto lg:px-4 mt-10 mb-5'>
	<div class='flow-root'>
	  <div class='-m-2 rounded-xl transition-colors duration-300 hover:bg-gray-200/80 bg-gray-100 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-3xl lg:p-4'>
		<img
		  {src}
		  {alt}
		  loading="lazy"
		  class='rounded-lg lg:rounded-xl bg-white ring-1 ring-gray-900/10 animate-reveal'
		/>
	  </div>
	</div>
</div>
<p class="text-center text-sm text-muted-foreground">{alt ? alt : ''}</p>