import axios from 'axios'
const url = "http://localhost:5000/greeting/"
const headers = { Accept: "application/json" };

const state = () => ({
    greeting: ''
})

const getters = {
    mockGreeting: () => 'Mock Greeting. Hello World!',
    greeting: state => state.flaskGreeting
}

const mutations = {
    updateGreeting(state, newGreeting) {
        state.greeting = newGreeting
    }
}

// set of actions are based on vuex.vuejs.org guide
const actions = {
    async updateGreetingAsync({ commit }) {

        try {
          let response = await axios.get(url);
          if (response.status === 200)
            commit("updateGreeting", response.data.msg);
        } catch (error) {
          console.error("Error while retrieving greeting", error);
          commit("updateGreeting", "Unable to retrieve greeting.");
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}