<template>
    <div>
        <b-button variant="primary" v-b-modal.new-log-modal>Add New Entry</b-button>
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
