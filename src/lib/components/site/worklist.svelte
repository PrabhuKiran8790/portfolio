<script lang="ts">
	import type { ModuleWithFilename } from '$lib/types';
	import { cn } from '$lib/utils';
	import Link2Icon from 'lucide-svelte/icons/link-2';

	let {
		works = [],
		selectedWork = $bindable(''),
		currentWork = $bindable(undefined)
	}: {
		works: ModuleWithFilename[];
		selectedWork: string;
		currentWork: ModuleWithFilename | undefined;
	} = $props();

	$effect(() => {
		if (selectedWork) {
			currentWork = works.find((work) => work.filename === selectedWork);
		}
	});
</script>

<div class="scrollable-area flex flex-col gap-2 p-2">
	{#each works as work}
		{@const isActive = selectedWork === work.filename}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div
			class={cn(
				'active:bg-gra-200 flex flex-col gap-1 rounded-lg p-2 transition-colors duration-300 hover:cursor-pointer [&>*]:transition-colors [&>*]:duration-300',
				isActive ? 'lg:bg-black' : 'lg:hover:bg-gray-200'
			)}
			onclick={() => {
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
