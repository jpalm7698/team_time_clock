<template>
    <div class='root'>
        <p>{{ greeting }}</p>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: "Greeting",
    // each module is namespaced; we must provide a namespace arg
    // see mapState, mapAction APIs
    computed: mapState('greeting', ['greeting']),
    methods: {
        ...mapActions('greeting', ['updateGreetingAsync']) 
        },
    created: function() {
            this.updateGreetingAsync();
        }
}
</script>
