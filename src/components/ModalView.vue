<template>
  <div id="modal">
    <div class="cont" style="background-color:#131313; color:#fff;">
        <slot name="header" :fromModal="title"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
        <slot name="main"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
    data(){
        return {
            title : 'title'
        }
    }
    ,
}
</script>

<style>

</style>