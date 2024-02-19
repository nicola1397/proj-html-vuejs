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
    axios.get(`${store.serverURI}/partners`).then((res) => {
      store.sponsors = res.data;
    });
  },
};
</script>

<template>
  <div class="container-md" id="jumbo">
    <div class="row">
      <div class="col-5 d-flex align-items-center">
        <div>
          <h1>Distant learning for further expansion</h1>
          <p>
            Learning is a life-long journey that in fact we never find the
            terminate stop. Stop searching, enjoy the process.
          </p>
          <button class="btn p-3" id="downloadButton">
            <i class="bi bi-download text-white me-3"></i
            ><span class="text-white fw-bold">Download free guide</span>
          </button>
          <span id="sampleLink"
            >Have questions?
            <a href="#">Get Free Sample <i class="bi bi-arrow-right"></i></a
          ></span>
        </div>
      </div>
      <div class="col-7" id="rightCol">
        <div class="jumboImg">
          <img
            src="../assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
            alt=""
          />
        </div>
        <div id="imageDecor">
          <div id="decor1">
            <img src="../assets/images/maxcoach-shape-08.png" alt="" />
            <img src="../assets/images/maxcoach-shape-08.png" alt="" />
          </div>
          <img
            src="../assets/images/maxcoach-shape-07.png"
            alt=""
            id="decor3"
          />
          <img
            src="../assets/images/maxcoach-shape-02.png"
            alt=""
            id="decor4"
          />
        </div>
      </div>
    </div>
    <div id="sponsors">
      <div v-for="sponsor in store.sponsors">
        <img :src="`src/assets/images/${sponsor.image}`" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#jumbo {
  height: calc(100vh - 80px);
  background-color: var(--shade1);
  padding: 40px 0;
  #rightCol {
    position: relative;

    #decor1 {
      position: absolute;
      top: 30%;
      z-index: 0;
      img {
        display: block;
        margin: 10px;
      }
    }

    #decor3 {
      position: absolute;
      bottom: 0;
      right: 20%;
    }
    #decor4 {
      position: absolute;
      right: -10px;
      top: 20%;
    }
    .jumboImg {
      position: relative;
      z-index: 2;
      width: calc(100vw / 3.3);
      height: calc(100vw / 3.3);
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      overflow: hidden;
    }
  }
}
#downloadButton {
  background-color: var(--green);
  margin: 20px 0;
  &:hover {
    transform: scale(1.05);
    background-color: var(--purpdark);
  }
}
h1 {
  color: var(--purpdark);
  font-weight: 700;
  font-size: 3rem;
}
p {
  color: var(--shade5);
  font-weight: 600;
  font-size: 1rem;
  margin: 20px 0;
}

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

#sponsors {
  margin: 80px 0;
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    img {
      align-self: center;
      opacity: 0.5;
      &:hover {
        transform: scale(1.2);
        opacity: 1;
        cursor: pointer;
      }
    }
  }
}
</style>
