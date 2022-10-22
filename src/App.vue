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
  components: {},
  data() {
    return {
      str: "parent's propsdata",
      provideStr: "provide String",
      provideObj: {
        name: "",
        age: null,
        email: "",
      },
      fruits: [
        { value: "apple", label: "사과" },
        { value: "orange", label: "오렌지" },
        { value: "banana", label: "바나나" },
        { value: "grape", label: "포도" },
      ],
      searchKeyword: "",
    };
  },
  methods: {
    changeForm(name, value) {
      this.provideObj[name] = value;
    },
  },
  // 하위 컴포넌트들에게 전달할 propsdata
  provide() {
    return {
      form: this.provideObj,
      changeForm: this.changeForm,
    };
  },
  computed: {
    // 검색어 나오게하는 함수. this.fruits나 this.searchKeyword 둘중 하나가 바뀌면 자동실행
    filterList() {
      return this.fruits.filter((fruit) =>
        fruit.label.includes(this.searchKeyword)
      );
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
