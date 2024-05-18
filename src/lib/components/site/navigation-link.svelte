<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { ArrowUpRight } from 'lucide-svelte';
	import type { ComponentType, SvelteComponent } from 'svelte';

	export let href: string = '/';
	export let name: string = '';
	export let icon: ComponentType<SvelteComponent> | undefined = undefined;
	export let iconClass: string = '';
	export let isExternal: boolean = false;

	$: isActive =
		$page.url.pathname === href ||
		($page.url.pathname.split('/')[1] === href.split('/')[1] && !isExternal);
</script>

<a
	{href}
	class={cn(
		'group flex items-center justify-between rounded-lg p-2 text-sm transition-colors duration-300',
		isActive ? 'bg-black text-white' : 'hover:bg-gray-200'
	)}
	target={isExternal ? '_blank' : ''}
>
	<span class="flex items-center gap-2">
		<svelte:component this={icon} class={cn('size-4', iconClass)} />
		<span class={cn('font-medium', isActive && 'text-white')}>{name}</span>
	</span>
	{#if isExternal}
		<ArrowUpRight size={16} />
	{/if}
</a>
