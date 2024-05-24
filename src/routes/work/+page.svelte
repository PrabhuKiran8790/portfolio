<script lang="ts">
	import { PageTitle, WorkList } from '$lib/components/site';
	import { headerTitle } from '$lib/stores';
	import type { Module, ModuleWithFilename } from '$lib/types';
	import { cn } from '$lib/utils';
	import Link2Icon from 'lucide-svelte/icons/link-2';
	import Image from '$lib/components/markdown/img.svelte';
	import * as Drawer from '$lib/components/ui/drawer';
	import { mediaQuery } from '$lib/utils';

	export let data;

	$: {
		$headerTitle = 'Work';
	}

	let selectedWork: string = '';

	let currentWork: ModuleWithFilename | undefined = undefined;

	$: showDrawer = selectedWork !== '' || currentWork !== undefined;

	$: {
		showDrawer = selectedWork !== '' || currentWork !== undefined;
	}

	const isDesktop = mediaQuery('(min-width: 768px)');
</script>

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">Work</span>
		</div>
	</div>
	<WorkList works={data.works} bind:selectedWork bind:currentWork />
</div>

<div class="w-full lg:hidden">
	<WorkList works={data.works} bind:selectedWork bind:currentWork />
</div>

<div class="lg:bg-dots hidden flex-1 bg-white lg:block">
	{#if selectedWork}
		<div class="scrollable-area bg-white">
			<div class="content-wrapper mx-auto w-screen lg:max-w-[30rem] xl:max-w-[52rem]">
				<div class="content mb-24">
					<PageTitle title={currentWork?.metadata.title} />
					<Image src={currentWork?.metadata.cover} alt={currentWork?.metadata.title} />

					<div class="mdsvex" id="mdsvex">
						<svelte:component this={currentWork?.default} />
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>

{#if !$isDesktop}
	<Drawer.Root
		bind:open={showDrawer}
		shouldScaleBackground
		onClose={() => {
			selectedWork = '';
			currentWork = undefined;
		}}
	>
		<Drawer.Content class="h-[95%]">
			<div class="my-4 overflow-y-auto px-5">
				{#if selectedWork}
					<PageTitle title={currentWork?.metadata.title} />
					<Image src={currentWork?.metadata.cover} alt={currentWork?.metadata.title} />

					<div class="mdsvex" id="mdsvex">
						<svelte:component this={currentWork?.default} />
					</div>
				{/if}
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
