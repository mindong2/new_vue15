<template>
  <div class="app">
    <!-- 양방향 데이터 바인딩 -->
    <input type="text" v-model="message" />
    <br />
    <br />
    <br />
    <input type="text" @input="changeText" />
    <!-- v-model은 한글입력이 늦어져서 그럴경우에는 @input 사용 
    일반적인 회원가입은 인풋 focus가 풀려서 v-model괜찮지만
    바로바로 적용 필요한 구간은 @input 권장 -->
    <p>
      <span>
        {{ message }}
      </span>
    </p>

    <p>
      <span>
        {{ inputText }}
      </span>
    </p>
    <!-- 타입이 숫자 -->
    <input type="number" v-model.number="number" />

    <p>
      <span>{{ number }}</span>
    </p>

    <p>
      <textarea v-model="textarea"></textarea>
    </p>

    <p>
      <span> {{ textarea }}</span>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      inputText: "",
      number: 0,
      textarea: "",
    };
  },
  methods: {
    changeText(e) {
      this.inputText = e.target.value;
    },
  },
};
</script>

<style></style>
