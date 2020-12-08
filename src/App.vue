<template>
	<div id="app">
		<componente-nav></componente-nav>
		<componente-header></componente-header>

    <section id="services">
        <div class="text-center">
          <h2 class="card-title" style="color: #49A078">OUR SERVICES</h2>	
          <i class="ico-awesome ico-cogs color-secundary"></i>
        </div>
        <div>	
            <div class="d-flex p-2 bd-highlight d-flex justify-content-around ">  
              <services-card v-for="service in servicios" :key="service.servtitulo" :services="service"></services-card>
            </div>
        </div>
    </section>
    
		<!--<service-page></service-page>-->
		<news-page></news-page>
		<!--<team-page></team-page>-->
		
		<div class="row justify-content-center mb-5">
			<h1 class="text-success" style="margin-top:3">Equipo <i class=" icon-awesome icon-users"></i></h1>
		</div>
		<div class="container-fluid">
			<div class="row justify-content-center mb-5">
				<div class="col mt-5" v-for="(item, index) of equipo" :key="index" >
					<team-card v-bind:member="item"></team-card>
				</div>
			</div>
		</div>
		
		<componente-footer></componente-footer>
	</div>
</template>

<script>
import ServicesCard from './components/ServicesCard.vue'
import TeamCard from './components/TeamCard.vue'
import TeamJSON from './assets/Team.js'
import services from './assets/Services.js';

import ComponenteFooter from './components/ComponenteFooter.vue'
import ComponenteNav from './components/ComponenteNav.vue'
import ComponenteHeader from './components/ComponenteHeader.vue'

import { NewsPage /*, ServicePage, TeamPage*/ } from './pages/'

export default {
	name: 'App',
	components: {
		TeamCard,
		ComponenteFooter,
		ComponenteNav,
		ComponenteHeader,
		ServicesCard,
		NewsPage,
		/*ServicePage,
		TeamPage,*/
	},
	data(){
		return {
			equipo: TeamJSON,
      servicios: services
		}
	}
}
</script>

