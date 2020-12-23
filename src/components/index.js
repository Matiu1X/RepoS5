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

Vue.component('body-home', () => import('./frontend/main/BodyHome.vue'));
Vue.component('pie', () => import('./frontend/main/Pie.vue'));
Vue.component('carousel', () => import('./frontend/main/Carousel.vue'));
