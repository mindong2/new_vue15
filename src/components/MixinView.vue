<template>
  <div id="mixins">
    <!-- mix1에서 가져온 데이터들 -->
    {{ rightClick }}
    <!-- mix1.js의 onClick -->
    <button @click="onClick">클릭</button>
  </div>
</template>

<script>
import mix1 from "@/mixins/mix1.js";
export default {
  mixins: [mix1],

  data() {
    return {
      str2: "기본데이터",
    };
  },
  mounted() {
    // 믹스인이 먼저 실행된다.
    console.log("mixin2");
  },
  computed: {
    rightClick() {
      return `${this.str} 체인지`;
    },
  },
};
</script>

<style></style>
