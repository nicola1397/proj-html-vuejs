<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";
import AppCourses from "./AppCourses.vue";
import AppPrograms from "./AppPrograms.vue";
import AppGuide from "./AppGuide.vue";
import AppSlider from "./AppSlider.vue";
import AppNewsletter from "./AppNewsletter.vue";
import AppGetStarted from "./AppGetStarted.vue";
import AppAboutUs from "./AppAboutUs.vue";
import AppBlogs from "./AppBlogs.vue";

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
    AppNewsletter,
    AppGetStarted,
    AppAboutUs,
    AppBlogs,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
  <AppCourses></AppCourses>
  <AppPrograms></AppPrograms>
  <AppGuide></AppGuide>
  <AppSlider></AppSlider>
  <AppGetStarted></AppGetStarted>
  <AppAboutUs></AppAboutUs>
  <AppBlogs></AppBlogs>
  <AppNewsletter></AppNewsletter>
</template>

<style scoped></style>
