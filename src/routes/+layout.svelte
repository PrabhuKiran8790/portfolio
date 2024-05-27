<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { MenuContent, Navbar } from '$lib/components/site';
	import { Toaster } from '$lib/components/ui/sonner';
	import '../app.pcss';

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

	let title = 'Prabhu Kiran Konda';
	let description = 'Electrical Engineer, Software Developer and Writer';
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="description" content={description} />

	<meta
		property="og:image"
		content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${title}&description=${description}`}
	/>

	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta
		name="twitter:image"
		property="twitter:image"
		content={`https://v3-prabhukirankonda.vercel.app/social.png?title=${title}&description=${description}`}
	/>
	<meta property="og:url" content={$page.url.href} />
	<meta name="twitter:card" property="twitter:card" content="summary_large_image" />
	<meta name="twitter:image:alt" property="twitter:title" content={title} />
	<meta name="twitter:title" property="twitter:title" content={title} />
	<meta name="twitter:description" property="twitter:description" content={description} />
	<meta name="twitter:site" content="@prabhukirantwt" />
	<meta name="twitter:creator" content="@prabhukirantwt" />
</svelte:head>

<Toaster />

<div class="fixed h-full w-full lg:flex" data-vaul-drawer-wrapper="">
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
