<template>
  <div id="login">
    ID: <input type="text" v-model="id" /> PW:
    <input type="text" v-model="password" />
    <v-btn @click="login">로그인</v-btn>
  </div>
</template>

<script>
import { callApi } from "@/plugins/axios";
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const response = await callApi({
        url: "https://api.devcury.kr/auth/user",
        method: "post",
        data: {
          id: this.id,
          pwd: this.password,
        },
      });

      console.log(response);
      //   token sessionStorage, vuex에 저장
      const token = response.data.token;
      console.log(token);
      //   sessionStorage
    },
  },
};
</script>

<style></style>
