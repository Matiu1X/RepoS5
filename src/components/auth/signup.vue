<template>
	<div id="singup-template" class="w-10">
		<div class="d-flex flex-row justify-content-center my-1">
			<h2 class="fs-40">SIGNUP</h2> 
		</div>

		<form class="d-flex flex-column">
			<div class="form-group">
				<label for="moubi-fullname-input">Full Name</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="signup.fullname"
						type="text"
						class="form-control"
						id="moubi-fullname-input">
				</div>
			</div>
			
			<div class="form-group">
				<label for="moubi-name-input">Nick name</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="signup.name"
						type="text"
						class="form-control"
						id="moubi-name-input">
				</div>
			</div>

			<div class="form-group">
				<label for="moubi-email-input">Email</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="signup.email"
						type="email"
						class="form-control"
						id="moubi-email-input">
				</div>
			</div>

			<div class="form-group">
				<label for="moubi-password-input">Password</label>
				<div class="container-sm" style="width: 22rem;">
					<input v-model="signup.password"
						type="password"
						class="form-control"
						id="moubi-password-input">
				</div>
			</div>

			<div class="container-fluid mb-3 d-flex justify-content-center ">
				<button @click.prevent="SignupAccess"
					type="submit"
					class="btn btn-success px-5 py-1">SignUp</button>
				<router-link class="mx-5" to="/login">sign in?</router-link>
			</div>
		</form>
	</div>
</template>

<script>
import swal from 'sweetalert';

export default {
	name: 'SignUp',
	data() {
		return {
			signup: {
				name: '',
				email:'',
				password: ''
			}
		}
	},

	methods: {
		getApi: async function (url = '', payload = null) {
			const res = await fetch(url, payload);
			return res ? res.json() : {};
		},
		SignupAccess: async function() {
			if(this.signup.email && this.signup.password && this.signup.name) {
				let request = {
					method: 'POST',
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(this.signup)
				}
				try {
					let response = await this.getApi('http://localhost:3000/api/auth/signup', request);
					if (response) {
						swal('Allow', 'Welcome', 'success');
						this.$router.push('/');
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
