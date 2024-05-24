<script>
	import { cn } from '$lib/utils';

	export let ordered;
	export let start;
</script>

{#if ordered}
	<ol
		{start}
		class={cn('mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2')}
		{...$$restProps}
	>
		<slot />
	</ol>
{:else}
	<ul class={cn('mb-4 ml-6 list-disc')} {...$$restProps}>
		<slot />
	</ul>
{/if}
