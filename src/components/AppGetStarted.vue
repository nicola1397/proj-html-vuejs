<script>
import { store } from "../store.js";

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
      <img src="../assets/images/maxcoach-shape-01.png" alt="" id="decor2" />
      <h3 class="sectionTitle">
        Start today for getting
        <span class="titleBreak">Online Certification</span>
      </h3>
      <h2 class="col-8 mainTitle">
        You can be your own guiding star with our help!
      </h2>
      <button class="btn" id="getStarted">
        <span class="text-white fw-bold">Get started now</span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--shade4);
}
.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 100px;
  #decor1 {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translate(0, -50%);
  }
  #decor2 {
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translate(0, -50%);
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
  .titleBreak {
    font-weight: 400;
    color: var(--green);
  }
}
#getStarted {
  height: 50px;
  font-size: 0.8rem;
  font-weight: 800;
  margin: 20px;
  background-color: var(--green);
  padding: 10px 50px;

  &:hover {
    transform: scale(1.05);
    background-color: var(--purpdark);
  }
}
</style>
