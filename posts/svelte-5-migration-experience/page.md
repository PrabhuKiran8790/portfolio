---
title: Migrated my website to Svelte v5, here's my experience
description: let's see how to integrate Github and Google OAuth authentication using Auth.js (NextAuth) and Prisma with SvelteKit and protected routes and redirects
date: '2024-09-16'
image: https://i.ytimg.com/vi/RVnxF3j3N8U/maxresdefault.jpg
tags:
  - SvelteKit
  - Prisma
draft: true
---
Svelte 5 introduces a game-changing feature called runes, revolutionizing how we handle reactivity in our applications. Runes are special functions that allow for fine-grained reactivity control, making our code more explicit and efficient.
Key points about runes:

- Syntax: Runes are denoted by a $ prefix, like `$state(){:ts}` or `$derived(){:ts}`
- Explicit reactivity: Unlike Svelte 3's implicit reactivity, runes make reactive declarations clear and intentional.
- Flexibility: Runes work inside and outside of components, offering greater flexibility in code organization.
- Performance: They enable more optimized reactivity, potentially improving app performance.
- Gradual adoption: You can mix rune-based and traditional Svelte syntax, allowing for incremental migration

But, when Svelte 5 dropped runes like `$state(){:ts}`, `$derived(){:ts}`, and the gang, everyone went bam—‘Oh no, it’s turning into React!’ But fear not, it’s nothing like React’s hooks. Instead of dragging you into a never-ending hook abyss, runes actually simplify things. They just help you track reactivity with a lot less fuss, keeping Svelte's magic intact without turning it into 'React-lite'!

Now let's take a look at what changes i made to migrate to svelte v5

## Changes
let's begin my the most obvious changes, `'export let'{:ts}` and slots

### slots
- slots are replaced with snippets but now they come with a new reseverd keyword, `children`

```svelte title="+layout.svelte"
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

	let { children } = $props(); // ++add
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
    <slot /> // --del
    {@render children()} // ++add
	</div>
</div>
```