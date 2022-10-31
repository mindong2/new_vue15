<template>
  <div id="controller">
    <div v-if="this.btnShow">
        <button @click="getList">호출</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
    computed : {
        ...mapState(["btnShow"]),
    },
    methods: {
        ...mapActions(["getList"])
    }
}
</script>

<style>

</style>