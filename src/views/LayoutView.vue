<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle
            >{{ name }} 님 환영합니다~
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn @click="logOut"></v-btn>
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
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  data() {
    return {
      items: [
        { title: "Home", icon: "home", to: "/" },
        { title: "About", icon: "info", to: "/about" },
        { title: "Board", icon: "info", to: "/board" },
      ],
      right: null,
    };
  },
  computed: {
    ...mapGetters("user", ["name"]),
  },
  methods: {
    ...mapActions("user", ["initUser"]),
    logOut() {
      if (window.confirm("로그아웃 하시겠습니까?")) {
        this.initUser();
      }
    },
  },
};
</script>
