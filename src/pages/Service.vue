<template>
	<section id="service">
		<div class="d-flex flex-row justify-content-center my-5">
			<h2 class="fs-40">OUR SERVICES</h2>	
			<i class="ico-awesome ico-cogs color-secundary"></i>
		</div>
		<div class="d-flex p-2 bd-highlight d-flex justify-content-around">
			<service-card v-for="(ServiceObj, index) in services" :key="`${index}-service`" :service="ServiceObj"></service-card>
		</div> 
	</section>
</template>

<script>
import { ServiceCard } from '../components'
import { services } from '../assets'

export default {
	name: 'ServicePage',
	components: {
		ServiceCard
	},
	data() {
		return {
			services: services,
		}
	},
}
</script>

<style scoped>

</style>
