import axios from 'axios'

const url = "http://localhost:5000/log-entries/";

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
    currentLogs: state => state.all
}

// mutations
const mutations = {
    updateLogs (state, logs) {
        state.all = logs
    },
}

// actions
const actions = {
    async updateLogsAsync({ commit }) {
        // replace the local state's list of logs with the list retrieved from 
        // the server

        let response = await axios.get(url)

        if ( response.status === 200 )
            commit('updateLogs', response.data)
    },

    async addLogEntryAsync({ dispatch }, form) {
        // Send the log entry to the server (post request).
        // If OK, refresh the list of logs from the server.

        // axios stringifys json data automatically
        let response = await axios.post(url, form, {
            // define data as JSON for flask server;
            contentType: 'application/json; charset=utf-8',

            // response type from flask server
            dataType: 'json',
        }).catch((error) => {
            console.error('Failed to upload log entry to server.', error)
            alert('Failed to upload log entry to the server. Please try again.')
        })

        if (response.status === 200)
            dispatch('updateLogsAsync')

        return response
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}