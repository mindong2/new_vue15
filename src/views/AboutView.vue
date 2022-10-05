<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" @input="writeText1($event)"/>
    <hr />
    <input type="text" @input="writeText2($event)" />

    <p style="font-size: 24px; font-weight:600;">
       {{ writeText }}
    </p>
    <p>
      <button @click="goToWhere">goToWhere</button>
    </p>
  </div>
</template>

<script>
  export default {
    name : "AboutView",
    data() {
      return {
        text : "",
        text2 : ""
      }
    },
    methods : {
      goToWhere(){
        this.$router.push('/where');
      },
      writeText1(e) {
        this.text = e.target.value;
      },
      writeText2(e){
        this.text2 = e.target.value;
      }
    },
    computed : {
      writeText() {
        return `${this.text} ${this.text2}`
      }
    }
  }
</script>