<template>
  <div id="inject">
    <br/>
    <br/>
    -------------------
    <br/>
    <InjectFormView :aaa="propsdata"></InjectFormView>
  </div>
</template>

<script>
import InjectFormView from "./InjectFormView.vue"
export default {
  data() {
    return {
      propsdata : 'From InjectView To InjectFormView'
    }
  },  
  components :{
        InjectFormView
    }
}
</script>

<style>

</style>