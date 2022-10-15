<template>
  <div class="app">
    <!-- computed는 값을 리턴하는 느낌이고 watch는 함수실행느낌 -->
    <div>------ Watch ------</div>
    <p>
      값을 입력해봅시다. :
      <input type="text" v-model="message" />
      <br />
      <span> {{ message }} </span>
    </p>

    <!-- 카테고리 선택에 따른 다른 값 넣기 -->

    <select v-model="category1">
      <option
        v-for="item in categoryList1"
        :value="item.value"
        :key="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <select>
      <option
        v-for="item in categoryList2"
        :value="item.value"
        :key="item.value"
      >
        {{ item.label }}
      </option>
    </select>
    {{ array }}
    <button @click="pushArray">푸시</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      categoryList1: [
        { value: "IT", label: "IT직군" },
        { value: "건설", label: "건설" },
      ],
      category1: "IT",

      categoryList2: [],

      ItList: [
        { value: "vue", label: "vue" },
        { value: "react", label: "react" },
      ],
      ItListSelect: "",

      constructorList: [
        { value: 1, label: 1 },
        { value: 2, label: 2 },
      ],
      constructorSelect: "",

      array: [],
    };
  },
  methods: {
    pushArray() {
      this.array.push(1);
    },
  },
  watch: {
    message: function (value, oldValue) {
      console.log(value);
      console.log(oldValue);
    },
    category1: {
      // 처음에 category1에 IT의 값을 넣어놔도 watch실행이 안되었기때문에 실행하고싶다면
      // 처음에 화면이 뜨자마자 watch를 실행하게 한다.
      immediate: true,
      // arr, obj같은 reference타입들은 deep: true하면 감지가능
      deep: true,
      handler: function (value) {
        if (value === "IT") {
          this.categoryList2 = this.ItList;
        } else if (value === "건설") {
          this.categoryList2 = this.constructorList;
        } else {
          this.categoryList2 = [];
        }
      },
    },
  },
};
</script>

<style></style>
