<template>
  <div id="app">
    Where View
    <p>
      <button @click="goToBoard">goToBoard</button>
    </p>
  </div>
</template>

<script>
export default {
  name : "WhereView",
  methods: {
    goToBoard() {
      this.$router.push('/board');
    }
  }
}
</script>

<style>

</style>