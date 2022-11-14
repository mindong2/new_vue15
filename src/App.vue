<template>
  <LayoutView v-if="hasToken"></LayoutView>
  <LoginView v-else></LoginView>
</template>

<script>
import LayoutView from "@/views/LayoutView";
import LoginView from "@/views/LoginView";
import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      isLogin: false,
      items: [
        { title: "Home", icon: "home", to: "/" },
        { title: "About", icon: "info", to: "/about" },
      ],
      right: null,
    };
  },
  components: {
    LayoutView,
    LoginView,
  },
  computed: {
    ...mapGetters("user", ["hasToken"]),
  },
};
</script>
