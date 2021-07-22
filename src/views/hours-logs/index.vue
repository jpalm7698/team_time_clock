<template>
  <div>
    <b-table striped hover :items="currentLogs" :fields="fields"></b-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'LogsTable',
    computed: mapGetters([
      'currentLogs'
    ]),

    data: () => ({
        // Note `isActive` is left out and will not appear in the rendered table

        /*
        User Logged: String
        Date: Date
        Description: String
        Time Start: Time
        Time End: Time
        Time of Entry: Current Time Stamp
        Tags: Array of Strings
        */

        fields: ['id', 'user_id', 'workday', 'description', 'time_created', 'time_updated'],
      }),
    }
</script>
