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
    <TestComponent></TestComponent>
  </div>
</template>

<script>
import DataBinding from "./views/DataBinding.vue";
import FoamBinding from "./views/FoamBinding.vue";
import FoamBinding2 from "./views/FoamBinding2.vue";
import FoamBinding3 from "./views/FoamBinding3.vue";
import TestComponent from "./components/TestComponent.vue";

export default {
  name: "App",
  components: {
    DataBinding,
    FoamBinding,
    FoamBinding2,
    FoamBinding3,
    TestComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  background: #999;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}
</style>
