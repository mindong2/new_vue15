<template>
  <div>
    <v-row class="mb-15">
      <v-btn @click="goToForm">게시물 등록</v-btn>
    </v-row>

    <v-data-table :headers="headers" :items="boards" class="elevation-1">
      <template #[`item.createdAt`]="{ item }">
        {{ toWriteTime(new Date(item.createdAt)) }}
      </template>

      <template #[`item.title`]="{ item }">
        <span class="custom-title" @click="$router.push(`/board/${item.bno}`)">
          {{ item.title }}
        </span>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import date from "@/mixins/date";
import { getBoards } from "@/services/board";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "순번",
          value: "bno",
        },
        { text: "제목", value: "title" },
        { text: "댓글 갯수", value: "commentCnt" },
        { text: "좋아요 갯수", value: "likeCnt" },
        { text: "싫어요 갯수", value: "hateCnt" },
        { text: "작성자", value: "writer" },
        { text: "작성일", value: "createdAt" },
      ],
      boards: [],
    };
  },
  mixins: {
    date,
  },
  computed: {
    ...mapGetters("user", { userId: "id" }),
  },
  methods: {
    async callBoards() {
      try {
        const response = await getBoards();
        this.boards = response.data;
      } catch (e) {
        console.log(e);
      }
    },
    goToForm() {
      this.$router.push("/board/form");
    },
  },

  created() {
    this.callBoards();
  },
};
</script>

<style></style>
