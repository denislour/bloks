import { createStore } from "vuex";
import sanity from "../client";

export default createStore({
  state: {
    is_active_menu: false,
    posts: [],
    auth: [],
    total_post: 0,
  },
  getters: {
    posts: (state) =>
      state.posts.sort(
        (a, b) =>
          new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
      ),
  },
  mutations: {
    TOGGLE_MENU(state, dir = null) {
      if (dir === "open") {
        state.is_active_menu = true;
      } else if (dir === "close") {
        state.is_active_menu = false;
      } else {
        state.is_active_menu = !state.is_active_menu;
      }
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
  },
  actions: {
    ToggleMenu({ commit }) {
      commit("TOGGLE_MENU");
    },
    FetchPosts({ commit }, limit = null) {
      const query = `*[_type == "post"] {..., author-> } | order(_createdAt desc) ${
        limit ? `[0...${limit}]` : ""
      }`;
      sanity.fetch(query).then((posts) => {
        commit("SET_POSTS", posts);
      });
    },
  },
  modules: {},
});
