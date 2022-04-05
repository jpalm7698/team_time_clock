<template>
  <div>
    <b-table striped hover responsive :items="all" :fields="fields"></b-table>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'LogsTable',
    computed: mapState('logs', ['all']),
    methods: {
      ...mapActions('logs', ['updateLogsAsync'])
    },
    created: function() {
      this.updateLogsAsync();
    },

    data: () => ({
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['id', 'user_id', 'description', 'date_start', 'time_start', 'date_end', 'time_end'],
      }),
    }
</script>
