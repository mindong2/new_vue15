<template>
  <div class="app">
    <h1>
      {{ Test }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Test: "Set test Text ",
    };
  },
};
</script>

<style scoped>
h1 {
  margin: 100px 0;
  font-size: 48px;
  color: #4b65cf;
}
</style>
