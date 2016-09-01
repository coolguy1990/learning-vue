import Vue from 'vue';
import App from './components/App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Logout from './components/Logout.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

import auth from './auth';

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.token;

function requireAuth(route, redirect, next) {
	if (!auth.loggedIn()) {
		redirect({
			path: '/login',
			query: {
				redirect: route.fullPath
			}
		});
	} else {
		next();
	}
};

export const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/home',
			component: Home,
			beforeEnter: requireAuth,
		},
		{
			path: '/login',
			component: Login,
		},
		{
			path: '/logout',
			beforeEnter: function (request, redirect) {
				auth.logout();
				redirect({
					path: '/login',
					query: {
						redirect: redirect.fullPath
					}
				});
			}
		},
		{
			path: '*',
			redirect: '/login'
		}
	]
});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
