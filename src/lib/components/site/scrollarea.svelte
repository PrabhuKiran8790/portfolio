<script>
	import { cn } from '$lib/utils';

	let className = '';
	export { className as class };
</script>

<div class={cn('scrollable-area', className)}>
	<slot />
</div>

<style lang="postcss">
	.scrollable-area {
		@apply h-full max-h-dynamic-screen min-h-dynamic-screen overflow-y-auto overflow-x-hidden;
	}
</style>
