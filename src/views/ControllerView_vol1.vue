<template>
  <div id="controller">
    <button @click="changeCnt(1)">증가</button>
    <button @click="changeCnt(-1)" style="margin-left:10px;">감소</button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
export default {
    methods : {
        // state의 값을 바로 변경하는건 좋지않다. state는 mutation으로 변경해야한다
        
        /*
        increase() {
            this.$store.state.count++;
        },
        decrease() {
            this.$store.state.count--;
        }
        */

        // mutations는 commit을 통하여 불러올수있다.
        /*
        changeCnt(value) {
            this.$store.commit('changeCnt', value);
            위와 아래는 같다 아래는 헬퍼함수
        }
        */

        // ...mapMutations(["changeCnt"])
        ...mapActions(["changeCnt"])
    },
}
</script>

<style>

</style>