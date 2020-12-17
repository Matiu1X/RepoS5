<template>
	<div class="w-10" id="signin-template">
		<div class="d-flex flex-row justify-content-center my-1">
			<h2 class="fs-40">LOGIN</h2>     
		</div>

		<form class="d-flex flex-column">
			<div class="form-group ">
				<label for="moubi-email-input">Email</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="login.email"
						type="email"
						class="form-control"
						id="moubi-email-input">
				</div>
				<small id="emailHelp" class="form-text text-muted text-center">Por su seguridad nunca comparta sus datos de ingreso.</small>
			</div>
			<div class="form-group">
				<label for="moubi-password-input">Password</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="login.password"
						type="password"
						class="form-control"
						id="moubi-password-input">
				</div>
			</div>
			<div class="container-fluid mb-3 d-flex justify-content-center ">
				<button @click.prevent="LoginAccess" type="submit" class="btn btn-success px-5 py-1">SingIn</button>
				<router-link class="mx-5" to="/signup">signup?</router-link>
			</div>
		</form>
	</div>
</template>

<script>
import swal from 'sweetalert';
import { localstorageSet } from '../../helpers';
import { mapMutations  } from 'vuex'

export default {
	name: 'SignIn',
	data() {
		return {
			login: {
				email:'',
				password: ''
			}
		}
	},
	methods: {
		...mapMutations({ loginStore: 'signin' }),
		getApi: async function (url = '', payload = null) {
			const res = await fetch(url, payload);
			return res ? res.json() : {};
		},
		LoginAccess: async function () {
			if(this.login.email && this.login.password) {
				
				let request = {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(this.login)
				}

				try {
					let response = await this.getApi('http://localhost:3000/api/auth/signin', request); 		
					if (response.accessToken){
						localstorageSet(response);
						this.loginStore(response);
						swal('Allow', 'Welcome', 'success');
						this.$router.push('/admin');
					} else {
						swal('Deny', 'Password or email is wrong', 'error');
					}
				} catch (e) {
					swal('Deny', 'Information is wrong', 'error');
				}
			}
		}
	}
}
</script>

<style scoped>

</style>

