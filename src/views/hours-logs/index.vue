<template>
  <b-container fluid>
    <b-row align-v="start">
      <b-col>
        <div class="float-left">
          <NewLogButtonGroup/>
        </div>
        <LogsTable/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NewLogButtonGroup from '../../components/NewLogButtonGroup.vue'
import LogsTable from '../../components/LogsTable.vue'

export default {
  components: { NewLogButtonGroup, LogsTable },
}
</script>
