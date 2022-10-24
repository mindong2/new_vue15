<template>
  <div id="app">
    <div>
        <button class="api-btn" @click="logout">로그아웃</button>
    </div>
    <p>
        <img :src="img" alt="프로필 이미지">
    </p>
    <p>닉네임 : {{ nickname }}</p>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            img: '',
            nickname : ''
        }
    },
    methods : {
        logout() {
            window.Kakao.Auth.logout()
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            });
        },
        async getToken() {
            const code = this.$route.query.code;
            const client_id = process.env.VUE_APP_KAKAO_REST_API_KEY;
            const redirect_uri = process.env.VUE_APP_KAKAO_REDIRECT_URI;

            const response = await axios({
                url:"https://kauth.kakao.com/oauth/token",
                method: "POST",
                params : {
                    grant_type: "authorization_code",
                    client_id,
                    redirect_uri,
                    code,
                }
            });
            window.Kakao.Auth.setAccessToken(response.data.access_token)
        },

        async getUserInfo() {
            window.Kakao.API.request({
                url: "/v2/user/me",
            })
            .then((response) => {
                console.log(response);
                this.nickname = response.properties.nickname;
                this.img = response.properties.profile_image;
            })
            .catch((error)=> {
                console.log(error)
            })
        }
    },
    async created() {
        await this.getToken()
        await this.getUserInfo()
    }
}
</script>

<style scoped>
.api-btn {
    background-color: #ffeb00;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    height: 49px;
    line-height: 49px;
    min-width: 222px;
}
</style>