<template>
  <div id="panel">
    <!-- <p>State의 값 {{ count }} </p>  -->
    <p>State의 값 {{ formatCnt }} </p> 
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
    computed : {
        /* State  / 
        count() {
            return this.$store.state.count;
            위와 아래는 같다 아래는 헬퍼함수
        }
        */
        ...mapState(["count"]),

        /*Getters /
        formatCnt() {
            return this.$store.getters.formatCnt;
            위와 아래는 같다 아래는 헬퍼함수
        }
        */
       ...mapGetters(["formatCnt"]),
    }
}
</script>

<style>

</style>