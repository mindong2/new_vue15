<template>
  <div id="custom_detail">
    <section class="details">
      <div class="img_box">
        <img :src="$route.query.image" alt="" />
      </div>
      <div class="summary">
        <div class="summary_detail">
          <h2>
            {{ $route.query.title }}
            <div class="btn_wrap">
              <v-btn
                color="warning"
                class="btn-cls"
                style="margin: 0; margin-bottom: 0; margin-right: 10px"
                @click="isModalFn"
              >
                찜목록
              </v-btn>
              <v-btn color="primary" @click="goBack()">목록으로</v-btn>
            </div>
          </h2>
          <div class="rating">
            <span style="padding-right: 30px">{{ genre }}</span>
            <span>
              <span style="color: #f9a825; vertical-align: text-bottom">★</span>
              {{
                $route.query.rate === 0 ? "준비중 입니다." : $route.query.rate
              }}
            </span>
            <span>{{ $route.query.genre }}</span>
          </div>
          <p>{{ $route.query.summary }}</p>
        </div>
        <div class="input_box">
          <form @submit.prevent="submit" style="width: 100%">
            <v-row>
              <v-btn
                color="success"
                class="btn-cls"
                style="margin-left: auto"
                @click="myMovie()"
              >
                찜목록에 저장
              </v-btn>
            </v-row>
          </form>
        </div>
      </div>
    </section>

    <div class="modal" v-if="showModal">
      <div class="modal_wrap">
        <ul>
          <li v-if="myMovies.length === 0">찜한 영화가 없습니다.</li>
          <li v-for="(item, index) in myMovies" :key="index" class="list-li">
            <span class="movie-text">
              {{ item.title }}
            </span>
            <!-- <span v-show="todo.edit">
                <input class="movie-input" type="text" v-model="todo.text" />
              </span> -->
            <!-- <v-icon
                v-show="!todo.edit"
                class="icon"
                small
                @click="todo.edit = true"
                >edit</v-icon
              > -->
            <!-- <v-icon v-show="todo.edit" class="icon" small @click="save(todo)">
                done
              </v-icon> -->
            <v-btn color="primary" @click="deleteMovie(index)"> 삭제 </v-btn>
          </li>
        </ul>
        <div style="text-align: center; margin-top: 20px">
          <v-btn
            color="error"
            @click="isModalFn"
            style="width: 128px; height: 36px"
          >
            닫기
          </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { callPostCustom, callGetCustom } from "@/services/custom";
import { mapGetters } from "vuex";
const KEY = "myMovies";

export default {
  data() {
    return {
      genre: "",
      showModal: false,
      wasMovie: false,
      myMovies: [],
    };
  },
  methods: {
    isModalFn() {
      this.showModal = !this.showModal;
    },
    async myMovie() {
      const myMovies = this.myMovies;
      myMovies.push({
        title: this.$route.query.title,
        id: this.$route.params.id,
      });
      const response = await callPostCustom(KEY, {
        myMovies,
      });
      if (response.status === 200) {
        alert("찜목록에 저장되었습니다!");
        this.myMovies = myMovies;
        this.wasMovie = response.wasMovie;

        if (!myMovies.map((v) => v.id === this.$route.params.id)) {
          myMovies.pop();
          alert("이미 저장된 영화입니다!");
        }
      } else {
        alert("네트워크 에러");
      }
    },
    async deleteMovie(index) {
      const myMovies = [...this.myMovies];
      myMovies.splice(index, 1);
      const response = await callPostCustom(KEY, {
        myMovies,
      });
      if (response.status === 200) {
        if (confirm("정말로 삭제하시겠습니까?")) {
          this.wasMovie = false;
          this.myMovies = myMovies;
        }
      } else {
        alert("네트워크 에러");
      }
    },
    goBack() {
      this.$router.push(`/custom`);
    },

    genres() {
      const genre = this.$route.query.genres;
      this.genre = genre.join(", ");
    },
  },

  async created() {
    this.genres();

    const response = await callGetCustom(KEY);
    if (response.status === 200) {
      this.myMovies = response?.data?.myMovies ?? [];
    } else {
      alert("네트워크 에러");
    }
  },
  computed: {
    ...mapGetters[("user", { userId: "id" })],
    key() {
      return this.$route.params.id;
    },
  },
};
</script>

<style scoped>
.details {
  display: flex;
  margin-top: 30px;
}
.details .summary {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 50px;
}
.details .img_box {
  margin-right: 50px;
}
.details .img_box img {
  border-radius: 4px;
}
.details h2 {
  display: flex;
  justify-content: space-between;
  font-size: 2.4rem;
}
.details p,
.details span {
  margin-top: 15px;
  font-size: 1.2rem;
  line-height: 1.5;
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9;
}
.modal .modal_wrap {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 550px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  overflow: auto;
}
.modal .modal_wrap li {
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px 15px;
  border-bottom: 1px solid #c3c3c3;
  font-size: 24px;
}
</style>
