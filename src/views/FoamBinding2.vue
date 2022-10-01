<template>
  <div class="app">
    <div>
      <!-- 셀렉트 양방향 데이터 바인딩 -->
      <h3>single select</h3>
      <select v-model="select">
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>

      <p>{{ select }}</p>
      <h3>multi select</h3>
      <select v-model="multiSelect" multiple>
        <option value="apple">사과</option>
        <option value="orange">오렌지</option>
        <option value="grape">포도</option>
        <option value="peach">복숭아</option>
      </select>

      <p>{{ multiSelect }}</p>

      <h3>checkbox</h3>
      <input type="checkbox" v-model="checkbox" />
      <p>{{ checkbox }}</p>

      <h3>multi checkbox</h3>
      <input type="checkbox" v-model="checkboxes" value="apple" /> 사과
      <input type="checkbox" v-model="checkboxes" value="orange" /> 오렌지
      <input type="checkbox" v-model="checkboxes" value="grape" /> 포도
      <p>{{ checkboxes }}</p>

      <h3>radio</h3>
      <input type="radio" v-model="radio" value="apple" /> 사과
      <input type="radio" v-model="radio" value="orange" /> 오렌지
      <input type="radio" v-model="radio" value="grape" /> 포도
      <p>{{ radio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "apple",
      multiSelect: [],
      checkbox: false,
      checkboxes: [],
      radio: [],
    };
  },

  created() {
    setTimeout(() => {
      this.select = "orange";
    }, 2000);
  },
};
</script>

<style></style>
