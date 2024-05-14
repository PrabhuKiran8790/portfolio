<script>
	import { Command } from 'lucide-svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { MenuContent } from '.';
	import { headerTitle } from '$lib/stores';
	import { navigating } from '$app/stores';

	let showDrawer = false;

	$: {
		if ($navigating) {
			showDrawer = false;
		}
	}
</script>

<div
	class="sticky inset-x-0 top-0 z-10 mx-auto flex h-12 w-full shrink-0 items-center overflow-hidden border-b bg-white text-sm font-medium lg:hidden"
>
	<div class="flex items-center px-6">
		<button
			class="flex items-center gap-3"
			on:click={() => {
				showDrawer = !showDrawer;
			}}
		>
			<Command size={16} />
			<span>{$headerTitle}</span>
		</button>
	</div>
</div>

<Drawer.Root bind:open={showDrawer} shouldScaleBackground>
	<Drawer.Content class="h-4/5">
		<div class="overflow-y-auto px-2">
			<MenuContent />
		</div>
	</Drawer.Content>
</Drawer.Root>
