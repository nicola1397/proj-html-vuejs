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
    axios.get(`${store.serverURI}/reviews`).then((res) => {
      store.reviews = res.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="sliderSection">
      <div>
        <h5 class="sectionSubtitle">GREAT WORDS ABOUT MAXCOACH</h5>
        <h3 class="sectionTitle mb-5">
          Our <span class="titleBreak">top learner's</span> verbatim
        </h3>
      </div>
      <div id="sliderWrapper">
        <div v-for="review in store.reviews" class="sliderCard">
          <h5 class="title mb-4">{{ review.title }}</h5>
          <p class="description">{{ review.description }}</p>
          <div class="profileSection mt-5">
            <div class="imgContainer">
              <img :src="`src/assets/images/${review.image}`" alt="" />
            </div>
            <div class="textContainer">
              <h5 class="name">{{ review.name }}</h5>
              <span class="profession">/ {{ review.profession }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sliderSection {
  padding: 100px 50px;
  background-color: var(--shade4);
}
.sectionSubtitle {
  text-align: center;
  font-size: 1rem;
  color: var(--shade5);
}
.sectionTitle {
  text-align: center;
  font-weight: 700;
  color: var(--purpdark);
  .titleBreak {
    font-weight: 400;
    color: var(--green);
  }
}
#sliderWrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow: auto;
}
.sliderCard {
  overflow: hidden;
  flex: 0 0 auto;
  border-radius: 10px;
  width: calc(100vw / 3 - 50px);
  padding: 50px;
  background-color: var(--shade1);
  .title,
  .name {
    font-weight: 700;
    color: var(--purpdark);
  }
  .description {
    font-weight: 600;
    color: var(--shade5);
  }
  .profession {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--shade5);
  }

  .profileSection {
    display: flex;
    .imgContainer {
      overflow: hidden;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      margin-right: 30px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .textContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>
