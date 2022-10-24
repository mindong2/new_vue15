<template>
  <div id="app">
    <!-- add axios soon -->
    <watchComponent />
    vuex
    <input type="text" v-model="searchKeyword" />
    <br />
    <ul>
      <li v-for="item in filterList" :key="item.value">
        {{ item.label }}
      </li>
    </ul>

    <br />
    <br />
    <br />
    <!-- <ProvideView></ProvideView> -->

    --------------- router-view -------------
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/where">WhereView</router-link> |
      <router-link to="/board">BoardView</router-link> |
      <router-link to="/parent">ParentView</router-link> |
      <router-link to="/provide">ProvideView</router-link>
    </nav>
    <!-- router-view가 해당 컴포넌트에 해당하는 영역 -->
    <router-view />
  </div>
</template>

<script>
// import ProvideView from "./views/props,provide,inject/ProvideView.vue";
import watchComponent from "./views/event/watchComponent.vue";

export default {
  name: "app",
  components: {
    // ProvideView,
    watchComponent,
  },
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
      // this.provideObj.name = value;와 같다
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
