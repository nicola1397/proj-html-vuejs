<script>
import { store } from "../store.js";
import AppJumbo from "./AppJumbo.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppJumbo,
  },
};
</script>

<template>
  <AppJumbo></AppJumbo>
</template>

<style scoped></style>
