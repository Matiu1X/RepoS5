<template>
	<div class="border-0 card text-center" style="width: 400px">
		<span class="badge bg-complementary">{{ member.scrum }}</span>
		<div class="text-center">
			<img class="photo" :src="member.image" :alt="member.nombre">
		</div>
		<div class="card-body">
			<h3 class="color-secundary h-30 pb-5">{{ member.nombre }}</h3>
			<p class="card-text">{{ member.descripcion }}</p>
			<p class="card-text"><small class="text-muted">{{ member.codigo }}</small></p>
			<p class="card-text">{{ member.rol }} </p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TeamCard',
	props: {
		member: Object 
	},
}
</script>

<style scoped>

</style>
