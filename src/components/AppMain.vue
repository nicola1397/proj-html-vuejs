<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";
import AppCourses from "./AppCourses.vue";
import AppPrograms from "./AppPrograms.vue";
import AppGuide from "./AppGuide.vue";

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
    AppGuide,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppPrograms></AppPrograms>
  <AppGuide></AppGuide>
</template>

<style scoped></style>
