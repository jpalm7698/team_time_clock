// import db_conn from "../../../db_conn/db_conn";

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
    updateGreetingAsync({ commit }) {
        // some asynchronous operation here - fetch new greeting from flask server
        fetch(url, headers)
            .then(response => response.json())
            // commit mutation
            .then(data => commit('updateGreeting', data.msg))

            // catch block for handling network or cors errors
            .catch((error) => {
                console.error('error: ', error);
                commit('updateGreeting', 'Unable to retrieve greeting.');
            })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}