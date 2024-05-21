<script lang="ts">
	import { cn } from '$lib/utils';
	import { headerTitle } from '$lib/stores';
	import { Calendar, CalendarIcon, PlusIcon } from 'lucide-svelte';
	import { PageTitle } from '$lib/components/site';
	export let data;

	$: {
		$headerTitle = 'Journey';
	}

	function last(index: number, array: any[]) {
		return index === array.length - 1;
	}
</script>

<div class="scrollable-area relative flex w-full flex-col">
	<div
		class="bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
	>
		<div class="content-wrapper">
			<div class="content mb-20">
				<PageTitle title={$headerTitle} />
				<div class="flex flex-col items-stretch gap-12">
					{#each data.years as year, itemIndex}
						{@const item = data.journeyByYear[year]}
						<div class="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
							<div class="flex items-center">
								<h2>{year}</h2>
								<hr class="my-0 ml-4 flex-1 border-dashed border-gray-200" />
							</div>
							<section>
								{#each item as journey, logIndex}
									<div
										class={cn(
											'relative flex pb-8',
											last(logIndex, item) && 'last:pb-0',
											'last:pb-0'
										)}
									>
										{#if !last(logIndex, item)}
											<div class="absolute inset-0 flex w-6 items-center justify-center">
												<div class="pointer-events-none h-full w-px border-l border-gray-200"></div>
											</div>
										{/if}
										<div
											class="z-0 flex size-6 shrink-0 items-center justify-center rounded-full bg-black align-middle text-white"
										>
											<PlusIcon size={16} />
										</div>
										<div class="grow pl-8">
											<div class="word-break-word -mt-0.5 flex flex-col">
												<span class="font-semibold tracking-tight">{journey.metadata.title}</span>
												{#if journey.metadata.month}
													<span class="flex items-center gap-1 text-xs text-muted-foreground">
														<CalendarIcon class="size-3" />
														<span class=" font-semibold tracking-tight"
															>{journey.metadata.month}</span
														>
													</span>
												{/if}
												<div class="journey mt-1.5">
													<svelte:component this={journey.default} />
												</div>
											</div>
										</div>
									</div>
								{/each}
							</section>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
