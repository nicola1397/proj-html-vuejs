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
    axios.get(`${store.serverURI}/programs`).then((res) => {
      store.programs = res.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="container-md" id="programs">
      <h5 class="sectionSubtitle">MAXCOACH AVAILABLE COURSES</h5>
      <h3 class="sectionTitle mb-5">
        Access <span class="titleBreak">Smart Tutoring</span> Program For
        Benefits.
      </h3>
      <div id="programsWrapper">
        <div v-for="program in store.programs" class="program">
          <div class="imgCol">
            <img :src="`src/assets/images/${program.image}`" />
          </div>
          <h5 class="programTitle">{{ program.title }}</h5>
          <p class="programDetail">{{ program.description }}</p>
          <span class="redirectLink"
            ><a href="#"
              >{{ program.redirect }} <i class="bi bi-arrow-right"></i></a
          ></span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--shade1);
}
#programs {
  display: flex;
  flex-direction: column;
  padding: 60px 0;
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

.programTitle {
  font-weight: 700;
  color: var(--purpdark);
}
.programDetail {
  color: var(--shade5);
  font-size: 0.9rem;
  font-weight: 500;
}
#programsWrapper {
  display: flex;
  flex-wrap: wrap;
  .program {
    width: calc(100% / 3 - 20px);
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
.imgCol {
  margin: 20px 0;
}

.redirectLink {
  margin-top: auto;
  font-weight: 900;
  font-size: 0.8rem;
  a {
    color: var(--shade5);
    text-decoration: none;
    &:visited {
      color: var(--shade5);
      text-decoration: none;
    }
  }
}

#videoPreview {
  position: relative;
  .decorations {
    position: absolute;
  }
}
</style>
