import api from "../plugins/api.js"

const state = {
    list: [],
}

const getters = {
}

const actions = {
    // eslint-disable-next-line no-unused-vars
    list({dispatch, commit, getters, rootGetters}, payload) {
        let url = "troia/customer/?search=" + payload.search_term+ `&field=${payload.field}`
        return api.get(url)
            .then(function (response) {
                commit("list", response.data)
            })
    }
}

const mutations = {
    list(state, payload) {
        state.list = payload
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
