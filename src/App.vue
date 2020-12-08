<template>
	<div id="app">
		<navigation></navigation>
		<nav-header></nav-header>	
		<page-services></page-services>
		<page-news></page-news>
		<page-team></page-team>
		<nav-footer></nav-footer>
	</div>
</template>

<script>
import { PageServices, PageNews, PageTeam } from './pages'
import { Navigation, NavHeader, NavFooter } from './components'

export default {
	name: 'App',
	components: {	
		Navigation,
		NavHeader,
		NavFooter,
		PageServices,
		PageNews,
		PageTeam,
	},
}
</script>

