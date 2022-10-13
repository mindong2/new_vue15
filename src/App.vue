<template>
  <div id="app">
    <br/>
    <br/>
    <br/>
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
    <router-view/>
  </div>
</template>

<script>
// import ProvideView from "./views/props,provide,inject/ProvideView.vue";
  export default {
    name : "app",
    components : {
      // ProvideView,
    },
    data(){
      return {
        str: "parent's propsdata",
        provideStr: 'provide String',
        provideObj : {
          name : '',
          age : null,
          email : ''
        }
      }
    },
    methods: {
      changeForm(name, value) {
        this.provideObj[name] = value
      }
    },
    // 하위 컴포넌트들에게 전달할 propsdata
    provide() {
      return {
        form : this.provideObj,
        changeForm : this.changeForm
      }
    }
  }

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
