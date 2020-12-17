import { mapMutations } from 'vuex';
import { localstorageGetName } from '../helpers';

const userStatus = {
	
	computed: {
		...mapGetters({
			loginUser: 'doneUser'
		})
	},
	methods: function () {
		...mapMutations({
			loginStore: 'signin'
		}),
	},
	mounted: function () {
		var name = localstorageGetName();
		if(name != undefined && name) {
			this.loginStore({ user: name })
		}
	}
}

export {
	userStatus
}
