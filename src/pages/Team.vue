<template>
	<section id="team">
		<div class="d-flex flex-row justify-content-center my-5">
			<h2 class="fs-40">TEAM</h2>     
			<i class="ico-awesome ico-users color-secundary"></i>
		</div>
		<div class="d-flex p-2 bd-highlight d-flex justify-content-around">
			<team-card v-for="(MemberObj, index) in members" :key="`${index}-team`" :member="MemberObj"></team-card>
		</div> 

	</section>
</template>

<script>
import { TeamCard } from '../components'
import { team } from '../assets'
export default {
	name: 'TeamPage',
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
