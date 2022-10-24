<template>
    <div id="app">
      <h1 id="header">KAKAO SEARCH API </h1>
  
      <div id="search">
        <input type="text" v-model="query" @keyup.enter="callWebDoc"/>
        <button @click="callWebDoc">검색</button>
      </div>
  
      <ul>
        <li v-for=" (item, index) in list" :key="index" class="contents">
          <p>
            <a :href="item.url" target="_blank">
              <span v-html="item.title"></span>
            </a>
            <!-- filters | 앞의 것을 파라미터로 받는다. -->
            <span style="padding-left:20px;">{{ new Date(item.datetime) | toYmd }}</span>
          </p>
          <p v-html="item.contents"></p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { callKakaoApi } from "@/plugins/axios"
  export default {
    name: "app",
    components: {
    },
    data() {
      return {
        query : '',
        list : []
      }
    },
    methods : {
      async callWebDoc() {
        const response = await callKakaoApi("/v2/search/web", {
          method: "GET",
          params: {
            query: this.query,
          },
        });
        this.list = response.data.documents;
      }
      
    },
    // 텍스트의 형식화.
    filters: {
      toYmd(obj) {
        const year = obj.getFullYear();
        const months = String(obj.getMonth()).padStart(2, 0);
        const date = String(obj.getDate()).padStart(2, 0);
        return `${year}-${months}-${date}`;
      },
    },
  };
  </script>
  
  <style scoped>
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
  