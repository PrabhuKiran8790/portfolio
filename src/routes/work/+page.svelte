<script lang="ts">
	import { langIcons } from '$lib/components/markdown/icons';
	import Image from '$lib/components/markdown/img.svelte';
	import { WorkList } from '$lib/components/site';
	import * as Drawer from '$lib/components/ui/drawer';
	import { headerTitle } from '$lib/stores.svelte';
	import type { ModuleWithFilename } from '$lib/types';
	import { Globe } from 'lucide-svelte';
	import Github from 'lucide-svelte/icons/github';

	let { data } = $props();

	headerTitle.value = 'Work';

	let selectedWork: string = $state('');
	let currentWork: ModuleWithFilename | undefined = $state(undefined);
	let showDrawer = $state(false);
	let isDesktop = $state(false);

	const updateScreenSize = () => {
		isDesktop = window.innerWidth >= 1024;
	};

	$effect(() => {
		showDrawer = (selectedWork !== '' || currentWork !== undefined) && !isDesktop;
	});

	$effect(() => {
		updateScreenSize();
		window.addEventListener('resize', updateScreenSize);
		return () => window.removeEventListener('resize', updateScreenSize);
	});
</script>

{#snippet workDetails(work: ModuleWithFilename)}
	{@const Content = work.default}
	<div class="flex w-full flex-col gap-4 lg:flex-row">
		<div class="w-full lg:max-w-[50%]">
			<Image src={work.metadata.cover} class="w-full" />
		</div>
		<div class="flex w-full flex-col gap-2.5 lg:pt-8">
			<h1 class="w-full text-xl lg:pt-0">{work.metadata.title}</h1>
			<div class="flex items-center gap-2 text-sm text-muted-foreground">
				<Globe size={16} />
				<a href={work.metadata.link} target="_blank" rel="noopener noreferrer">
					{work.metadata.link.replace(/(^\w+:|^)\/\//, '')}
				</a>
			</div>
			{#if work.metadata.source}
				<div class="flex items-center gap-2 text-sm text-muted-foreground">
					<Github size={16} />
					<a href={work.metadata.source} target="_blank" rel="noopener noreferrer">
						{work.metadata.source.replace(/(^\w+:|^)\/\//, '')}
					</a>
				</div>
			{/if}
			{#if work.metadata.techstack}
				<div class="flex flex-wrap gap-2">
					{#each work.metadata.techstack as tech}
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
		<Content />
	</div>
{/snippet}

<div class="hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-80 xl:w-96">
	<div class="sticky top-0 z-10 border-b bg-zinc-50 px-5 py-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-semibold tracking-tight">{headerTitle.value}</span>
		</div>
	</div>
	<WorkList works={data.works} bind:selectedWork bind:currentWork />
</div>

<div class="w-full lg:hidden">
	<WorkList works={data.works} bind:selectedWork bind:currentWork />
</div>

<div class="lg:bg-dots hidden flex-1 bg-white lg:block">
	{#if selectedWork && currentWork}
		<div class="scrollable-area bg-white">
			<div class="content-wrapper py-8">
				<div class="content mb-24">
					{@render workDetails(currentWork)}
				</div>
			</div>
		</div>
	{/if}
</div>

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
			{#if selectedWork && currentWork}
				{@render workDetails(currentWork)}
			{/if}
		</div>
	</Drawer.Content>
</Drawer.Root>
