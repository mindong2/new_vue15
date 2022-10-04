<template>
  <div class="app">
    <!-- 보간 내에 표현식을 넣으면 편리하지만 유지보수가 어려워진다.
        '함수'안에서 사용되는 data에 포함된 변수들을 감시하여 변화될때 실행되는 '함수' computed는 함수여야하고 리턴값이 있어야 한다
      -->

      <p>
        <span>firstName :</span> <input type="text" v-model="FirstName" placeholder="FirstName"/>
      </p>

      <p>
        <span>LastName :</span> <input type="text" v-model="LastName" placeholder="LastName"/>
      </p>

      <p>{{ FullName }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      FirstName: '',
      LastName: '',
    }
  },
  // 원할경우 셋팅가능하다 
  computed : {
    FullName : {
      get() {
        console.log('이름 작성중')
        return `${this.FirstName} ${this.LastName}`;
      },
      set(newValue) {
        if(newValue.length < 1){
          alert('이름을 입력하세요')
        }

      }
    }
  }
}
</script>

<style>
  p {margin-top: 15px;}
</style>