<script>
	let { title = '', description = '' } = $props();
</script>

<div
	style="
		backgroundColor: white;
		width: 100%;
		height: 100%;
		display: flex;
		position: relative
	"
>
	<div class="absolute right-10 top-10 flex">
		<div class="flex items-center justify-center">
			<div
				class="flex items-center justify-center bg-black"
				style="
				border-radius: 32px;
				width: 6rem;
				height: 6rem;"
			>
				<div class="flex h-12 w-12 rounded-full bg-white"></div>
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
	></div>
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
			bottom: 120;
			left: 60;
			width: 80%;
		"
	>
		<div class="flex flex-col items-start" style="gap: 12px">
			<span
				style="
					fontSize: 5rem;
					lineHeight: 1;
					fontWeight: 600;
				"
			>
				{title}
			</span>
			<span
				class="px-1"
				style="
					fontSize: 2rem;
					lineHeight: 1;
					fontWeight: 300;
				">{description}</span
			>
		</div>
	</span>
</div>
