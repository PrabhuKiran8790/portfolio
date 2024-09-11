<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		children,
		...restProps
	}: HTMLAttributes<HTMLParagraphElement> & {
		class: string | undefined | null;
		children: Snippet;
	} = $props();
</script>

<p class={cn('mb-4 leading-slacker last:mb-0', className)} {...restProps}>
	{@render children()}
</p>
