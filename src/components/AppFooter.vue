<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
      loaded: false,
    };
  },
  created() {
    axios.get(`${store.serverURI}/footerData`).then((res) => {
      store.footerData = res.data;
      this.loaded = true;
    });
  },
};
</script>

<template>
  <footer>
    <div v-if="loaded" class="container">
      <div class="row">
        <div class="col-6">
          <div>
            <h4 class="mb-3">Address</h4>
            <span class="d-block">{{ store.footerData.address.street }}</span>
            <div class="mb-2">
              <span class="me-2">{{ store.footerData.address.number }}</span>
              <span>{{ store.footerData.address.time }}</span>
            </div>
            <span class="d-block">{{ store.footerData.address.mail }}</span>
          </div>
          <div class="icons">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div class="col-6 d-flex links">
          <div class="col-8">
            <h4 class="mb-3">Explore</h4>
            <span v-for="label in store.footerData.explore" class="link"
              ><a href="label.url">{{ label.label }}</a></span
            >
          </div>
          <div class="col-4">
            <h4 class="mb-3">Information</h4>
            <span class="d-block" v-for="label in store.footerData.information"
              ><a href="label.url">{{ label.label }}</a></span
            >
          </div>
        </div>
      </div>
      <span class="credits">@ 2024 Maxcoach. All Rights Reserved</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--shade4);
}
.container {
  padding: 80px 0;
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
  }
}
.link {
  display: inline-block;
  width: 50%;
}
span {
  margin-bottom: 10px;
  font-size: 0.85rem;
  font-weight: 500;
}
a {
  text-decoration: none;
  color: var(--shade5);
  &:visited {
    text-decoration: none;
    color: var(--shade5);
  }
  &:hover {
    color: var(--green);
  }
}
.icons {
  font-size: 1.5rem;
  margin-top: 30px;
  * {
    margin-right: 10px;
  }
}
.credits {
  display: block;
  text-align: center;
  color: var(--shade5);
  font-size: 0.9rem;
  margin-top: 100px;
}
</style>
