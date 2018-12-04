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
    updateItems(context, { items, id }) {
      let ok = true;
      items.forEach((item) => {
        item.type = id;
        axios.patch(`/api/task/${item.id}`, item)
          .catch(() => {
            ok = false;
          });
      });
      if (ok) {
        context.commit('updateItems', { items, id });
      }
    },
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
