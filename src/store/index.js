import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		searchTerm: '',
		cookieResults: [],
		editCookieForm: {
			domain: '',
			hostOnly: '',
			httpOnly: '',
			name: '',
			path: '',
			sameSite: '',
			secure: '',
			session: '',
			storeId: '',
			value: '',
		},
		editMode: 'ADD'
	},
	getters,
	mutations,
	actions,
});
