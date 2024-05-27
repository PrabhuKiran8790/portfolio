<script>
	export let title = '';
	export let count = 1;
</script>

<!-- <div
	class="relative flex h-screen items-center justify-start p-20"
	style="background-color: #ffffff;
  background-image: 
    linear-gradient(to right, rgba(128, 128, 128, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(128, 128, 128, 0.12) 1px, transparent 1px);
  background-size: 24px 24px;"
>
	<div class="absolute left-20 top-20 flex">
		<p class="rounded-3xl bg-black p-1.5 px-3 text-white">Prabhu Kiran Konda</p>
	</div>
	<div class="flex flex-col gap-0 text-lg">
		<h1 class="-mb-10">{title}</h1>
	</div>
</div> -->

<div
	style="
		backgroundColor: white;
		width: 100%;
		height: 100%;
		display: flex;
		position: relative
	"
>
	<div class="absolute right-10 top-10 z-40 flex">
		<div class="flex items-center justify-center">
			<div
				class="flex items-center justify-center bg-black"
				style="
				border-radius: 32px;
				width: 6rem;
				height: 6rem;"
			>
				<span class="-mt-2.5 text-[150px] text-white">
					{'•'}
				</span>
			</div>
		</div>
	</div>
	<div
		style="
			position: absolute;
			inset: 0;
			height: 100%;
			width: 100%;
			backgroundImage:
				linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px);
			backgroundSize: 24px 24px;
            display: flex;
		"
	/>
	<div
		style="
            display: flex;
			position: absolute;
			top: 60;
			left: 60;
			fontSize: 2.5rem;
			lineHeight: 1;
			background: #000;
			color: #fff;
			padding: 1rem 1.75rem;
			borderRadius: 9999;
		"
	>
		Prabhu Kiran Konda
	</div>
	<span
		style="
			display: flex;
			flexDirection: column;
			gap: 0.5rem;
			position: absolute;
			bottom: 100;
			left: 60;
			width: 80%;
		"
	>
		<div class="flex w-fit">
			<span
				class="rounded-full bg-slate-600 px-4 py-2 text-white"
				style="
				fontSize: 1.5rem;
				lineHeight: 1;
				fontWeight: 300;
			">Bookmarks</span
			>
		</div>
		<div class="flex flex-col items-start gap-1">
			<span
				style="
					fontSize: 5rem;
					lineHeight: 1;
					fontWeight: 600;
				"
			>
				{title}
			</span>
			<span class="px-1">{count} bookmarks</span>
		</div>
	</span>
</div>
