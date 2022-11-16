<template>
  <div>
    <v-row class="content" justify="center">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="item in listData" :key="item.id">
          <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ item.contents }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      listData: [
        {
          id: "1",
          title: "About Me",
          contents:
            "저는 현재 웹퍼블리셔로 일하면서 전반적인 웹 스타일링과 Code Igniter로 기본적인 ERP 개발을 하고 있습니다. nuxt도 공부하며 ts도 도입할 예정입니다.",
        },
        { id: "2", title: "Home", contents: "프로젝트 해야하는데..." },
        { id: "3", title: "Momjobgo", contents: "맘잡고 파이팅" },
        { id: "4", title: "Vue.js", contents: "에반유 그는 도덕책" },
      ],
    };
  },
};
</script>

<style scoped>
.content {
  width: 80%;
  margin: 0 auto;
  word-break: keep-all;
}
</style>
