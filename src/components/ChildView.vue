<template>
  <div id="child">
    <br/>
    <br/>
    <br/>
    {{ message }}
  </div>
</template>

<script>
    
export default {
    name: "ChildView",
    props : {
        message : {
            type : String ,
            default : ''
        }
    }
}
</script>

<style>

</style>