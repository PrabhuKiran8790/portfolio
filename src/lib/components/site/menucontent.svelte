<script>
	import { owner, socials } from '$lib/config';
	import { routes } from '$lib/config';
	import { NavigationLink } from '$lib/components/site';
	import { goto } from '$app/navigation';

	$effect(() => {
		// on mount
		document.addEventListener('keydown', (event) => {
			if (event.key >= '1' && event.key <= `${routes.length}`) {
				const index = parseInt(event.key) - 1;
				goto(routes[index].path);
			}
		});
	});
</script>

<div class="flex flex-col">
	<div class="w-full p-1.5">
		<a
			href="/"
			class="inline-flex w-full items-center gap-2 rounded-lg bg-transparent p-2 transition-colors duration-300 hover:bg-gray-200"
		>
			<img
				src="/profile_picture.jpg"
				alt="Logo"
				class="rounded-full border shadow-sm"
				width={40}
				height={40}
			/>
			<div class="flex flex-col">
				<span class="font-semibold tracking-tight">{owner.name}</span>
				<span class="text-xs font-normal text-gray-600 lg:text-sm">{owner.title}</span>
			</div>
		</a>
	</div>

	<!-- links -->

	<div class="flex flex-col gap-1 p-2">
		{#each routes as route, index}
			<NavigationLink
				href={route.path}
				name={route.name}
				Icon={route.icon}
				iconClass={route.customClass}
				shortcutNumber={index + 1}
			/>
		{/each}
	</div>

	<div class="-mt-3 flex flex-col p-2">
		<hr />
		<div class="flex flex-col gap-2">
			<span class="px-2 text-xs font-medium leading-relaxed text-gray-600">Find me on</span>
			<div class="flex flex-col gap-1">
				{#each socials as social}
					<NavigationLink href={social.url} name={social.name} Icon={social.icon} isExternal />
				{/each}
			</div>
		</div>
	</div>
</div>
