<template>
  <LayoutView v-if="isLogin"></LayoutView>
  <LoginView v-else></LoginView>
</template>

<script>
import LayoutView from "@/views/LayoutView";
import LoginView from "@/views/LoginView";
export default {
  name: "App",
  data() {
    return {
      isLogin: true,
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
};
</script>
