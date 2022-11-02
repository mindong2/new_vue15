<template>
<v-app>
  <v-navigation-drawer app>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6"> Application </v-list-item-title>
        <v-list-item-subtitle> 부제목 </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ item.title }}</v-list-item-title>
        </v-list-item-content>

        
      </v-list-item>
    </v-list>

  </v-navigation-drawer>

  <v-app-bar app>
    <v-toolbar-title>제목</v-toolbar-title>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    v-footer
  </v-footer>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data() {
    return {
      items : [
        // icon은 구글 아이콘 mdn 혹은 npm install material-design-icons-iconfont -D  아이콘 명은 거기서 확인, mdn이나 설치법은 Features -> Icon Fonts -> Material Icons 에서 확인 (vuetify 사이트)
        // 후 index.html에 추가
        {title: 'Home', icon: 'home', to: '/' },
        {title: 'about', icon: 'account_circle', to:'/about'}
    ],
    right: null,
    }
  }
};
</script>
