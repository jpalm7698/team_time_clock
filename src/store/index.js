import Vue from 'vue'
import Vuex from 'vuex'
import greeting from './modules/greeting'
import logs from './modules/logs'
import users from './modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        greeting,
        logs,
        users
    }
})