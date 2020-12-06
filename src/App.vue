<template>
  <div id="app">
    <ComponenteNav />
    <ComponenteHeader />
    
    <services-card></services-card>
    
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
    
    <ComponenteFooter />
  </div>
</template>

<script>
import ServicesCard from './components/ServicesCard.vue'
import TeamCard from './components/TeamCard.vue'
import TeamJSON from './assets/Team.js'
import ComponenteFooter from './components/ComponenteFooter.vue'
import ComponenteNav from './components/ComponenteNav.vue'
import ComponenteHeader from './components/ComponenteHeader.vue'

export default {
  name: 'App',

  components: {
    TeamCard
    ComponenteFooter,
    ComponenteNav,
    ComponenteHeader,
    ServicesCard,
  },
  data(){
    return {
      equipo: TeamJSON
    }
  }
}
</script>

