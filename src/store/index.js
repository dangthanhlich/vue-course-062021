import Vuex from 'vuex'
import cart from './modules/cart'
import auth from './modules/auth'

export default new Vuex.Store({
    modules: {
        cart,
        auth
    },
    strict: true,
})
