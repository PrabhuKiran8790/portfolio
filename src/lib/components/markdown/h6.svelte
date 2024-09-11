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

<h6 class={cn('mt-8 scroll-m-20 text-base font-semibold tracking-tight', className)} {...restprops}>
	{@render children()}
</h6>
