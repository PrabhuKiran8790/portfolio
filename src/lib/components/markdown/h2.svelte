<script lang="ts">
	import { cn } from '$lib/utils';

	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		children,
		...restprops
	}: HTMLAttributes<HTMLHeadingElement> & {
		class: string | undefined | null;
		children: Snippet;
	} = $props();
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<h2
	class={cn(
		// 'mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
		`group relative mb-2 mt-6 w-fit cursor-pointer before:absolute before:-left-4 hover:before:content-['#']`,
		'scroll-mt-16 font-semibold slashed-zero tracking-tighter text-black lg:scroll-mt-8',
		className
	)}
	{...restprops}
	onclick={() => {
		if (window.location.hash !== `#${restprops.id}`) {
			window.location.hash = `#${restprops.id}`;
		}
	}}
>
	{@render children()}
</h2>
