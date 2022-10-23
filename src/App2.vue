<template>
  <div id="app">
    <div class="binding_cont" v-if="bool === 1">
      <DataBinding/>
      <p>-------------DataBinding 끝-------------</p>
      <FoamBinding/>
      <p>-------------FoamBinding 끝-------------</p>
      <FoamBinding2/>
      <p>-------------FoamBinding2 끝-------------</p>
      <FoamBinding3/>
      <p>-------------FoamBinding3 끝-------------</p>
      <TestComponent/>
    </div>


    <div class="event_cont" v-else-if="bool === 2" >
      <VonComponent v-on:send="getEvent"/>
      <ComputedComponent v-on:send="getEvent"/>
      <watchComponent/>
    </div>

  </div>

</template>

<script>
  // 데이터 바인딩
import DataBinding from "./views/databinding/DataBinding.vue";
import FoamBinding from "./views/databinding/FoamBinding.vue";
import FoamBinding2 from "./views/databinding/FoamBinding2.vue";
import FoamBinding3 from "./views/databinding/FoamBinding3.vue";
import TestComponent from "./components/TestComponent.vue";
import VonComponent from "./views/event/VonComponent.vue";
import ComputedComponent from "./views/event/ComputedComponent.vue";
import watchComponent from "./views/event/watchComponent.vue";

// 이벤트
export default {
  name: "App",
  components: {
    // 데이터 바인딩
    DataBinding,
    FoamBinding,
    FoamBinding2,
    FoamBinding3,
    TestComponent,

    // 이벤트
    VonComponent,
    ComputedComponent,
    watchComponent,


  },
  data() {
    return {
      bool: 2,      
    }
  },
  methods: {
    getEvent(){
      alert('상위 컴포넌트로 이벤트전송 완료')
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
}

</style>
