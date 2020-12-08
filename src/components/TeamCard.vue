<template>
	<!--
	<div>
		<div class="card" style="width: 18rem;">
			<img :src="member.image" alt="mateo" style="width: 18rem;height: 18rem;" >
			<div class="card-body">
				<h5 class="card-title" style="color: green;">{{ member.nombre }} </h5>
				<dl>
					<dd class="card-text">{{ member.codigo }} </dd>
					<dd class="card-text"><i class="icon-awesome icon-university"></i>{{ member.caracteristicas.universidad }} </dd>
					<dd class="card-text"><i class="icon-awesome icon-game"></i>{{ member.caracteristicas.hobbie }} </dd>
					<dd class="card-text"><i class="icon-awesome icon-age"></i> {{ member.caracteristicas.edad }} </dd>
					<dd class="card-text"><i class="icon-awesome icon-email"></i>{{ member.caracteristicas.correo }} </dd>
					<dd class="card-text"><i class="icon-awesome icon-git"></i>{{ member.rol }} </dd>
					<dd class="card-text">{{ member.descripcion }} </dd>
				</dl>
			</div>
		</div>
	</div>
	-->

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
