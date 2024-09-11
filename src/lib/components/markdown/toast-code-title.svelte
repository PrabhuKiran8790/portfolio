<script lang="ts">
	import { cn } from '$lib/utils';

	let { src = '', className = '', title = '' } = $props();
</script>

<div class="flex flex-col gap-0.5">
	<div class="flex w-full items-center gap-1.5">
		<img {src} class={cn('size-4 rounded-none border-0 outline-none', className)} alt="" />
		<span class="text-muted-foreground">{title}</span>
	</div>
	<div>
		<span>Copied to clipboard</span>
	</div>
</div>
