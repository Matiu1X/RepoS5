<template>
	<section id="team">
		<div class="d-flex flex-row justify-content-center my-5">
			<h2 class="fs-40">TEAM</h2>     
			<i class="ico-awesome ico-users color-secundary"></i>
		</div>
		<div class="d-flex p-2 bd-highlight d-flex justify-content-around">
			<team-card v-for="(member, index) in members" :key="`${index}-team`" :member="member"></team-card>
		</div> 

	</section>
</template>

<script>

import { TeamCard } from '../components'
import { team } from '../assets/data'

export default {
	name: 'PageTeam',
	components: {
		TeamCard,
	},
	data() {
		return {
			members: team,
		}
	}
}
</script>

<style scoped>

</style>
