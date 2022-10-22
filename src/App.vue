<template>
  <div id="app">
    <h1>리스트 컴포넌트</h1>
    <ListView
      :fruits="fruits"
      :selected="selected"
      @change="changeSelected"
    ></ListView>
  </div>
</template>

<script>
import ListView from "@/components/ListView.vue";
export default {
  name: "app",
  components: {
    ListView,
  },
  data() {
    return {
      fruits: [
        { name: "melon", key: "멜론" },
        { name: "apple", key: "사과" },
        { name: "grape", key: "포도" },
        { name: "mango", key: "망고" },
      ],
      selected: "",
    };
  },
  methods: {
    changeSelected(value) {
      this.selected = value;
    },
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
