<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="goToAbout">goToAbout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  methods: {
    goToAbout() {
      // 이런식으로 라우터에 직접 접근하여 이동할수도 있다.
      // 예를들어 로그인 전에 노출시켜야 할 페이지라면 아래와같이 사용가능
      this.$router.push("/about");
      // 위 아래는 같다. -> name을 unique하게 지어야 하는 이유 만약 path를 바꾸면 일일히 바꾸기 어려우니 name으로 작성해놓으면 path를 바꿔도 무관
      // this.$router.push({name : "about"});
    },
  },
};
</script>
