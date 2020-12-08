<template>
    <div class="border-0 card text-center" style="width: 400px;"> 
        <div class="text-center">
            <img style="width: 70px; margin-top: 10px" :src="services.servimage">
        </div>
        
        <div class="card-body">
            <h3 style="color: #49A078; height: 67.2px;">{{services.servtitulo}}</h3>
            <p class="card-text">{{services.servdescrip}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ServiceCard',
    props: {services: Object},
}
</script>

<style>

</style>
