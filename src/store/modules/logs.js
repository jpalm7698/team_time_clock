// import db_conn from "../../../db_conn/db_conn"

const url = "http://localhost:5000/log-entries/"
const headers = { Accept: "application/json" };

// initial state
const state = () => ({
    all: [
        {
            description: "Example Log",
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

// mutations
const mutations = {
    updateLogs (state, logs) {
        state.all = logs
    },
}

// actions
const actions = {
    updateLogsAsync({ commit }) {
        fetch(url, headers)
            .then(response => response.json())
            .then(data => commit('updateLogs', data))

            .catch((error) => {
                console.error('error retrieving log entries: ', error);
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