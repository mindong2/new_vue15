<template>
  <div id="app">
    <div id="btn">
        <a id="kakao-login-btn" @click="clickLogin">
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼" width="183px" style="cursor: pointer;"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    methods : {
        clickLogin() {
            window.Kakao.Auth.authorize({
            redirectUri: process.env.VUE_APP_KAKAO_REDIRECT_URI,
        });
        }
    }
}
</script>

<style>
    #btn {padding: 20px 0 20px 40px;}
</style>