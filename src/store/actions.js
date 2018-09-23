import * as types from './mutation-types';

export const updateSearchTerm = ({ commit }, payload) => {
    commit(types.UPDATE_SEARCH_TERM, payload);
    chrome.cookies.getAll({}, function(cookies) {
        const cookieResults = (cookies || []).filter(cookie => {
            const { name, domain } = cookie;
            return (name.includes(payload) || domain.includes(payload));
        });
        commit(types.UPDATE_COOKIE_RESULTS, cookieResults);
    })
};