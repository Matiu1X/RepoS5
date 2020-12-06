<template>
  <div id="app">
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
  </div>
</template>
  
  

<script>
import TeamCard from './components/TeamCard.vue'
import TeamJSON from './assets/Team.js'
export default {
  name: 'App',
  components:{
    TeamCard
  },
  data(){
    return{
      equipo: TeamJSON
    }
    
  }
}
</script>

