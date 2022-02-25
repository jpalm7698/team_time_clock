// Create Firebase App Object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirebaseConfig } from "./firebase-config";
import { getAuth, connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
const firebaseConfig = getFirebaseConfig();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:4400");

if (app && analytics && auth) {
  console.log('Google Firebase Services were setup successfully.');
}

import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import TeamHoursLogger from './TeamHoursLogger.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

// Import required components for routing
import Homepage from './views/homepage/index.vue'
import Dashboard from './views/dashboard/index.vue'
import LogsTable from './views/hours-logs/index.vue'

// Define Routes
const routes = [
  { path: '/', component: Homepage },
  { path: '/dashboard', component: Dashboard },
  { path: '/logs', component: LogsTable },
]

// Create routes instance, passing the 'routes' option
const router = new VueRouter({
  routes
})

// Create and mount the root instance
new Vue({
  router,
  store,
  render: h => h(TeamHoursLogger),
}).$mount('#app')
