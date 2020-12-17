import { localstorageGet } from '../helpers'

const auth = (to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if(localstorageGet()) {
			next();
		} else {
			next({ name:'Home' });
		}
	}
	else if(to.name === 'Login') {
		if(localstorageGet()) {
			next({ name:'Admin' });
		} else {
			next();
		}
	}
	return next();
}

export {
	auth
}

