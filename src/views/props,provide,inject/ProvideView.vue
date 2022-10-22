<template>
  <div id="provide">
    ProvideView -> App에 있는 데이터를 받아왔다 (provide, inject)
    <p>{{ form.name }}</p>
    <p>{{ form.age }}</p>
    <p>{{ form.email }}</p>
    <br />
    <br />
    <SlotView></SlotView>
    <br />
    <br />
    <InjectView></InjectView>
  </div>
</template>

<script>
import InjectView from "./InjectView.vue";
import SlotView from "../SlotView.vue";
export default {
  data() {
    return {
      str: "propsdata",
    };
  },
  components: {
    InjectView,
    SlotView,
  },
  // provide에서 받은 값
  inject: ["form"],
};
</script>

<style></style>
