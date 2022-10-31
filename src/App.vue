<template>
  <div id="app">
    <!-- <ModuleTest></ModuleTest> -->
    <PanelView></PanelView>
    <ControllerView></ControllerView>
  </div>
</template>

<script>
  // import ModuleTest from '@/views/ModuleTest.vue'
  import PanelView from '@/views/PanelView.vue'
  import ControllerView from '@/views/ControllerView.vue'
  export default {
    components : {
      // ModuleTest,
      PanelView,
      ControllerView
    }
} 
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 15px;
}

a.router-link-exact-active {
  color: #42b983;
}

#header {
  padding-left: 40px;
}

#search {
  padding: 20px 0px 20px 40px;
}

.contents {
  width: 600px;
  margin:0 auto;
  list-style: none;
}
</style>
