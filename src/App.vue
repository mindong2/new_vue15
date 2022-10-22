<template>
  <div id="app">
    <h1>리스트 컴포넌트</h1>
    <ListView
      :fruits="fruits"
      :selected="selected"
      @change="changeSelected"
    ></ListView>
    <br />
    <br />
    <br />
    <div>
      <button @click="firstModal = true">첫번째 모달</button>
    </div>
    <hr />
    <div>
      <button @click="secondModal = true">두번째 모달</button>
    </div>
    <ModalView :on="firstModal">
      <template v-slot:title>제목입니다.</template>
      <template #sub-title>부제목입니다.</template>
      <template>
        <div>
          <p>시작입니다</p>
          <input type="text" name="" id="" value="안녕하세요" />
          <p>끝</p>
          <button @click="click1">닫기</button>
        </div>
      </template>
    </ModalView>

    <ModalView :on="secondModal">
      <template v-slot:title>오예.</template>
      <template #sub-title>세컨드모달.</template>
      <template>
        <button @click="click2">닫기</button>
      </template>
    </ModalView>
  </div>
</template>

<script>
import ListView from "@/components/ListView.vue";
import ModalView from "@/components/ModalView.vue";
export default {
  name: "app",
  components: {
    ListView,
    ModalView,
  },
  data() {
    return {
      firstModal: false,
      secondModal: false,
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
    click1() {
      this.firstModal = false;
    },
    click2() {
      this.secondModal = false;
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
