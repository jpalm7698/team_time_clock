import db_conn from "../../../db_conn/db_conn";

// const url = "http://localhost:5000/greeting/"
// const headers = { Accept: "application/json" };

const state = () => ({
    flaskGreeting: ''
})

//   created: function(){
//   // var self = this;
// 	fetch("http://localhost:5000/greeting/")
//   .then(response => response.json())
//   .then(json => this.$store.commit('updateFlaskGreeting', json.msg));
// 	// const gObject = gResponse.json();
// 	// console.log('Response: ',gResponse);
// 	// this.flaskGreeting = gObject.greeting;
//   },

const getters = {
    mockGreeting: () => 'Mock Greeting. Hello World!',
    greeting: state => state.flaskGreeting
}

const mutations = {
    updateFlaskGreeting: (state, newGreeting) => state.flaskGreeting = newGreeting,
    // updateLogEntries: (state, newLogEntries) => state.logEntries = newLogEntries,
}

// set of actions are based on vuex.vuejs.org guide
const actions = {

  // TODO: Define action that access API interface in db_conn.js
    getFlaskGreeting({commit}) {
        db_conn.getGreeting(response => {
            commit('updateFlaskGreeting', response)
        }
        )
    }







  // Old - Don't use
  // // Fetch API already returns a promise. What to do from here?
  // async fetchFlaskGreeting({ commit }) {
  //     setTimeout(() => {
  //       await fetch(url, headers).then(response => response.json()).then(
  //         json => commit('updateFlaskGreeting', json))
  //     }, 1000)
  // },

  // // Don't use
  // // async fetchFlaskGreeting({ commit }) {
  // //   setTimeout(() =>
  // //     cb(
  // //       await fetch(url, headers)
  // //         .then(response => response.json())
  // //         .then(json => this.$store.commit('updateFlaskGreeting', json))
  // //     ), 100)
  // // }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}