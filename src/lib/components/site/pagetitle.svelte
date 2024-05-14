<script>
	import { cn } from '$lib/utils';
	import { balancer } from 'svelte-action-balancer';

	let className = '';
	export let title = '';
	export let subtitle = '';

	export { className as class };
</script>

<div class={cn('mb-6', className)}>
	<h1 use:balancer>
		{title}
	</h1>
	{subtitle}
</div>
