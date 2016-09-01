import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: {},
		token: '',
		authenticated: false,
	},
	mutations: {
		GET_USER(state, user) {

		},
		SET_USER(state, user) {

		},
		REMOVE_USER(state) {
			state.user = {};
		},
		UPDATE_USER(state, user) {

		},
		GET_TOKEN(state, token) {

		},
		SET_TOKEN(state, token) {

		},
		REMOVE_TOKEN(state) {
			state.token = '';
		},
	},
	actions: {
		getUser({commit}, user) {
			commit('GET_USER', user);
		}
	},
	getters: {
		getUserObject: state => state.user,
		getToken: state => state.token
	}
});
