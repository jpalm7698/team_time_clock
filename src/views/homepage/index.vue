<template>
    <div id="page-contents">
        <h1>Hi, User.</h1>
        <p>This is where the homepage goes!</p>

	<h2>API greeting should be below:</h2>
    <!--pass down flaskGreeting via props, event bus, vuex (preferred)-->
	<p>{{ greeting }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: mapState({
        greeting: state => state.greeting
    }),

   methods: {
       ...mapActions('greeting', {
           fetchGreeting: 'getFlaskGreeting'
       })
   },

   created: function() {
       this.fetchGreeting()
   }
}
</script>