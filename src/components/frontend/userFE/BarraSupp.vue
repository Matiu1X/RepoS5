<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Web</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-title>Header</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Carousel</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group>
          <template v-slot:activator>
            <v-list-item-title>Usuarios</v-list-item-title>
          </template>
          <v-list-item>
            <v-list-item-title>Añadir usuario</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Eliminar usuario</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Configurar usuario</v-list-item-title>
          </v-list-item>
        </v-list-group>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-3"
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">Moubi System</span>
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <v-avatar class="mr-2" color="teal" size="45">
        MB
      </v-avatar>
      <v-btn icon>
        <v-icon @click="LogOut()">logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-slide-y-transition mode="out-in">
          <router-view/>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import swal from 'sweetalert';
export default {
  name: 'User',
  data (){
    return {
      drawer: true,
    }
  },
  methods: {
      async LogOut(){
          this.$router.push('/login')
          swal("Salida exitosa","","success")
          
      },
      async Irapag(sitio){
          this.$router.push(sitio)
      }
  }
};
</script>