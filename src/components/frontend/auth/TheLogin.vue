<template>
    <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Correo Electrónico</label>
            <div class="container-sm" style="width: 22rem;">
                <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">    
            </div>
            <small id="emailHelp" class="form-text text-muted">Por su seguridad nunca comparta sus datos de ingreso.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <div class="container-sm" style="width: 22rem;">
              <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
            </div>
          </div>
          <div class="container-fluid mb-3">
            <button @click.prevent="loginRapido" type="submit" class="btn btn-success">Ingresar</button>
          </div>
        </form>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default {
    name: 'TheLogin',
    data(){
      return{
        login:{
          email:'',
          password: ''
        }
      }
    },
    methods:{
      async loginUser(){
          try{
            let response = await this.$http.post('/api/usuario/login', this.login);
            console.log(response.data);
            let token = response.data.tokenReturn;
            let user = response.data.user;
            localStorage.setItem('jwt', token);
            localStorage.setItem('user', JSON.stringify(user));
            if(token){
              this.$router.push('/home');
              swal("Acceso Concedido", "Bienvenido a Moubi", "success");
            }
          }
          catch{
            swal("Acceso Denegado", "Los datos ingresados no son correctos", "error");
          }
        },
      async loginRapido(){
        this.$router.push('/user')
        swal("Acceso Concedido", "Bienvenido a Moubi, Loggeo agil","success")
      }  
      }
    }

</script>

<style scoped>

</style>