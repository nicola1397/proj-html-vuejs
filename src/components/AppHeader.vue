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
    axios.get(`${store.serverURI}/navLinks`).then((res) => {
      store.navLinks = res.data;
    });
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg dark-bg">
    <div class="container-md">
      <div class="d-flex w-100 align-items-center justify-content-between">
        <!-- LOGO -->
        <a class="navbar-brand"
          ><img
            class="logo"
            src="../assets/images/dark-logo.png"
            alt="MaxCoach Logo"
        /></a>

        <div class="d-flex align-items-center">
          <!-- LINKS -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li v-for="link in store.navLinks" class="nav-item dropdown m-3">
              <a
                class="nav-text dropdown-toggle"
                :href="link.url"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ link.label }}
              </a>
              <!-- DROPDOWNS -->
              <ul class="dropdown-menu">
                <li v-for="page in link.menu">
                  <a class="dropdown-item" :href="page.url">{{ page.label }}</a>
                </li>
              </ul>
            </li>
          </ul>
          <!-- PROFILE -->
          <a href="#" class="m-3">
            <i class="bi bi-person-circle"></i>
          </a>
          <!-- SEARCH -->
          <div class="searchBar">
            <input
              class="form-control border-0"
              type="text"
              placeholder="Search..."
              id="search-input"
            />
            <span class="searchIcon">
              <button class="btn ms-n3" type="button">
                <i class="bi bi-search"></i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 80px;
  box-shadow: 0 0px 15px var(--shade4);
  .dropdown-menu {
    border-radius: 0;
    border: none;
    box-shadow: 0 3px var(--green);
  }
  & [role|="button"] {
    line-height: 80px;
  }
  a {
    text-decoration: none;
    &:visited {
      text-decoration: none;
      color: var(--shade5);
    }
    &:hover {
      color: var(--green);
      text-decoration: underline;
    }
  }
}
.logo {
  height: 25px;
  &:hover {
    cursor: pointer;
  }
}

.searchBar {
  position: relative;
  background-color: var(--shade2);
  border: none;
  #search-input {
    background-color: transparent;
  }
}
.searchIcon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  background-color: transparent;
  border: none;
  i {
    color: var(--green);
  }
}
</style>
