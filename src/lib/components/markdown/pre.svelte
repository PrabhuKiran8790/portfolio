<script lang="ts">
	import { onMount } from 'svelte';

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
</script>

{title}
<div class="my-3 overflow-scroll rounded-xl border-2 relative">
	<button class="absolute top-1 right-1"
	on:click={handleCopy}
	>
		copy
	</button>
	<pre {...$$restProps}
	bind:this={codeElement}
	>
        <slot />
    </pre>
</div>
