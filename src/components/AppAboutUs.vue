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
    axios.get(`${store.serverURI}/aboutUs`).then((res) => {
      store.aboutUs = res.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div v-for="what in store.aboutUs" class="col-3 cards">
          <h3 class="sectionTitle">{{ what.title }}</h3>
          <h2 class="number">{{ what.value }}</h2>
          <span class="what">{{ what.what.toUpperCase() }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--shade1);
}

.cards {
  height: 400px;
  border-left: 1px solid var(--shade4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:last-of-type {
    border-right: 1px solid var(--shade4);
  }
}
.mainTitle {
  text-align: center;
  font-weight: 700;
  color: var(--purpdark);
}
.sectionTitle {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--purpdark);
  padding: 10px 60px;
  margin-bottom: 20px;
}

.number {
  color: var(--green);
  font-size: 4rem;
  font-weight: 800;
}
.what {
  color: var(--shade5);
  font-weight: 700;
}
</style>
