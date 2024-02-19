<script>
import { store } from "./store.js";
import AppHeader from "../src/components/AppHeader.vue";
import AppMain from "../src/components/AppMain.vue";
import AppFooter from "../src/components/AppFooter.vue";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap");

body {
  font-family: "Montserrat", sans-serif;
}
</style>
