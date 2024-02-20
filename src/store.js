import { reactive } from "vue";

export const store = reactive({
  serverURI: "http://localhost:3000",
  navLinks: [],
  sponsors: [],
  courses: [],
  programs: [],
  reviews: [],
  footerData: [],
  aboutUs: [],
  blogs: [],
});
