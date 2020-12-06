<template>
	<div class="border-0 card text-center" style="width: 400px">
		<span class="badge bg-complementary"><a :href="service.rigth">{{ service.author }}</a></span>
		<div class="text-center">
			<img style="width: 70px; margin-top: 10px" :src="service.urlToImage" :alt="service.name">
		</div>
		<div class="card-body">
			<h3 class="color-secundary h-30 pb-5">{{ service.name }}</h3>
			<p class="card-text">{{ service.description }}</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'ServiceCard',
        props: {
		service: Object,
	}
    }
</script>

<style scoped>

</style>
