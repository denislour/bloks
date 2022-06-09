import { createStore } from "vuex";

export default createStore({
  state: {
    is_active_menu: false,
    posts: [],
    auth: [],
    total_post: 0,
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
  },
  actions: {
    ToggleMenu({ commit }) {
      commit("TOGGLE_MENU");
    },
  },
  modules: {},
});
