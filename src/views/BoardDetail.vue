<template>
  <div>
    상세보기 {{ bno }}
    <v-card>
      <p>{{ title }}</p>
      <v-divider></v-divider>
    </v-card>

    <v-card>
      <Viewer ref="viewer" height="500px"></Viewer>
    </v-card>

    <v-card>
      <!-- 작성자와 내 id가 같을때만 나타난다. -->
      <template v-if="writer === id">
        <v-btn @click="$router.push(`/board/form/${bno}`)">수정</v-btn>
        <!-- vuex의 나의 id와 이 리스트의 id 비교해서 삭제가능하게 추가 -->
        <v-btn @click="callBoardDelete">삭제</v-btn>
      </template>
      <v-btn @click="$router.push({ name: 'board' })">목록으로</v-btn>
    </v-card>
  </div>
</template>

<script>
import { getBoard, deleteBoard } from "@/services/board";
import { mapGetters } from "vuex";
// 하단은 toast라이브러리 뷰어
import { Viewer } from "@toast-ui/vue-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
export default {
  data() {
    return {
      title: "",
      writer: "",
    };
  },
  components: {
    Viewer,
  },
  computed: {
    ...mapGetters("user", ["id"]),
    bno() {
      return this.$route.params.id;
    },
  },
  methods: {
    async callBoard() {
      const response = await getBoard(this.bno);
      console.log(response);
      this.title = response.data.title;
      this.writer = response.data.writer;
      this.setContent(response.data.contents);
    },
    // toast 라이브러리
    setContent(content) {
      this.$refs.viewer.invoke("setMarkdown", content);
    },

    async callBoardDelete() {
      if (confirm("정말로 삭제하시겠습니까?")) {
        //참일시 삭제
        const response = await deleteBoard(this.bno);
        console.log(response);
        this.$router.push({ name: "board" });
      }
    },
  },
  created() {
    this.callBoard();
  },
};
</script>

<style></style>
