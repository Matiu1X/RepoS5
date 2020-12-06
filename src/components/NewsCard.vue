<template>
<div class="card border-0 my-2" style="width: 20rem;">
	<a :href="NewObj.url">
		<img class="card-img-top" :src="NewObj.urlToImage" alt="Card image cap">
	</a>
	<div class="card-body">
		<span class="badge my-2 bg-primary" style="width: 10rem;">{{ NewObj.author }}</span>
		<h5 class="card-tittle color-secundary">{{ NewObj.title }}</h5>
		<p class="card-text">{{ NewObj.description }}</p>
	</div>
</div>
</template>

<script>
    export default {
        name: "NewsCard",
        props: {
		NewObj: Object,
	}
    }
</script>

<style scoped>

</style>
