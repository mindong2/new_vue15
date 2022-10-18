<template>
  <div id="app">
    <h1>Main</h1>
    <nav>
      <router-link to="/mixin">mixin</router-link> |
      <router-link to="/mixin2">mixin2</router-link> 
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  components: {
  },
  data() {
    return {

    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
