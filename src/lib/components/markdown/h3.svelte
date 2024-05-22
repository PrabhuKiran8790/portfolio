<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<h3
	class={cn(
		`group relative mb-2 mt-6 w-fit cursor-pointer before:absolute before:-left-4 hover:before:content-['#']`,
		className
	)}
	{...$$restProps}
	on:click={() => {
		if (window.location.hash !== `#${$$restProps.id}`) {
			window.location.hash = `#${$$restProps.id}`;
		}
	}}
>
	<slot />
</h3>
