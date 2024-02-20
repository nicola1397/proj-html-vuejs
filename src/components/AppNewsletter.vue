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
    <div class="container">
      <img src="../assets/images/maxcoach-shape-02.png" alt="" id="decor1" />
      <img src="../assets/images/maxcoach-shape-08.png" alt="" id="decor2" />
      <h3 class="sectionTitle mb-3">
        Subscribe <span class="titleBreak">Newsletters</span>
      </h3>
      <h5 class="sectionSubtitle col-5">
        Enter your email address to register to our newsletter subscription
        delivered on a regular basis!
      </h5>
      <div class="input mt-5 col-5">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <button class="btn subscribe">Subscribe</button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  #decor1 {
    position: absolute;
    right: 5%;
    top: 50%;
  }
  #decor2 {
    position: absolute;
    right: 5%;
    top: 20%;
    transform: rotate(30deg);
  }
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
.input {
  position: relative;
  height: 50px;
  background-color: var(--shade4);
  padding: 10px;
  border-radius: 5px 0 0 5px;

  #email {
    background-color: transparent;
    border: none;
    height: 100%;
    &:focus {
      outline: none;
    }
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--green);
    height: 100%;
    padding: 0 25px;
    border-radius: 0 5px 5px 0;
    color: white;
    font-size: 0.8rem;
    font-weight: 800;
    &:hover {
      background-color: var(--purpdark);
    }
  }
}
</style>
