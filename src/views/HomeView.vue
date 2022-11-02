<template>
  <div id="app">
    Home
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'HomeView',

    components: {
      HelloWorld,
    },
  }
</script>
