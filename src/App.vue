<template>
  <div id="app">
    <router-link to="/search">Search API</router-link>
    <router-link to="/before">before_login API</router-link>
    <br />
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    // Kakao 객체를 사용하기 위해 선언되지 않으면 정의하도록 설정
    created() {
    if(!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.VUE_APP_KAKAO_JAVA_SCRIPT_KEY);
      window.Kakao.isInitialized();
    }
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
