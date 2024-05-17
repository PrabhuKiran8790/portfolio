<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '../ui/button';
	import { fly } from 'svelte/transition';
	import Copy from 'lucide-svelte/icons/copy'
	import CopyCheck from 'lucide-svelte/icons/copy-check'

	let className: string | undefined | null = undefined;
	export let title = '';

	let codeElement: HTMLElement;
	let copyState = false;
	let lang: string;

	const handleCopy = () => {
		if (codeElement) {
			navigator.clipboard.writeText(codeElement.innerText ?? '');
		}
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 1500);
	};


	onMount(() => {
		if (codeElement) {
			// Check if data-language attribute is not equal to "md"
			const languageAttribute = codeElement.getAttribute('data-language');
			lang = languageAttribute as string;

			if (languageAttribute && languageAttribute.toLowerCase() !== 'md') {
				const lines = codeElement.querySelectorAll('span[data-line]');
				lines.forEach((line) => {
					const lineText = line.textContent || '';

					if (lineText.includes('// [!code ++]') || lineText.includes('# [!code ++]')) {
						line.classList.add('code-add');
						line.innerHTML = line.innerHTML
							.replace(/\/\/ \[!code \+\+\]/g, '')
							.replace(/# \[!code \+\+\]/g, '');
					} else if (lineText.includes('// [!code --]') || lineText.includes('# [!code --]')) {
						line.classList.add('code-delete');
						line.innerHTML = line.innerHTML
							.replace(/\/\/ \[!code --\]/g, '')
							.replace(/# \[!code --\]/g, '');
					}
				});
			}
		}
	});
</script>

<!-- {title}
<div class="my-3 overflow-scroll rounded-xl border-2 relative outline-none">
	<button class="absolute top-1 right-1"
	on:click={handleCopy}
	>
		copy
	</button>
	<pre {...$$restProps}
	class="outline-none"
	bind:this={codeElement}
	>
        <slot />
    </pre>
</div> -->


<div class="flex flex-wrap items-center justify-between gap-2 rounded-t-lg border border-gray-200 bg-gray-50 py-1.5 pl-4 pr-2">
	<div class="flex items-center gap-4">
		<span class="inline-flex items-center gap-1.5">
		  <span class="size-4 rounded-full bg-gray-200" />
		  <span class="size-4 rounded-full bg-gray-200" />
		  <span class="size-4 rounded-full bg-gray-200" />
		</span>
		{#if title}
			<p class="m-0 text-sm font-medium">
			{title}
			</p>
		{/if}
	</div>
	<div>
		<Button
		class="rounded-lg h-7"
		size="sm"
		variant="outline"
		on:click={handleCopy}
		>
		{#if copyState}
		<span in:fly={{ y: -4, delay: 50 }} class="inline-flex items-center justify-between gap-2">
			Copied
			<CopyCheck class="size-3.5 text-black"/>
		</span>
	{:else}
		<span in:fly={{ y: 4, delay: 50 }} class="inline-flex items-center justify-between gap-2">Copy <Copy class="size-3.5 text-black"/></span>
	{/if}
		</Button>
	</div>
</div>
<div class="overflow-scroll border-gray-200 border border-t-0 rounded-lg rounded-t-none mb-3">
	<pre {...$$restProps}
	class="outline-none"
	bind:this={codeElement}
	>
        <slot />
    </pre>
</div>

