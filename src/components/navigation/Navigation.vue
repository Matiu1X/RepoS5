<template>
	<b-navbar toggleable="lg" type="light" class="navbar">
		<router-link class="navbar-brand color-secundary" to="/">
			<img src="../../static/icon/icon_picto.svg" height="30" alt="moubi"> MÖBI
		</router-link>
		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item href="#services">Services</b-nav-item>
				<b-nav-item href="#news">News</b-nav-item>
				<b-nav-item href="#team">Team</b-nav-item>
			</b-navbar-nav>
			
			<b-navbar-nav class="ml-auto">

				<b-nav-form>
					<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
				</b-nav-form>

				<b-dropdown id="dropdown-right" :text="loginUser" v-show="loginUser" right variant="primary" class="m-2">
					<b-dropdown-item @click.prevent="Logout">Logout</b-dropdown-item>
				</b-dropdown>
			
				<b-nav-item v-show="!loginUser">
					<router-link to="/login">
						<i class="ico-awesome ico-users color-secundary" style="font-size: 15px;"></i>
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
