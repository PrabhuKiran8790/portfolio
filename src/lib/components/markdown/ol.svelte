<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<ol
	class={cn('mb-4 flex list-inside list-[decimal-leading-zero] flex-col gap-2', className)}
	{...$$restProps}
>
	<slot />
</ol>
