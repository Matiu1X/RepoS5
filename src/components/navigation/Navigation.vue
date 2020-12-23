<template>
	<b-navbar toggleable="lg" type="light" class="navbar">
		<router-link class="navbar-brand color-secundary" to="/" style="color:black;">
			<h3 style="color:black;">Interact-Data</h3>
		</router-link>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<li class="nav-item">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/services">Services</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/info">Info</router-link>
				</li>
				<li class="nav-item" v-show="loginUser">
					<router-link class="nav-link" to="/admin">Admin</router-link>
				</li>
			</b-navbar-nav>
			
			<b-navbar-nav class="ml-auto">

				<b-dropdown id="dropdown-right" :text="loginUser" v-show="loginUser" right variant="primary" class="m-2">
					<b-dropdown-item @click.prevent="Logout">Logout</b-dropdown-item>
				</b-dropdown>
			
				<b-nav-item v-show="!loginUser">
					<router-link to="/login">
						<v-btn color="#92D1C3" elevation="2" outlined rounded>Login</v-btn>
					</router-link>
				</b-nav-item>	
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
import { localstorageDel, localstorageGetName } from '../../helpers';
import { mapMutations, mapGetters } from 'vuex';

export default {
	name: 'Navigation',
	computed: {
		...mapGetters({
			loginUser: 'doneUser'
		})
	},
	methods: {
		...mapMutations({
			loginStore: 'signin',
			logoutStore: 'logout',
		}),
		Logout: function () {
			localstorageDel();
			this.logoutStore();
			this.$router.push('/');
		}
	},
	mounted: function () {
		var name = localstorageGetName();
		if(name != undefined && name) {
			this.loginStore({ user: name })
		}
	},
}
</script>

<style scoped>
.navbar {
	background: white;
}
.navbar * {
	background: white !important;
}
</style>
