export default {
    namespaced: true,
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuth: localStorage.getItem('isAuth') === 'true' || false
    }),
    mutations: {
        setUser(state, user) {
            state.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        setAuth(state, isAuth) {
            state.isAuth = isAuth
            localStorage.setItem('isAuth', isAuth)
        }
    },
    actions: {
        login({ commit }, payload) {
            console.log("Logging in with payload:", payload)
            commit('setUser', payload)
            commit('setAuth', true)
        },
        logout({ commit }) {
            commit('setUser', null)
            commit('setAuth', false)
            localStorage.removeItem('user')
            localStorage.removeItem('isAuth')
        }
    },
    getters: {
        isLoggedIn: (state) => state.isAuth
    }
}
