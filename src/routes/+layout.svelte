<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { MenuContent, Navbar } from '$lib/components/site';
	import '../app.pcss';
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
</script>

<Toaster />

<div class="fixed h-full w-full lg:flex" data-vaul-drawer-wrapper>
	<div
		class="scrollable-area hidden h-full border-r bg-zinc-50 text-sm font-light lg:block lg:w-60 xl:w-72"
	>
		<MenuContent />
	</div>
	<Navbar />
	<div class="flex flex-1 bg-white">
		<slot />
	</div>
</div>

<!-- <style lang="postcss">
	.link-card {
    @apply -mx-1.5 -my-1 rounded bg-transparent px-1.5 py-1 transition-colors duration-300 hover:bg-gray-200;
  }
</style> -->
