<template>
    <div id="page-contents">
        <h1>Hi, User.</h1>
        <p>This is where the homepage goes!</p>

	<h2>API greeting should be below:</h2>
    <Greeting/>
    </div>
</template>

<script>
import Greeting from '../../components/Greeting.vue'

export default {
    components: { Greeting },
}
</script>