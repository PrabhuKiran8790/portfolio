<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<h2
	class={cn(
		// 'mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
		`group relative mb-2 mt-6 w-fit cursor-pointer before:absolute before:-left-4 hover:before:content-['#']`,
		'scroll-mt-16 font-semibold slashed-zero tracking-tighter text-black lg:scroll-mt-8',
		className
	)}
	{...$$restProps}
>
	<slot />
</h2>
