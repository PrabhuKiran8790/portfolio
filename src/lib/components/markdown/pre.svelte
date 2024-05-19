<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Copy from 'lucide-svelte/icons/copy';
	import CopyCheck from 'lucide-svelte/icons/copy-check';
	import { toast } from 'svelte-sonner';
	import { Button } from '$lib/components/ui/button';
	import { langIcons } from './icons';
	import { cn } from '$lib/utils';
	import { ToastCodeTitle } from '.';

	let className: string | undefined | null = undefined;
	export let title = '';
	// export let language = '';

	let codeElement: HTMLElement;
	let copyState = false;
	let lang: string;

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

	onMount(() => {
		if (codeElement) {
			const languageAttribute = codeElement.getAttribute('data-language');
			lang = languageAttribute as string;

			// // Check if data-language attribute is not equal to "md"
			// if (languageAttribute && languageAttribute.toLowerCase() !== 'md') {
			// 	const lines = codeElement.querySelectorAll('span[data-line]');
			// 	lines.forEach((line) => {
			// 		const lineText = line.textContent || '';

			// 		if (lineText.includes('// [!code ++]') || lineText.includes('# [!code ++]')) {
			// 			line.classList.add('code-add');
			// 			line.innerHTML = line.innerHTML
			// 				.replace(/\/\/ \[!code \+\+\]/g, '')
			// 				.replace(/# \[!code \+\+\]/g, '');
			// 		} else if (lineText.includes('// [!code --]') || lineText.includes('# [!code --]')) {
			// 			line.classList.add('code-delete');
			// 			line.innerHTML = line.innerHTML
			// 				.replace(/\/\/ \[!code --\]/g, '')
			// 				.replace(/# \[!code --\]/g, '');
			// 		}
			// 	});
			// }
		}
	});
</script>

<div
	class="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2"
>
	<div class="flex items-center gap-4">
		<span class="inline-flex items-center gap-1.5">
			<span class="size-4 rounded-full bg-gray-200" />
			<span class="size-4 rounded-full bg-gray-200" />
			<span class="size-4 rounded-full bg-gray-200" />
		</span>
		<p class="m-0 flex flex-row-reverse items-center justify-between gap-2.5 text-sm font-medium">
			{#if title}
				<span>{title}</span>
				{@const extension = title.split('.').pop()}
				{#if extension && langIcons[extension]}
					<img
						src={langIcons[extension].src}
						alt="Language"
						class={cn('size-5 rounded-none border-none', langIcons[extension].class)}
					/>
				{/if}
			{:else if lang && langIcons[lang]}
				<img
					src={langIcons[lang].src}
					alt="Language"
					class={cn('size-5 rounded-none border-none', langIcons[lang].class)}
				/>
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
	<pre {...$$restProps} class="outline-none" bind:this={codeElement}>
        <slot />
    </pre>
</div>
