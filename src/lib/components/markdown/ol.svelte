<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className = undefined,
		children,
		...restProps
	}: HTMLAttributes<HTMLOListElement> & {
		class: string | undefined | null;
		children: Snippet;
	} = $props();
</script>

<ol
	class={cn('mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2', className)}
	{...restProps}
>
	{@render children()}
</ol>
