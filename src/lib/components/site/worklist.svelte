<script lang="ts">
	import type { ModuleWithFilename } from '$lib/types';
	import { cn } from '$lib/utils';
	import Link2Icon from 'lucide-svelte/icons/link-2';

	export let works: ModuleWithFilename[];

	export let selectedWork: string = '';

	export let currentWork: ModuleWithFilename | undefined = undefined;

	$: {
		if (selectedWork) {
			currentWork = works.find((work) => work.filename === selectedWork);
		}
	}
</script>

<div class="scrollable-area flex flex-col gap-1 p-2">
	{#each works as work}
		{@const isActive = selectedWork === work.filename}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class={cn(
				'flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 hover:cursor-pointer [&>*]:transition-colors [&>*]:duration-300',
				isActive ? 'bg-black' : 'hover:bg-gray-200'
			)}
			on:click={() => {
				selectedWork = work.filename;
			}}
		>
			<span class={cn('font-medium', isActive && 'text-white')}>{work.metadata.title}</span>
			<span class={cn('flex flex-col', isActive ? 'text-slate-300' : 'text-slate-500')}>
				<span class="line-clamp-4 text-sm">
					{work.metadata.description}
				</span>
				<span class="line-clamp-4 inline-flex items-center gap-1 text-sm">
					<Link2Icon size={16} class="mt-0.5" />
					{work.metadata.link.replace('https://', '')}
				</span>
			</span>
		</div>
	{/each}
</div>
