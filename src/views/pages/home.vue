<template>
	<section id="home">
		<nav-header></nav-header>	
		<section-services></section-services>
		<section-news></section-news>
		<section-team></section-team>
	</section>
</template>

<script>
import { SectionServices, SectionNews, SectionTeam } from '../sections'

export default {
	name: 'PageHome',
	components: {
		SectionServices,
		SectionNews,
		SectionTeam,
	},
}
</script>

<style scoped>

</style>
