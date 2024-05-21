<script>
	export let title = '';
	export let totalParts = 3;
	export let currentPart = 1;
	export let CoverFolderName = '';
	export let isSeries = false;
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
	{#if isSeries}
		<div class="right-15 top-15 absolute flex">
			{currentPart} / {totalParts}
		</div>
	{/if}
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
		{#if isSeries}
			<div class="flex w-fit">
				<span
					class="rounded-full bg-slate-600 px-4 py-2 text-white"
					style="
                        fontSize: 1.5rem;
                        lineHeight: 1;
                        fontWeight: 300;
                    ">Series: {CoverFolderName}</span
				>
			</div>
		{/if}
		<div style="display: flex; alignItems: center; gap: 1rem">
			<span
				style="
					fontSize: 5rem;
					lineHeight: 1;
					fontWeight: 600;
				"
			>
				{title}
			</span>
		</div>
	</span>
</div>
