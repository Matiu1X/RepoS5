import Vue from 'vue'

Vue.component('news-card', () => import('./card/News.vue'));
Vue.component('team-card', () => import('./card/Team.vue'));
Vue.component('service-card', () => import('./card/Service.vue'));

Vue.component('nav-footer', () => import('./navigation/Footer.vue'));
Vue.component('nav-header', () => import('./navigation/Header.vue'));
Vue.component('navigation', () => import('./navigation/Navigation.vue'));

Vue.component('sign-in', () => import('./auth/signin.vue'));
Vue.component('sign-up', () => import('./auth/signup.vue'));
Vue.component('forgot-password', () => import('./auth/forgotpsw.vue'));
