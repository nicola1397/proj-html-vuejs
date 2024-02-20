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
    axios.get(`${store.serverURI}/courses`).then((res) => {
      store.courses = res.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="container-md" id="courses">
      <h5 class="sectionSubtitle">STIMULATED TO LEARN?</h5>
      <h3 class="sectionTitle mb-5">Featured Online Courses</h3>
      <div id="coursesWrapper">
        <div v-for="course in store.courses" class="course">
          <div class="imgCol">
            <div class="courseImg">
              <img :src="`src/assets/images/${course.image}`" alt="" />
            </div>
          </div>
          <div class="d-flex flex-column justify-content-center p-4">
            <h4 class="coursePrice">{{ course.price }}</h4>
            <h5 class="courseTitle">{{ course.title }}</h5>
            <div>
              <span class="courseDetail me-4"
                ><i class="bi bi-file-earmark-text me-1"></i
                >{{ course.lessons }} Lessons</span
              >
              <span class="courseDetail me-4"
                ><i class="bi bi-person me-1"></i
                >{{ course.students }} Students</span
              >
            </div>
          </div>
        </div>
      </div>
      <button class="btn" id="viewAll">
        <span class="text-white fw-bold"
          >View all courses <i class="bi bi-arrow-right"></i>
        </span>
      </button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--shade4);
}
#courses {
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
}
.coursePrice {
  font-weight: 700;
  color: var(--green);
}
.courseTitle {
  font-weight: 700;
  color: var(--purpdark);
}
.courseDetail {
  color: var(--shade5);
}
#coursesWrapper {
  display: flex;
  flex-wrap: wrap;
  .course {
    width: 50%;
    display: flex;
    padding: 20px;
  }
}

.imgCol {
  display: flex;
  align-items: center;
  .courseImg {
    border-radius: 50%;
    overflow: hidden;
    width: calc(100vw / 10 - 20px);
    height: calc(100vw / 10 - 20px);

    img {
      height: 100%;
    }
  }
}

#viewAll {
  margin: 40px auto;
  background-color: var(--green);
  padding: 10px 50px;
  &:hover {
    transform: scale(1.05);
    background-color: var(--purpdark);
  }
}
</style>
