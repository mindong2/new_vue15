<template>
  <div id="app">
    Where View
    <p>
      <button @click="goToHome">goToHome</button>
    </p>
  </div>
</template>

<script>
export default {
  name : "WhereView",
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>