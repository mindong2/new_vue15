<template>
  <div id="app">
    <h1>{{ $route.params.id }}번 게시물 입니다.</h1>
    <h2>{{ $route.query.title }}</h2>
    <router-link to="/board">뒤로가기</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
