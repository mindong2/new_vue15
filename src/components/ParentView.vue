<!-- props -> :프롭스 속성 이름 = "상위 컴포넌트의 데이터 이름" -->
<template>
  <div id="parent">
    <h1>{{ propsdata }}</h1>
    <!-- <ChildView :message = "ㅎㅇㄹ"/> -->
    <ChildView
      :message="str2"
      :fruits="fruits"
      :selected="selected"
      @change-select="change"
    ></ChildView>
  </div>
</template>

<script>
import ChildView from "./ChildView.vue";

export default {
  name: "ParentView",
  data() {
    return {
      str2: "Children propsdata",
      fruits: [
        { id: 1, name: "사과", key: "apple" },
        { id: 2, name: "복숭아", key: "peach" },
        { id: 3, name: "오렌지", key: "orange" },
        { id: 4, name: "딸기", key: "strawberry" },
      ],
      selected: [],
    };
  },
  components: {
    ChildView,
  },
  props: {
    propsdata: {
      type: String,
      default: "",
    },
  },
  methods: {
    change(value) {
      this.selected = value;
    },
  },
  watch: {
    selected: {
      handler(value) {
        console.log(value);
      },
    },
  },
};
</script>

<style></style>
