<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
  created() {
    axios.get(`${store.serverURI}/footerData`).then((res) => {
      store.footerData = res.data;
    });
  },
};
</script>

<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <!-- <h4>Address</h4> -->
        </div>
        <div class="col-6"></div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
