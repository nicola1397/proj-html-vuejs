<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";
import AppCourses from "./AppCourses.vue";
import AppPrograms from "./AppPrograms.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppJumbo,
    AppCourses,
    AppPrograms,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppPrograms></AppPrograms>
</template>

<style scoped></style>
