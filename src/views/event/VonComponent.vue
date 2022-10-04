<template>
  <div class="app">
        <p @click ="VonClickTest"> {{ hello }} </p>
        <p class="counter"> {{ counter }} </p>
        <button @click="Increase">증가 </button>
        <button @click="Decrease"> 감소</button>

        <!-- keyup => 입력값까지 받을수 있어 주로 사용-->
        <div class="keyup">
            <!-- 특정 키 입력시 동작하는 이벤트 -->
            <input
            type="text"
            @keyup="EventHandler('keyup', $event)"
            @keyup.enter="EventHandler2('enter 입력')"
            @keyup.up="EventHandler2('방향키 up 입력')"
            @keyup.down="EventHandler2('방향키 down 입력')"
            @keyup.left="EventHandler2('방향키 left 입력')"
            @keyup.right="EventHandler2('방향키 right 입력')"
            @keyup.delete="EventHandler2('방향키 delete, backspace 입력')"
            @keyup.esc="EventHandler2('방향키 esc 입력')"
            @keyup.space="EventHandler2('방향키 space 입력')"
            placeholder="keyup"
            />
            
            <div class="key_txt">{{ key_txt }} <button @click="SendEvent">지우기</button></div>
        </div>

        <!-- 복합 key up -->
        <p>
            <input type="text" @keyup.ctrl.enter="EventHandler2('컨트롤 + 엔터 입력')" placeholder="복합키입력">
        </p>

        <!-- keydown -->
        <div class="keydown">
            <input type="text"  @keydown="EventHandler('keydown', $event)" placeholder="keydown"/>
            <div class="key_txt">{{ key_txt }} <button @click="DeleteVal">지우기</button></div>
        </div>

        <!-- keypress -->
        <div class="keypress">
            <input type="text"  @keypress="EventHandler('keypress', $event)" placeholder="keypress"/>
            <div class="key_txt">{{ key_txt }} <button @click="DeleteVal">지우기 </button></div>
        </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            hello : "let's v-on event",
            counter : 0,
            key_txt : '',
        }
    },
    methods : {
        VonClickTest() {
            console.log('well done');
        },
        Increase() {
            this.counter++;

        },
        Decrease() {
            this.counter--;
        },
        EventHandler(eventName, e) {
            console.log(`${eventName}: ${e.target.value}`);
        },
        EventHandler2(eventName) {
            console.log(eventName);
        },
        DeleteVal(e) {
            this.key_txt = ''
            console.log(e.target.value);
        },
        SendEvent(){
            this.$emit("send");
        }

    }
}   
</script>

<style>
#app {padding: 40px;}
div, p {margin-top: 15px;}
</style>