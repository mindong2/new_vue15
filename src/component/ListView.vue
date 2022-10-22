<template>
  <div id="app">
    <input type="text" v-model="str" @oninput="checkList" />

    <ul>
      <li v-for="fruit in fruits" :key="fruit.key">
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

    methods: {
      checkList() {},
    },
  },
};
</script>

<style></style>
