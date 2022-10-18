<template>
  <div id="mixins2">
    {{ this.str2 }}
  </div>
</template>

<script>
import mix2 from '@/mixins/mix2.js'
export default {
  mixins : [mix2],
  data() {
    return {}
  },
  
}
</script>

<style>

</style>