// import db_conn from "../../../db_conn/db_conn"

// initial state
const state = () => ({
    all: [
        {
            description: "Here's the first log!",
            id: 1,
            time_created: "2021-07-05T11:51:42",
            time_updated: "2021-07-05T11:51:53",
            user_id: 1,
            workday: "2021-03-10"
        }
    ]
})

// getters
const getters = {
    currentLogs: state => state.all,
}

// actions
// const actions = {
//     getAllLogs ({ commit }) {
//         db_conn.getLogs(logs => {
//             commit('setLogs', logs)
//         })
//     },
// }

// mutations
const mutations = {
    setLogs (state, logs) {
        state.all = logs
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}