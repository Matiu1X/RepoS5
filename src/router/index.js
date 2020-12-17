import { PageHome, PageAbout, PageAdmin, PageLogin } from '../views';
import { auth } from '../middleware';

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PageHome, 
	},
	{
		path: '/login',
		name: 'Login',
		component: PageLogin,
	},

	{
		path: '/about',
		name: 'About',
		component: PageAbout,
	},
	{
		path: '/admin',
		name: 'Admin',
		component: PageAdmin, 
		meta: {
			requiresAuth: true
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	auth(to, from, next);
});

export default router

