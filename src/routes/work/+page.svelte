<script lang="ts">
	import { langIcons } from '$lib/components/markdown/icons';
	import Image from '$lib/components/markdown/img.svelte';
	import { Metatags, WorkList } from '$lib/components/site';
	import * as Drawer from '$lib/components/ui/drawer';
	import { headerTitle } from '$lib/stores';
	import type { ModuleWithFilename } from '$lib/types';
	import { mediaQuery } from '$lib/utils';
	import { Globe } from 'lucide-svelte';
	import Github from 'lucide-svelte/icons/github';

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

	const isDesktop = mediaQuery('(min-width: 1240px)');
</script>

<Metatags title="Work" description="A collection of projects that I have worked on" />

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">{$headerTitle}</span>
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
			<div class="mx-auto w-screen py-8 lg:max-w-[30rem] lg:pb-16 lg:pt-20 xl:max-w-[52rem]">
				<div class=" mb-24">
					<div class="flex w-full gap-4">
						<div class="max-w-[50%]">
							<Image src={currentWork?.metadata.cover} class="" />
						</div>
						<div class="flex w-full flex-col gap-2.5">
							<h1 class="w-full pt-8 text-xl">{currentWork?.metadata.title}</h1>
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<Globe size={16} />
								<a href={currentWork?.metadata.link} target="_blank" rel="noopener noreferrer">
									{currentWork?.metadata.link.replace(/(^\w+:|^)\/\//, '')}
								</a>
							</div>
							{#if currentWork?.metadata.source}
								<div class="flex items-center gap-2 text-sm text-muted-foreground">
									<Github size={16} />
									<a href={currentWork?.metadata.source} target="_blank" rel="noopener noreferrer">
										{currentWork?.metadata.source.replace(/(^\w+:|^)\/\//, '')}
									</a>
								</div>
							{/if}
							{#if currentWork?.metadata.techstack}
								<div class="flex flex-wrap gap-2">
									{#each currentWork?.metadata.techstack as tech}
										<span class="flex rounded-md bg-gray-200 px-2 py-1 text-xs">
											{#if langIcons[tech.toLowerCase()]}
												<img
													src={langIcons[tech.toLowerCase()].src}
													alt={tech}
													class="mr-1 h-4 w-4 rounded-none"
												/>
											{/if}
											{tech}
										</span>
									{/each}
								</div>
							{/if}
						</div>
					</div>
					<div class="mdsvex my-4" id="mdsvex">
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
			<div class="overflow-y-auto px-5">
				{#if selectedWork}
					<Image src={currentWork?.metadata.cover} />
					<div class="flex w-full flex-col gap-2.5">
						<h1 class="w-full text-xl">{currentWork?.metadata.title}</h1>
						<div class="flex items-center gap-2 text-sm text-muted-foreground">
							<Globe size={16} />
							<a href={currentWork?.metadata.link} target="_blank" rel="noopener noreferrer">
								{currentWork?.metadata.link.replace(/(^\w+:|^)\/\//, '')}
							</a>
						</div>
						{#if currentWork?.metadata.source}
							<div class="flex items-center gap-2 text-sm text-muted-foreground">
								<Github size={16} />
								<a href={currentWork?.metadata.source} target="_blank" rel="noopener noreferrer">
									{currentWork?.metadata.source.replace(/(^\w+:|^)\/\//, '')}
								</a>
							</div>
						{/if}
						{#if currentWork?.metadata.techstack}
							<div class="flex flex-wrap gap-2">
								{#each currentWork?.metadata.techstack as tech}
									<span class="flex rounded-md bg-gray-200 px-2 py-1 text-xs">
										{#if langIcons[tech.toLowerCase()]}
											<img
												src={langIcons[tech.toLowerCase()].src}
												alt={tech}
												class="mr-1 h-4 w-4 rounded-none"
											/>
										{/if}
										{tech}
									</span>
								{/each}
							</div>
						{/if}
					</div>
					<div class="mdsvex my-4" id="mdsvex">
						<svelte:component this={currentWork?.default} />
					</div>
				{/if}
			</div>
		</Drawer.Content>
	</Drawer.Root>
{/if}
