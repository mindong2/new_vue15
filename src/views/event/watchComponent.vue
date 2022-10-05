<template>
  <div class="app">
    <div>------ Watch ------</div>
    <p>값을 입력해봅시다. :
      <input type="text" v-model="message"/>
    </p>

    <p>
      배열의 값 {{ arrayToStr }}
    </p>
    <button @click="arrayPush">배열값 push</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message : '',
      array : [],
    }
  },
  computed : {
    arrayToStr() {
      return this.array.toString();
    }
  },
  methods : {
    arrayPush() {
      this.array.push(1);
    }
  },
  watch : {
    message : function(new_value, old_val) {
      console.log("값이 변경되었습니다.", old_val, new_value)
    },
    /* 배열은 reference 속성 (메모리 상에 객체가 있는 위치를 저장)
     이기 때문에 new_val과 old_val이 같다. */

    array: {
      // 주소값이 변하지 않는 데이터는 watch에서 감지되지 않아서 deep: true;를 넣으면 감지할 수 있다.
      deep : true,  
      handler: function(new_val, old_val) {
        console.log(new_val, old_val)
      }
  }
  }
}
</script>

<style>

</style>