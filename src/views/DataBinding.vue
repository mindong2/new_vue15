<template>
  <div class="app">
    <p>
      <span>{{ firstMessage }}</span>
    </p>

    <p>
      <!-- innerHTML과 비슷 -->
      <span v-html="html"></span>
    </p>

    <p>
      <!-- innerTEXT과 비슷 -->
      <span v-text="html"></span>
    </p>

    <p>
      <!-- v-pre는 기존 vue 코드가 들지않는다. -->
      <span v-pre>{{ html }}</span>
    </p>

    <p>
      <!-- innerTEXT과 비슷 밑의 setTimeout는 들지 않는다. 한번만 가능-->
      <span v-once>{{ once }}</span>
    </p>
    <p>
      <span> {{ once }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstMessage: "hello World",
      html: "<span style='color:red'>HTML : </span> <span>HTML</span>",
      once: "once 테스트",
    };
  },

  created() {
    // 화살표 함수에서의 this는 뷰 인스턴스 기존의 함수에서의 this는 window
    setTimeout(() => {
      this.once = "1234";
    }, 1000);
  },
};
</script>

<style scoped></style>
