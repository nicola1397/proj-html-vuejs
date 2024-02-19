<script>
import { store } from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <section>
    <div class="container-md" id="guide">
      <div id="sectionWrapper">
        <div class="col-8 p-5" id="videoPreview">
          <!-- DECORATIONS -->
          <img src="../assets/images/svg/cloud.svg" alt="" id="decor3" />

          <img
            src="../assets/images/maxcoach-shape-05.png"
            alt=""
            id="decor1"
          />

          <img
            src="../assets/images/maxcoach-shape-07.png"
            alt=""
            id="decor2"
          />

          <!-- IMAGE CONTAINER -->
          <div class="imgContainer">
            <img
              src="../assets/images/home-2-popup-video-poster.jpg"
              alt=""
              class="thumbnail"
            />
            <img
              src="../assets/images/icon-youtube-play.png"
              alt=""
              id="decor4"
            />
          </div>
        </div>
        <div class="col-4 p-5 vert-center">
          <h5 class="sectionSubtitle">
            GET STARTED <span class="subtitleBreak">EFFORTLESSLY</span>
          </h5>
          <h1 class="sectionTitle mb-5">
            Enjoy Our <span class="titleBreak">Companionship</span>
          </h1>
          <p class="sectionDetail">
            Sneek peek into what has in store for you on our online teaching and
            mentoring portal. Seek for some hidden hints of early-bird rewards
            as well.
          </p>
          <span id="sampleLink">
            <a href="#"
              >Download free guidebook <i class="bi bi-arrow-right"></i></a
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#sampleLink {
  display: block;
  color: var(--shade5);
  font-weight: 600;
  font-size: 0.9rem;
  a {
    color: var(--green);
    text-decoration: none;
    border-bottom: 1px solid var(--shade4);
    &:visited {
      color: var(--green);
      text-decoration: none;
    }
  }
}
section {
  background-color: var(--shade1);
}
#guide {
  padding: 120px 0;
}
.sectionSubtitle {
  font-size: 1rem;
  color: var(--shade5);
  .subtitleBreak {
    font-weight: 700;
    color: var(--purpdark);
  }
}
.sectionTitle {
  font-weight: 700;
  color: var(--purpdark);
  .titleBreak {
    display: block;
    font-weight: 400;
    color: var(--green);
  }
}
.sectionDetail {
  color: var(--shade5);
  font-size: 0.9rem;
  font-weight: 500;
}
#sectionWrapper {
  display: flex;
  flex-wrap: wrap;
}
.vert-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.imgContainer {
  flex-shrink: 1;
  position: relative;
  align-self: center;
  border-radius: 10px;
  overflow: hidden;
}
.thumbnail {
  width: 100%;
}
#videoPreview {
  position: relative;
  #decor1 {
    position: absolute;
    left: -5%;
    top: 17%;
  }
  #decor2 {
    position: absolute;
    right: 3%;
    bottom: -5%;
  }
  #decor3 {
    position: absolute;
    filter: invert(85%) sepia(17%) saturate(740%) hue-rotate(353deg)
      brightness(97%) contrast(84%);

    transform: scale(0.8);
    top: -10%;
    left: -5%;
    z-index: 0;
  }
  #decor4 {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
