<template>
  <div id="custom">
    <section
      class="isLoading"
      v-show="!isLoading"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        height: 800px;
      "
    >
      <v-progress-linear
        :size="300"
        :height="7"
        indeterminate
        color="green"
      ></v-progress-linear>
    </section>
    <section class="custom">
      <div class="custom_cont">
        <ul>
          <li v-for="item in movieData" :key="item.id">
            <a
              href="javascript:;"
              @click="
                goToDetail(
                  item.id,
                  item.title,
                  item.description_full,
                  item.rating,
                  item.genres,
                  item.large_cover_image
                )
              "
            >
              <p>title: {{ item.title }}</p>
              <div class="img_box">
                <img :src="item.large_cover_image" alt="" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
// import { getAllCustom, getCustom, postCustom } from "@/services/custom";
import axios from "axios";
export default {
  data() {
    return {
      isLoading: false,
      bookNum: 0,
      userValue: "",
      userBook: [],
      userBooks: {},
      userCont: [],
      key: "",
      movieData: [],
    };
  },
  methods: {
    goToDetail(detail, title, summary, rate, genres, image) {
      this.$router.push({
        path: `/custom/${detail}`,
        query: {
          title,
          summary,
          rate,
          genres,
          image,
        },
      });
    },
    async getMovieList() {
      await axios
        .get(`https://yts.mx/api/v2/list_movies.json?`)
        .then((res) => {
          this.isLoading = true;
          this.movieData = res.data.data.movies;
        })
        .catch((err) => console.log(err));
    },
  },
  created() {
    // this.callGetCustom();
    // this.callGetAllCustom();
    this.getMovieList();
  },
};
</script>

<style scoped>
main {
  background-color: #333 !important;
}
.custom {
  margin-top: 20px;
}
.custom .custom_cont {
  text-align: center;
}
.custom .custom_cont a {
  color: #333;
  text-decoration: none;
}
.custom .custom_cont a:hover,
.custom .custom_cont a:focus {
  animation-duration: 1.5s;
  animation-name: rainbowLink;
  animation-iteration-count: infinite;
}
@keyframes rainbowLink {
  0% {
    color: #ff2a2a;
  }
  15% {
    color: #ff7a2a;
  }
  30% {
    color: #ffc52a;
  }
  45% {
    color: #43ff2a;
  }
  60% {
    color: #2a89ff;
  }
  75% {
    color: #202082;
  }
  90% {
    color: #6b2aff;
  }
  100% {
    color: #e82aff;
  }
}
.custom .custom_cont li .img_box {
  border-radius: 10px;
  overflow: hidden;
}
.custom .custom_cont a img {
  transition: all 0.2s ease-in-out;
}
.custom .custom_cont a:hover img {
  transform: scale(1.2);
}
ul {
  display: flex;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  gap: 30px 30px;
}
li {
  list-style: none;
}
li p {
  margin-bottom: 15px;
  font-size: 17px;
}
li .img_box {
  width: 350px;
}
li img {
  width: 100%;
}
.my_ta {
  resize: none;
}
.send_btn {
  text-align: end;
}
</style>
