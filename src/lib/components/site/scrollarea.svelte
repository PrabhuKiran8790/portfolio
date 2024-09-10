<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		class: className = '',
		children
	}: {
		class: string;
		children: Snippet;
	} = $props();
</script>

<div class={cn('scrollable-area', className)}>
	{@render children()}
</div>

<style lang="postcss">
	.scrollable-area {
		@apply h-full max-h-dynamic-screen min-h-dynamic-screen overflow-y-auto overflow-x-hidden;
	}
</style>
