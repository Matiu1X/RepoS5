<template>
<div>
	<div class="card" style="width: 18rem;">
		<img :src="member.image" alt="mateo" style="width: 18rem;height: 18rem;" >
		<div class="card-body">
			<h5 class="card-title" style="color: green;">{{member.nombre}}</h5>
			<dl>
				<dd class="card-text">{{member.codigo}}</dd>
				<!-- <dd class="card-text"><i class="icon-awesome icon-university"></i>{{member.caracteristicas.universidad}}</dd>
				<dd class="card-text"><i class="icon-awesome icon-game"></i>{{member.caracteristicas.hobbie}}</dd>
				<dd class="card-text"><i class="icon-awesome icon-age"></i> {{member.caracteristicas.edad}}</dd>
				<dd class="card-text"><i class="icon-awesome icon-email"></i>{{member.caracteristicas.correo}}</dd> -->
				<dd class="card-text"><i class="icon-awesome icon-git"></i>{{member.rol}}</dd>
				<dd class="card-text">{{member.descripcion}}</dd>
			</dl>
		</div>
	</div>
</div>
<!--
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
-->
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
