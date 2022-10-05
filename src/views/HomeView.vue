<template>
  <div class="home">
    <h1>Home</h1>
    <button @click="goToAbout">goToAbout</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  methods : {
    goToAbout() {
      // 이런식으로 라우터에 직접 접근하여 이동할수도 있다.
      this.$router.push('/about')
    }
  }
}
</script>
