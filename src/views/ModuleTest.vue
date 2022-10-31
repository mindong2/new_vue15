<template>
  <div id="module">
    {{ name }} {{ id }}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed : {
        ...mapGetters({ name : "user/name", id: "user/id" })
    }
}
</script>

<style>

</style>