<template>
  <div id="formview">
    {{ aaa }}
    <br />
    이름 :
    <input type="text" name="name" :value="form.name" @input="changeInput" />
    <br />
    <br />
    나이 :
    <input type="text" name="age" :value="form.age" @input="changeInput" />
    <br />
    <br />
    <!-- v-model로도 텍스트는 변경되지만 props의 취지가 read-only이기 때문에 v-bind로 넘기기 -->
    이메일 :
    <input type="text" name="email" :value="form.email" @input="changeInput" />
  </div>
</template>

<script>
export default {
  // provide에서 받은 값
  inject: ["form", "changeForm"],
  methods: {
    changeInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      this.changeForm(name, value);
    },
  },
  props: {
    aaa: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
