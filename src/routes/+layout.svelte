<script lang="ts">
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { MenuContent, Metatags, Navbar } from '$lib/components/site';
	import { Toaster } from '$lib/components/ui/sonner';

	const preparePageTransition = () => {
		onNavigate((navigation) => {
			if (!(document as any).startViewTransition) return;
			return new Promise((resolve) => {
				(document as any).startViewTransition(async () => {
					resolve();
					await navigation.complete;
				});
			});
		});
	};

	preparePageTransition();

	let { children } = $props();
</script>

<Metatags />
<Toaster />
<div class="fixed h-full w-full lg:flex" data-vaul-drawer-wrapper="">
	<div
		class="scrollable-area hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-60 xl:w-72"
	>
		<MenuContent />
	</div>
	<Navbar />
	<div class="flex flex-1 bg-white">
		{@render children()}
	</div>
</div>