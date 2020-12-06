<template>
	<div class="card border-0 my-2" style="width: 20rem;">
		<a :href="news.url">
			<img class="card-img-top" :src="news.urlToImage" alt="Card image cap">
		</a>
		<div class="card-body">
			<span class="badge my-2 bg-primary" style="width: 10rem;">{{ news.author }}</span>
			<h5 class="card-tittle color-secundary">{{ news.title }}</h5>
			<p class="card-text">{{ news.description }}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'NewsCard',
        props: {
		news: Object,
	}
    }
</script>

<style scoped>

</style>
