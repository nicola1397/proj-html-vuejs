<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";
import AppCourses from "./AppCourses.vue";
import AppPrograms from "./AppPrograms.vue";
import AppGuide from "./AppGuide.vue";
import AppSlider from "./AppSlider.vue";

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
    AppSlider,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppPrograms></AppPrograms>
  <AppGuide></AppGuide>
  <AppSlider></AppSlider>
</template>

<style scoped></style>
