<script lang="ts">
	import { cn } from '$lib/utils';
	import { Info } from 'lucide-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<blockquote
	class={cn('my-6 rounded-lg border-l-2 border-primary bg-muted italic', className)}
	{...$$restProps}
>
	<div class="p-4 pr-2">
		<Info class="mb-3" />
		<slot />
	</div>
</blockquote>
