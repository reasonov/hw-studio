import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageNumber: 0,
    windowWidth: 0,
    menuIsOpen: false,
    requestIsOpen: false
  },
  mutations: {
    changePage(state, data){
      state.pageNumber = data;
    },

    resizeWindow(state, data) {
      state.windowWidth = data;
    },

    menuToggle(state) {
      state.menuIsOpen = !state.menuIsOpen;
    },

    requestToggle(state, data) {
      state.requestIsOpen = data;
    }
  }
});
