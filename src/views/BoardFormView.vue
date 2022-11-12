<template>
  <v-card>
    <form style="width: 95%; margin: 0 auto">
      <v-row>
        <v-text-field v-model="title" label="제목"></v-text-field>
      </v-row>
      <v-row>
        <Editor
          ref="toastEditor"
          initialEditType="wysiwyg"
          :style="{ width: '100%' }"
          height="500px"
          previewStyle="vertical"
        ></Editor>
      </v-row>

      <v-row>
        <v-btn v-if="bno" @click="updateBoard">수정</v-btn>
        <v-btn v-else @click="callPostBoard">저장</v-btn>
      </v-row>
    </form>
  </v-card>
</template>

<script>
// toast editor는 라이브러리
// https://www.npmjs.com/package/@toast-ui/vue-editor 참고
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

import { postBoard, getBoards, updateBoard } from "@/services/board";

export default {
  data() {
    return {
      title: "",
    };
  },
  components: {
    Editor,
  },
  methods: {
    // toast editor에서 글 등록한것을 넣고 얻는 methods
    getContent() {
      return this.$refs.toastEditor.invoke("getMarkdown");
    },

    setContent(content) {
      this.$refs.toastEditor.invoke("setMarkdown", content);
    },

    getData() {
      const data = {
        title: this.title,
        contents: this.getContent(),
      };

      const { title, contents } = data;
      if (!title) {
        alert("제목을 작성해주세요.");
        return;
      }

      if (!contents) {
        alert("내용을 입력해주세요.");
        return;
      }

      return data;
    },

    async callPostBoard() {
      const data = this.getData();

      if (!data) {
        return;
      }

      try {
        const response = await postBoard(data);
        console.log(response);
        this.$router.push({ name: "board" });
      } catch (e) {
        console.log(e);
      }
    },
    async updateBoard() {
      const data = this.getData();
      if (!data) {
        return;
      }
      const response = await updateBoard({ ...data, bno: this.bno });
      this.$router.push(`/board/${this.bno}`);
      console.log(response);
    },
    async callBoard() {
      const response = await getBoards(this.bno);
      console.log(response);
      this.title = response.data.title;
      this.setContent(response.data.contents);
    },
  },
  computed: {
    bno() {
      return this.$route.params.id;
    },
  },
  created() {
    if (this.bno) {
      this.callBoard();
    }
  },
};
</script>

<style></style>
