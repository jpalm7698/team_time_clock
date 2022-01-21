<template>
  <b-container fluid>
    <b-row align-v="start">
      <b-col cols="1">
        <NewLogButton/>
      </b-col>
      <b-col>
        <LogsTable/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewLogButton from '../../components/NewLogButton.vue'
import LogsTable from '../../components/LogsTable.vue'

export default {
  components: { NewLogButton, LogsTable },
}
</script>
