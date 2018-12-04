import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

/* eslint-disable no-param-reassign */
export default new Vuex.Store({
  state: {
    items: {
      todo: [],
      inProgress: [],
      done: []
    }
  },
  actions: {
    addItem(context, item) {
      axios.post('/api/task', item)
        .then((response) => {
          context.commit('addItem', response.data);
        });
    }
  },
  mutations: {
    addItem(state, item) {
      state.items.todo.push(item);
    },
    updateItems(state, { items, id }) {
      state.items[id] = items;
    }
  }
});
