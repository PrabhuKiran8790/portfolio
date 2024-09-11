<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		children,
		...restprops
	}: HTMLAttributes<HTMLLIElement> & {
		class: string | undefined | null;
		children: Snippet;
	} = $props();
</script>

<li class={cn('mt-2 leading-7', className)} {...restprops}>
	{@render children()}
</li>
