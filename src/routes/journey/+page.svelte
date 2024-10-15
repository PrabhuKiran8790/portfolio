<script lang="ts">
	import { PageTitle } from '$lib/components/site';
	import { githubConfig } from '$lib/config.js';
	import { headerTitle } from '$lib/stores.svelte';
	import { cn } from '$lib/utils';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import PlusIcon from 'lucide-svelte/icons/plus';

	let { data } = $props();

	headerTitle.value = 'Journey';

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
				<PageTitle title={headerTitle.value} />
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
									{@const Content = journey.default}
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
												<div class="flex items-center justify-between">
													<div class="flex flex-col">
														<span class="text-lg font-semibold tracking-tight"
															>{journey.metadata.title}</span
														>
														{#if journey.metadata.month}
															<span class="flex items-center gap-1 text-xs text-muted-foreground">
																<CalendarIcon class="size-3" />
																<span class=" font-semibold tracking-tight"
																	>{journey.metadata.month}</span
																>
															</span>
														{/if}
													</div>
													{#if journey.metadata.image}
														<div class="size-10 rounded-xl bg-slate-200 p-1 shadow-xl">
															<img
																class="rounded-lg border-none"
																src={journey.metadata.image?.startsWith('./')
																	? `https://raw.githubusercontent.com/${githubConfig.username}/${githubConfig.repo}/${githubConfig.branch}/journey/${year}/${journey.metadata.image.replace('./', '')}`
																	: journey.metadata.image}
																alt="--"
															/>
														</div>
													{/if}
												</div>
												<div class="journey mt-1.5">
													<Content />
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
