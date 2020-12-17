import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: '',
	},
	mutations: {
		signin (state, payload) {
			state.user = payload.user;
		},
		logout (state) {
			state.user = '';
		}
	},
	getters: {
		doneUser: state => {
			return state.user ? state.user : null;
		},
	},
	actions: {
	},
	modules: {
	}
})
