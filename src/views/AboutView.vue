<template>
  <div>
    <v-card class="elevation-16 mx-auto" width="600">
      <v-card-title class="text-h5"> 별점을 남겨주세요. </v-card-title>
      <v-card-text>
        도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고
        나가자. – 헨리포드

        <div class="text-center mt-12">
          <v-rating
            v-model="rating"
            color="yellow darken-3"
            background-color="grey darken-1"
            empty-icon="$ratingFull"
            half-increments
            hover
            large
          ></v-rating>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-space-between">
        <v-btn text><router-link to="/"> 귀찮아요 </router-link></v-btn>
        <v-btn color="primary" text @click="sendRating"> 보내기 </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 4.5,
    };
  },
  methods: {
    sendRating() {
      if (this.rating <= 3) {
        alert("힝");
      } else {
        alert("좋은평가 감사합니다");
      }
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
