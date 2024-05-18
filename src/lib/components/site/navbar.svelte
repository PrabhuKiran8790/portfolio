<script lang="ts">
	import { ArrowLeft, Command } from 'lucide-svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { MenuContent } from '.';
	import { headerTitle } from '$lib/stores';
	import { navigating, page } from '$app/stores';
	import { goto } from '$app/navigation';

	let showDrawer = false;

	$: {
		if ($navigating) {
			showDrawer = false;
		}
	}

	$: parsedUrl = new URL($page.url);
	$: pathSegments = parsedUrl.pathname.split('/');

	// Check if the segment after /writing exists and is not empty
	$: isBlogLinkOpened =
		pathSegments[1] === 'writing' && pathSegments[2] !== undefined && pathSegments[2] !== '';
</script>

<div
	class="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden"
>
	<div class="flex w-full items-center justify-between px-6">
		<button
			class="flex items-center gap-3"
			on:click={() => {
				showDrawer = !showDrawer;
			}}
		>
			<Command size={16} />
			<span id="headerTitle" class="max-w-[70dvw] pr-3">{$headerTitle}</span>
		</button>

		{#if isBlogLinkOpened}
			<button
				on:click={() => {
					// go back to the previous page
					goto('/writing');
				}}
			>
				<ArrowLeft size={16} />
			</button>
		{/if}
	</div>
</div>

<Drawer.Root bind:open={showDrawer} shouldScaleBackground>
	<Drawer.Content class="h-4/5">
		<div class="overflow-y-auto px-2">
			<MenuContent />
		</div>
	</Drawer.Content>
</Drawer.Root>

<style>
	#headerTitle {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
