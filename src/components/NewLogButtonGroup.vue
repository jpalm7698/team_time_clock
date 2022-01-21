<template>
    <div>
        <b-button variant="primary" v-b-modal.new-log-modal>Add</b-button>
        <b-button-group>
        <b-button variant="warning">Edit</b-button>
        <b-button variant="danger">Delete</b-button>
        </b-button-group>

        <NewLogModal/>
    </div>
</template>

<script>
import NewLogModal from './NewLogModal.vue'

export default {
    name:'NewLogButtonGroup',
    components: { NewLogModal },
}
</script>
