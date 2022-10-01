<template>
  <div id="app">
    <DataBinding></DataBinding>
    <p>-------------DataBinding 끝-------------</p>
    <FoamBinding></FoamBinding>
    <p>-------------FoamBinding 끝-------------</p>
    <FoamBinding2></FoamBinding2>
    <p>-------------FoamBinding2 끝-------------</p>
    <FoamBinding3></FoamBinding3>
    <p>-------------FoamBinding3 끝-------------</p>
  </div>
</template>

<script>
import DataBinding from "./views/DataBinding.vue";
import FoamBinding from "./views/FoamBinding.vue";
import FoamBinding2 from "./views/FoamBinding2.vue";
import FoamBinding3 from "./views/FoamBinding3.vue";

export default {
  name: "App",
  components: {
    DataBinding,
    FoamBinding,
    FoamBinding2,
    FoamBinding3,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
