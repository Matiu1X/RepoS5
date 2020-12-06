<template>
  <div id="app">
     <div class="text-center">
          <h2 class="card-title" style="color: #49A078">OUR SERVICES</h2>	
          <i class="ico-awesome ico-cogs color-secundary"></i>
      </div>
    <section id="services">
        <div>	
            <div class="d-flex p-2 bd-highlight d-flex justify-content-around ">  
              <services-card v-for="service in servicios" :key="service.servtitulo" :services="service"></services-card>
            </div>
        </div>
    </section>
  </div>
  
</template>

<script>
import ServicesCard from './components/ServicesCard.vue';
import services from './assets/Services.js';

export default {
  components: { ServicesCard },
  name: 'App',
  data(){
    return {
      servicios: services}
  }
}
</script>

