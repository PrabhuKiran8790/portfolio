<script lang="ts">
	import { cn } from '$lib/utils';

	interface Props { [key: string]: any }

	let { class: className = undefined, ...rest }: Props = $props();
	
</script>

<hr class={cn('my-4 md:my-8', className)} {...rest} />
