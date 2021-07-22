/**
 * Functions for interacting with Flask API
 */

// const url = "http://localhost:5000/log-entries/";
// const headers = { Accept: "application/json" };

const url = "http://localhost:5000/greeting/";
const headers = { Accept: "application/json" };

// API DEFINTION IS HERE
// TODO: MAKE API DEFINTION FOR FLASK GREETING
// Once api is defined and action is created, move on to log records
export default {

    async getGreeting(cb) {
        setTimeout(() =>
            cb(
                fetch(url, headers)
                .then(response => response.json())
            ), 100)
    },


    // param cb: callback
    // pass the response data to the callback function
    // async getLogs(cb) {
    //     setTimeout(() =>
    //         cb(
    //             await fetch(url, headers)
    //                 .then(response => response.json())
    //                 .then(json => this.$store.commit('updateFlaskGreeting', json))
    //         ), 100)
    // }
}