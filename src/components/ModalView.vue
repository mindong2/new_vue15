<template>
  <div id="modal">
    <div class="cont" style="background-color: #131313; color: #fff">
      <!-- SlotView에 fromModal="sendData" 자체를 전달 (template일 경우에) -->
      <slot name="header" :fromModal="sendData"></slot>
      <slot name="content"></slot>
      <slot name="footer"></slot>
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sendData: "Get Data",
    };
  },
};
</script>

<style></style>
