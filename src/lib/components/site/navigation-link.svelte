<script lang="ts">
	import { page } from '$app/state';
	import { cn } from '$lib/utils';
	import { ArrowUpRight } from 'lucide-svelte';
	import type { Component } from 'svelte';

	let {
		href = '/',
		name = '',
		Icon = undefined,
		iconClass = '',
		isExternal = false,
		shortcutNumber = undefined
	}: {
		href?: string;
		name?: string;
		Icon?: ConstructorOfATypedSvelteComponent | Component<any, any, any> | null | undefined;
		iconClass?: string;
		isExternal?: boolean;
		shortcutNumber?: number | undefined;
	} = $props();

	let isActive = $derived(
		page.url.pathname === href ||
			(page.url.pathname.split('/')[1] === href.split('/')[1] && !isExternal)
	);
</script>

<a
	{href}
	class={cn(
		'group flex items-center justify-between rounded-lg p-2 text-sm transition-colors duration-300',
		isActive ? 'bg-black text-white' : 'hover:bg-gray-200'
	)}
	target={isExternal ? '_blank' : ''}
	data-sveltekit-preload-data
>
	<span class="flex items-center gap-2">
		<Icon class={cn('size-4', iconClass)} />
		<span class={cn('font-medium', isActive && 'text-white')}>{name}</span>
	</span>
	{#if shortcutNumber}
		<span
			class={cn(
				'hidden h-5 w-5 place-content-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500 transition-colors duration-200 group-hover:border-gray-300 lg:grid',
				isActive && 'border-gray-600 bg-gray-700 text-gray-200 group-hover:border-gray-600'
			)}
			title={`Shortcut key: ${shortcutNumber}`}
		>
			{shortcutNumber}
		</span>
	{/if}

	{#if isExternal}
		<ArrowUpRight size={16} />
	{/if}
</a>
