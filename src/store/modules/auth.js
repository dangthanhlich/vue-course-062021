
const state = () => ({
    user: {}
})

const getters = {
   
}

const mutations = {
    userInfo(state, { user }) {
        state.user = user
    },
}

const actions = {
    login ({ commit }) {
        const user = {
            id: 1,
            name: 'Administrator',
            email: 'admin@gmail.com'
        }

        commit('userInfo', { user })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}