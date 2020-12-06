<template>
	<div id="app">
		<section id="services">
			<div class="d-flex flex-row justify-content-center">
				<h2 class="fs-40">OUR SERVICES</h2>	
				<i class="ico-awesome ico-cogs color-secundary"></i>
			</div>

			<div class="d-flex p-2 bd-highlight d-flex justify-content-around">
				<service-card v-for="(ServiceObj, index) in services" :key="`${index}-service`" :ServiceObj="ServiceObj"></service-card>
			</div> 
		</section>
		
		<section id="news">
			<div class="d-flex flex-row justify-content-center">
				<h2 class="fs-40">NEWS</h2>     
				<i class="ico-awesome ico-web color-secundary"></i>
			</div>

			<div class="d-flex p-2 bd-highlight flex-wrap justify-content-around">
				<news-card v-for="(NewObj, index) in news" :key="`${index}-new`" :NewObj="NewObj"></news-card>
			</div>
		</section>

		<section id="team">
			<div class="d-flex flex-row justify-content-center">
				<h2 class="fs-40">TEAM</h2>     
				<i class="ico-awesome ico-users color-secundary"></i>
			</div>

		</section>
	</div>
</template>

<script>

import { NewsCard, ServiceCard } from './components/'
import { services } from './assets/'

export default {
	name: 'App',
	components: {
		NewsCard,
		ServiceCard,
	},
	data() {
		return {
			news: null,
			services: services,
		}
	},
	methods: {
		getApi: async function (url = '') {
			const res = await fetch(url);
			return res.json();
		}
	},
	mounted() {
		this.getApi('https://newsapi.org/v2/top-headlines?country=us&apiKey=cf276499274441d0a2fbd2c94b4029c9')
		.then(res => {
			this.news = res.articles;
		})
	}
}
</script>

