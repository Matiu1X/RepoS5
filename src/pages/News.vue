<template>
	<section id="news">
		<div class="d-flex flex-row justify-content-center my-5">
			<h2 class="fs-40">NEWS</h2>     
			<i class="ico-awesome ico-web color-secundary"></i>
		</div>

		<div class="d-flex p-2 bd-highlight flex-wrap justify-content-around">
			<news-card v-for="(newo, index) in news" :key="`${index}-new`" :news="newo"></news-card>
		</div>

	</section>
</template>

<script>
import { NewsCard } from '../components'

export default {
	name: 'PageNews',
	components: {
		NewsCard
	},
	data() {
		return {
			news: null,
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

<style scoped>

</style>
