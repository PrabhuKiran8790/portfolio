<script>
	import { PostsList } from '$lib/components/site';

	export let data;
</script>

<div class="lg:hidden">
	<PostsList posts={data.posts} seriesPosts={data.seriesPosts} />
</div>
