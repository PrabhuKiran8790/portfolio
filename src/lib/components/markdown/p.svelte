<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p class={cn('mb-4 leading-slacker last:mb-0', className)} {...$$restProps}>
	<slot />
</p>
