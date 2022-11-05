<template>
  <div id="controller">
    <h3>컨트롤러 뷰</h3>
    <input @input="(e) => changeText(e.target.value)" type="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["changeText"]),
  },
  created() {
    console.log(this.$store);
  },
};
</script>

<style></style>
