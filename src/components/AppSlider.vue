<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
      activeIndex: 0,
      prevIndex: "",
      nextIndex: "",
      loaded: false,
    };
  },
  created() {
    axios.get(`${store.serverURI}/reviews`).then((res) => {
      store.reviews = res.data;
      this.setIndex;
    });
  },

  computed: {
    setIndex() {
      this.loaded = true;

      if (this.activeIndex == 0) {
        console.log("if 1");
        this.prevIndex = store.reviews.length - 1;
        this.nextIndex = this.activeIndex + 1;
      } else if (this.activeIndex == store.reviews.length - 1) {
        console.log("if 2");
        this.nextIndex == 0;
        this.prevIndex = this.activeIndex - 1;
      } else {
        this.nextIndex = this.activeIndex + 1;
        this.prevIndex = this.activeIndex - 1;
      }
      console.log(this.activeIndex);
      console.log(this.prevIndex);
      console.log(this.nextIndex);
    },
  },

  methods: {
    slideUp() {
      if (this.activeIndex == store.reviews.length - 1) {
        this.activeIndex = 0;
      } else {
        this.activeIndex++;
      }
      this.setIndex;
    },
    slideDown() {
      if (this.activeIndex == 0) {
        this.activeIndex = store.reviews.length - 1;
      } else {
        this.activeIndex--;
      }
      this.setIndex;
    },
  },
};
</script>
<!-- SLIDER PROJECT -->
<!-- slide with activeIndex in center position 
slide with index == activeIndex - 1 in left position 
slide with index == activeIndex + 1 in right position 
On hover 2 buttons, left and right -> index-- || or index++
-->
<template>
  <section>
    <div class="sliderSection">
      <div>
        <h5 class="sectionSubtitle">GREAT WORDS ABOUT MAXCOACH</h5>
        <h3 class="sectionTitle mb-5">
          Our <span class="titleBreak">top learner's</span> verbatim
        </h3>
      </div>
      <!-- WORKING SLIDER -->
      <div v-if="this.loaded" id="sliderWrapper">
        <div class="leftArrow" @click="slideDown">
          <i class="bi bi-caret-left-fill"></i>
        </div>
        <div class="rightArrow" @click="slideUp">
          <i class="bi bi-caret-right-fill"></i>
        </div>

        <!-- LEFT CARD -->
        <div class="sliderCard opacity-50">
          <h5 class="title mb-4">{{ store.reviews[this.prevIndex].title }}</h5>
          <p class="description">
            {{ store.reviews[this.prevIndex].description }}
          </p>
          <div class="profileSection">
            <div class="imgContainer">
              <img
                :src="`src/assets/images/${
                  store.reviews[this.prevIndex].image
                }`"
                alt=""
              />
            </div>
            <div class="textContainer">
              <h5 class="name">{{ store.reviews[this.prevIndex].name }}</h5>
              <span class="profession"
                >/ {{ store.reviews[this.prevIndex].profession }}</span
              >
            </div>
          </div>
        </div>
        <!-- CENTER CARD -->
        <div class="sliderCard">
          <h5 class="title mb-4">{{ store.reviews[activeIndex].title }}</h5>
          <p class="description">
            {{ store.reviews[activeIndex].description }}
          </p>
          <div class="profileSection">
            <div class="imgContainer">
              <img
                :src="`src/assets/images/${store.reviews[activeIndex].image}`"
                alt=""
              />
            </div>
            <div class="textContainer">
              <h5 class="name">{{ store.reviews[activeIndex].name }}</h5>
              <span class="profession"
                >/ {{ store.reviews[activeIndex].profession }}</span
              >
            </div>
          </div>
        </div>
        <!-- RIGHT CARD -->
        <div class="sliderCard opacity-50">
          <h5 class="title mb-4">{{ store.reviews[this.nextIndex].title }}</h5>
          <p class="description">
            {{ store.reviews[this.nextIndex].description }}
          </p>
          <div class="profileSection">
            <div class="imgContainer">
              <img
                :src="`src/assets/images/${
                  store.reviews[this.nextIndex].image
                }`"
                alt=""
              />
            </div>
            <div class="textContainer">
              <h5 class="name">{{ store.reviews[this.nextIndex].name }}</h5>
              <span class="profession"
                >/ {{ store.reviews[this.nextIndex].profession }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="this.loaded"
        class="text-center d-flex align-items-center justify-content-center"
      >
        <i
          v-for="(review, index) in store.reviews"
          class="bi bi-dot sliderBall"
          :id="index"
          :class="index == this.activeIndex ? `active` : ``"
        ></i>
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
  position: relative;
  justify-content: center;
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  overflow: hidden;
  &:hover {
    .leftArrow,
    .rightArrow {
      display: block;
    }
  }
}
.sliderCard {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 0 0 auto;
  border-radius: 10px;
  width: calc(100vw / 3 - 60px);
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
    margin-top: auto;
    display: flex;
    .imgContainer {
      flex: 0 0 auto;
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

.leftArrow {
  display: none;
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 3rem;
  z-index: 3;
  color: var(--purplight);
}
.rightArrow {
  display: none;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 3rem;
  z-index: 3;
  color: var(--purplight);
}

.sliderBall {
  font-size: 3rem;
  color: var(--shade5);
  &.active {
    color: var(--purpdark);
    font-size: 5rem;
  }
}
</style>
