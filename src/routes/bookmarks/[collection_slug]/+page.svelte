<script lang="ts">
	import Link2Icon from 'lucide-svelte/icons/link-2';
	import { PageTitle } from '$lib/components/site';
	import { Masonry } from '$lib/components/site';
	import { headerTitle } from '$lib/stores';

	export let data;

	$: {
		$headerTitle = 'Bookmarks | ' + data.title;
	}
</script>

<div class="scrollable-area">
	<div class="content-wrapper mx-auto w-screen lg:max-w-[30rem] xl:max-w-[52rem]">
		<div class="content mb-24">
			<PageTitle title={data.title} />
			<div class="-mx-4">
				<Masonry items={data.bookmarks} gridGap={'1rem'} stretchFirst={false} reset>
					{#each data.bookmarks as bookmark (bookmark._id)}
						<a
							class="thumbnail-shadow relative flex aspect-auto min-w-0 cursor-pointer flex-col gap-4 overflow-hidden rounded-xl bg-white p-4 transition-colors duration-300 hover:bg-gray-100"
							href={bookmark.link}
							target="_blank"
						>
							<span class="aspect-[1200/630] overflow-hidden rounded-lg">
								<img
									alt="title"
									src={bookmark.cover || '/fallback.avif'}
									width={1200}
									height={630}
									class="aspect-[1200/630] animate-reveal rounded-lg border bg-cover bg-center bg-no-repeat object-cover"
									on:error={(e) => {
										const target = e.target;
										if (target instanceof HTMLImageElement) {
											target.onerror = null;
											target.src = '/fallback.avif';
										}
									}}
								/>
							</span>
							<div class="flex flex-col gap-1">
								<div class="flex gap-2">
									<div class="flex-1">
										<h2 class="line-clamp-4 text-lg leading-snug">{bookmark.title}</h2>
									</div>
								</div>
								<span class="line-clamp-4 inline-flex items-center gap-1 text-sm text-gray-500">
									<Link2Icon size={14} />
									<span class="line-clamp-6 text-sm">{bookmark.domain}</span>
								</span>
								<span class="line-clamp-6 text-sm">{bookmark.excerpt || bookmark.note}</span>
							</div>
						</a>
					{/each}
				</Masonry>
			</div>
		</div>
	</div>
</div>
