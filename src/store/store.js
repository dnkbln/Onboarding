import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        title: '',
        subtitle: ''
    },
    mutations: {
        changeTitle(state, title) {
            state.title = title
        }
    },
    getters: {
        title: state => state.title
    }
})