
const state = () => ({
    products: []
})

const getters = {
    all(state) {
        console.log('all')
    },
    total(state) {
        console.log('total')
    }
}

const mutations = {
    addToCart(state) {
        console.log('Commit from action add')
    },
    removeFromCart(state, { id }) {
        console.log('removeFromCart')
    },
}

const actions = {
    add({ commit }) {
        commit('addToCart')
    },
    remove({ commit }) {
        commit('removeFromCart')
    },
    update(state) {
        console.log('update')
    },
    count(state) {
        console.log('count')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}