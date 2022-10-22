<template>
  <div id="app">
    <p>{{ selectedName }}</p>
    <input type="text" v-model="str" />
    <ul>
      <li
        class="item"
        v-for="fruit in checkList"
        :key="fruit.name"
        @click="clickItem(fruit.key)"
      >
        {{ fruit.key }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      str: "",
    };
  },
  props: {
    fruits: {
      type: Array,
      default: () => {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
  },
  methods: {
    clickItem(value) {
      // 부모로 전달 change 호출 (컴포넌트 내에서 바뀌는 데이터를 부모로 전달하기 위해)
      this.$emit("change", value);
    },
  },
  computed: {
    checkList() {
      return this.fruits.filter((item) => item.key.includes(this.str));
    },
    selectedName() {
      const findObj = this.fruits.find((item) => item.key === this.selected);
      return findObj?.key; //있으면 name 없으면 null 출력 혹은 삼항연산자로도 가능
    },
  },
};
</script>

<style scoped>
.item {
  cursor: pointer;
}
</style>
