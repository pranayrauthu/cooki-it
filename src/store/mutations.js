import * as types from './mutation-types';

export default {
  [types.UPDATE_SEARCH_TERM](state, payload) {
    state.searchTerm = payload;
  },
  [types.UPDATE_COOKIE_RESULTS](state, payload) {
  	state.cookieResults = payload;
  }
};
