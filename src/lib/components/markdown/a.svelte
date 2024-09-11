<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

	let {
		href,
		children
	}: {
		href: string;
		children: Snippet;
	} = $props();

	const internal = $derived(href.startsWith('/') || href.startsWith('#'));
</script>

<a
	class="inline-flex items-center gap-1 text-blue-600 transition-colors hover:underline hover:underline-offset-4"
	{href}
	target={!internal ? '_blank' : undefined}
	rel={!internal ? 'noopener noreferrer' : undefined}
>
	{@render children()}

	{#if !internal}
		<ExternalLink class="h-3 w-3" />
	{/if}
</a>
