<template>
<div>
  <div class="card" style="width: 18rem;">
      <img :src="member.image" alt="mateo" style="width: 18rem;height: 18rem;" >
    <div class="card-body">
      <h5 class="card-title" style="color: green;">{{member.nombre}}</h5>
      <dl>
          <dd class="card-text">{{member.codigo}}</dd>
          <!-- <dd class="card-text"><i class="icon-awesome icon-university"></i>{{member.caracteristicas.universidad}}</dd>
          <dd class="card-text"><i class="icon-awesome icon-game"></i>{{member.caracteristicas.hobbie}}</dd>
          <dd class="card-text"><i class="icon-awesome icon-age"></i> {{member.caracteristicas.edad}}</dd>
          <dd class="card-text"><i class="icon-awesome icon-email"></i>{{member.caracteristicas.correo}}</dd> -->
          <dd class="card-text"><i class="icon-awesome icon-git"></i>{{member.rol}}</dd>
          <dd class="card-text">{{member.descripcion}}</dd>
      </dl>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>

</style>
