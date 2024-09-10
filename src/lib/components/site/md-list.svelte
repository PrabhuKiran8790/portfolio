<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		ordered,
		start,
		children
	}: { start: number | null | undefined; ordered: boolean; children: Snippet } = $props();
</script>

{#if ordered}
	<ol {start} class={cn('mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2')}>
		{@render children()}
	</ol>
{:else}
	<ul class={cn('mb-4 ml-6 list-disc')}>
		{@render children()}
	</ul>
{/if}
