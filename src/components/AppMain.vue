<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";
import AppCourses from "./AppCourses.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppJumbo,
    AppCourses,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
</template>

<style scoped></style>
