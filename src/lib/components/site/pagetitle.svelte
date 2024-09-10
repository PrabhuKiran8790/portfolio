<script>
	import { cn } from '$lib/utils';
	import { balancer } from 'svelte-action-balancer';

	let { class: className = '', title = '', subtitle = '' } = $props();
</script>

<div class={cn('mb-6 w-full', className)}>
	<h1 use:balancer id="BlogTitle" class="mb-2 w-full">
		{title}
	</h1>
	{#if subtitle}
		<time class="text-gray-400">
			{subtitle}
		</time>
	{/if}
</div>
