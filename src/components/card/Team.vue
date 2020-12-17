<template>
	<div class="border-0 card text-center mw-30">
		<span class="badge bg-complementary color-primary"> {{  member.scrum  }} </span>
		<div class="text-center">
			<img class="rounded-circle" :src="member.image" :alt="member.nombre" height="200">
		</div>
		<div class="card-body">
			<h3 class="color-secundary"> {{  member.nombre  }} </h3>
			<h4 class="color-dark"> {{ member.rol }} </h4>
<ul class="align-left">
	<dt v-if="member.caracteristicas.universidad"><i class="ico-awesome px-5 ico-university ico-1 color-complementary"></i>{{ member.caracteristicas.universidad }}</dt>
	<dt v-if="member.caracteristicas.hobbie"><i class="ico-awesome px-5 ico-game ico-1 color-complementary"></i>{{ member.caracteristicas.hobbie }}</dt>
	<dt v-if="member.caracteristicas.edad"><i class="ico-awesome px-5 ico-age ico-1 color-complementary"></i>{{  member.caracteristicas.edad }}</dt>
	<dt v-if="member.caracteristicas.correo"><i class="ico-awesome px-5 ico-email ico-1 color-complementary"></i>{{ member.caracteristicas.correo }}</dt>
	<dt><i class="ico-dev ico-git px-5 ico-1 color-complementary"></i>{{ member.codigo }}</dt>
</ul>
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
