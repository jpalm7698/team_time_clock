<template>
  <div>
    <b-modal
      id="new-log-modal"
      title="Add New Entry"
      hide-header-close
      hide-footer
    >
      <div>
        <b-form id="new-log-form" @submit="onSubmit" @reset="onReset">

          <!-- Include state validation methods for the form groups below! -->
          <b-form-group
          id="start-datetime-formgroup"
          description="When did you start working?"
          label="Start Date and Time" 
          >
          <input type="date" id="startdate" name="startdate" v-model="form.date_start">

          <input type="time" id="starttime" name="starttime" step="60" v-model="form.time_start">
          </b-form-group>

          <b-form-group
          id="end-datetime-formgroup"
          description="When did you stop working?"
          label="End Date and Time" 
          >
          <input type="date" id="enddate" name="enddate" v-model="form.date_end">
          <input type="time" id="endtime" name="endtime" step="60" v-model="form.time_end">
          </b-form-group>

          <b-form-group
          id="description-group"
          description=""
          label="Description" 
          >
          <b-form-textarea
            id="description-textarea"
            v-model="form.description"
            placeholder="Enter any details about this session."
          ></b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: "NewLogModal",
  data: () => ({
    form: {
      user_id: 1, // hard-coded for now
      date_start: null,     
      date_end: null,     
      time_start: null,
      time_end: null,
      description: "",
    },
  }),

  methods: {

    ...mapActions('logs', ['addLogEntryAsync', 'updateLogsAsync']),

    hideModal() {
      this.$bvModal.hide("new-log-modal")
    },

    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
      this.addLogEntryAsync(this.form)

      // if successful
      this.hideModal()

      // if unsuccessful

    },

    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.user_id=1, // hard-coded for now
      this.form.date_start=null,     
      this.form.date_end=null,     
      this.form.time_start=null,
      this.form.time_end=null,
      this.form.description="",
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
