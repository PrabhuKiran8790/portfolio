<script lang="ts">
	import { fly } from 'svelte/transition';
	import Copy from 'lucide-svelte/icons/copy';
	import CopyCheck from 'lucide-svelte/icons/copy-check';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import { langIcons } from './icons';
	import { cn } from '$lib/utils';
	import { ToastCodeTitle } from '.';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	let {
		title = '',
		children,
		...restprops
	}: HTMLAttributes<HTMLPreElement> & {
		title?: string;
		children: Snippet;
	} = $props();

	let codeElement: HTMLElement;
	let copyState = $state(false);
	let lang: string = $state('');

	const handleCopy = () => {
		if (codeElement) {
			navigator.clipboard.writeText(codeElement.innerText ?? '');
			if (title) {
				const extension = title.split('.').pop();
				if (extension && langIcons[extension]) {
					toast.success(ToastCodeTitle, {
						componentProps: {
							title,
							src: langIcons[extension].src,
							className: langIcons[extension].class
						}
					});
				}
			} else {
				toast.success('Copied to clipboard');
			}
		}
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};

	$effect(() => {
		if (codeElement) {
			const languageAttribute = codeElement.getAttribute('data-language');
			lang = languageAttribute as string;
		}
	});

	type IconImageType = {
		langIcons: typeof langIcons;
		extension: string;
	};
</script>

{#snippet iconImage({ langIcons, extension }: IconImageType)}
	<img
		src={langIcons[extension].src}
		alt="Language"
		class={cn('size-5 rounded-none border-none', langIcons[extension].class)}
	/>
{/snippet}

<div
	class="mt-5 flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2"
>
	<div class="flex items-center gap-4">
		<span class="inline-flex items-center gap-1.5">
			<span class="size-4 rounded-full bg-gray-200"></span>
			<span class="size-4 rounded-full bg-gray-200"></span>
			<span class="size-4 rounded-full bg-gray-200"></span>
		</span>
		<p class="m-0 flex flex-row-reverse items-center justify-between gap-2.5 text-sm font-medium">
			{#if title}
				<span>{title}</span>
				{@const extension = title.split('.').pop()}
				{#if extension && langIcons[extension]}
					{@render iconImage({ langIcons, extension })}
				{/if}
			{:else if lang && langIcons[lang]}
				{@render iconImage({ langIcons, extension: lang })}
			{/if}
		</p>
	</div>
	<div>
		<Button class="h-7 rounded-lg" size="sm" variant="outline" on:click={handleCopy}>
			{#if copyState}
				<span in:fly={{ x: -4, delay: 50 }} class="inline-flex items-center justify-between gap-2">
					Copied
					<CopyCheck class="size-3.5 text-black" />
				</span>
			{:else}
				<span in:fly={{ x: 4, delay: 50 }} class="inline-flex items-center justify-between gap-2"
					>Copy <Copy class="size-3.5 text-black" /></span
				>
			{/if}
		</Button>
	</div>
</div>
<div class="mb-3 overflow-scroll rounded-lg rounded-t-none border border-t-0 border-gray-200">
	<pre {...restprops} class="outline-none" bind:this={codeElement}>
		{@render children()}
    </pre>
</div>
