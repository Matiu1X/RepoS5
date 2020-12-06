<template>
<div class="border-0 card text-center" style="width: 400px">
	<div class="text-center">
		<img style="width: 70px; margin-top: 10px" :src="ServiceObj.urlToImage" :alt="ServiceObj.name">
	</div>
	<div class="card-body">
		<h3 style="color: #49A078; height: 67.2px;">{{ ServiceObj.name }}</h3>
		<p class="card-text">{{ ServiceObj.description }}</p>
		{{ ServiceObj.urlToImage }}
	</div>
</div>
</template>

<script>
    export default {
        name: "ServiceCard",
        props: {
		ServiceObj: Object,
	}
    }
</script>

<style scoped>

</style>
