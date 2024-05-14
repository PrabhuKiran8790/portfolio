<script lang="ts">
	import { onMount } from 'svelte';

	let className: string | undefined | null = undefined;

	let codeElement: HTMLElement;
	let copyState = false;

	const handleCopy = () => {
		if (codeElement) {
			navigator.clipboard.writeText(codeElement.innerText ?? '');
			// toast.success('Copied', {
			// 	style: 'background: #333; color: #fff;'
			// });
		}

		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
	};

	let title__: string;
	let lang: string;

	onMount(() => {
		const figure = document.querySelector('[data-rehype-pretty-code-figure]');
		// console.log(figure);

		const title = figure?.querySelector('figcaption')?.textContent;
		console.log(title);
		console.log(figure);

		if (title) {
			figure?.querySelector('div')?.querySelector('pre')?.setAttribute('title', title);
			title__ = title;
		}
	});
</script>

<div class="my-3 overflow-scroll rounded-xl border-2">
	<pre {...$$restProps} title={title__}>
        <slot />
    </pre>
</div>
