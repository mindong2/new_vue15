<template>
  <div id="monitor">
    <h3>모니터 뷰</h3>
    {{ count }} <br />
    getter -> {{ formCnt }} <br />
    {{ message2 }}
    <p>{{ name }} {{ id }}</p>
    <p>{{ userName }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["formCnt", "message2"]),
    // namespaced
    ...mapGetters("user", ["name", "id"]),
    // 밑에 방식은 호출할때 새로운 변수로 지정가능하다는 장점이 있다.
    ...mapGetters({ userName: "user/name" }),
  },
  created() {
    console.log(this.$store);
  },
};
</script>

<style></style>
