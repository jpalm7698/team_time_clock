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
