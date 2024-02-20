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
    axios.get(`${store.serverURI}/blogs`).then((res) => {
      store.blogs = res.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="row align-items-center">
        <div class="col-4">
          <h5 class="sectionSubtitle">ENJOYABLE INSIGHTS</h5>
          <h3 class="sectionTitle">
            Most Viewed <span class="titleBreak">Best Blogs</span>
          </h3>
          <ul>
            <li v-for="post in store.blogs">
              <div class="d-flex">
                <i class="bi bi-arrow-right-short"></i>
                <a :href="post.url"> {{ post.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-4 article">
          <div class="cards">
            <div class="imgContainer">
              <img src="../assets/images/artist-blog-03-480x352.jpeg" alt="" />
            </div>
            <div class="text">
              <h5 class="sectionSubtitle">ARTIST</h5>
              <h4>Brush Strokes Energize Trees in Paintings</h4>
              <span class="stats"
                ><i class="bi bi-calendar"></i> May 15, 2020</span
              >
              <span class="stats"><i class="bi bi-eye"></i> 688 views</span>
            </div>
          </div>
        </div>
        <div class="col-4 article">
          <div class="cards">
            <div class="imgContainer">
              <img src="../assets/images/artist-blog-01-480x352.jpg" alt="" />
            </div>
            <div class="text">
              <h5 class="sectionSubtitle">ARTIST</h5>
              <h4>Pocket-Sized Notebooks Hold Miniature Paintings</h4>
              <span class="stats"
                ><i class="bi bi-calendar"></i> May 15, 2020</span
              ><span class="stats"><i class="bi bi-eye"></i> 603 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background-color: var(--shade4);
  padding: 100px 0;
}

.article {
  padding: 30px;
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .imgContainer {
    img {
      width: 100%;
    }
  }
  .cards {
    background-color: var(--shade1);
    border-radius: 10px;
    overflow: hidden;
  }
  .text {
    padding: 30px;
  }
  h4 {
    font-size: 1.3rem;
    color: var(--purpdark);
    font-weight: 700;
    margin-bottom: 30px;
  }
  .stats {
    margin-right: 30px;
    color: var(--shade5);
  }
}
.sectionSubtitle {
  font-size: 1rem;
  color: var(--shade5);
}
.sectionTitle {
  font-weight: 700;
  color: var(--purpdark);
  margin-bottom: 40px;
  .titleBreak {
    font-weight: 400;
    color: var(--green);
  }
}

ul {
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 20px;
    &:hover * {
      color: var(--green) !important;
    }
  }

  a {
    text-decoration: none;
    color: var(--purpdark);
    font-weight: 700;
    font-size: 0.85rem;
    &:visited {
      text-decoration: none;
      color: var(--purpdark);
    }
  }
}
</style>
