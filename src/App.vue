<template>
	<div id="app">
		<service-page></service-page>
		<news-page></news-page>
		<team-page></team-page>
	</div>
</template>

<script>

import { NewsPage, ServicePage, TeamPage } from './pages/'

export default {
	name: 'App',
	components: {
		NewsPage,
		ServicePage,
		TeamPage,
	},
}
</script>

