import Vue from 'vue';
import Vuex from 'vuex';
import { unsplashCollection } from '../lib/unsplash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    refreshRate: 60,
    collectionID: '',
    images: []
  },
  getters: {
    collectionID(state) {
      return state.collectionID;
    },
    images(state) {
      return state.images;
    }
  },
  mutations: {
    update_collectionID(state, collectionID) {

      state.collectionID = collectionID;

      unsplashCollection(collectionID)
        .then(images => {
          state.images = images;
        })
        .catch(e => console.error(e));
    }
  },
  actions: {},
  modules: {}
});
