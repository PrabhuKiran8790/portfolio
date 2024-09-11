<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		children,
		...restProps
	}: HTMLAttributes<HTMLUListElement> & {
		class: string | undefined | null;
		children: Snippet;
	} = $props();
</script>

<ul class={cn('mb-4 ml-6 list-disc', className)} {...restProps}>
	{@render children()}
</ul>
