<template>
  <div class="backlog-view">
    <new-item></new-item>
    <div class="card" v-for="item in items" :key="item.id">
        <div class="card-block">
          <h5 class="card-title"><span class="text-muted">#{{item.id}}</span>
          {{item.text}}
            <span :class="badgeClass(item)">{{badgeText(item)}}</span>
            <span :class="priorityClass[item.priority]">
              <v-icon dark>{{priorityIcon[item.priority]}}</v-icon>
            </span>
          </h5>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewItemForm from './NewItemForm';

const badgeDetail = {
  todo: {
    text: 'запланировано',
    class: 'badge badge-light'
  },

  inProgress: {
    text: 'в работе',
    class: 'badge badge-info'
  },

  done: {
    text: 'готово',
    class: 'badge badge-success'
  }
};

export default {
  name: 'Backlog',
  data() {
    return {
      priorityClass: {
        1: 'badge badge-danger',
        2: 'badge badge-primary',
        3: 'badge badge-warning',
        4: 'badge badge-info',
      },
      priorityIcon: {
        1: 'block',
        2: 'warning',
        3: 'arrow_upward',
        4: 'arrow_downward'
      }
    };
  },
  components: {
    'new-item': NewItemForm
  },
  computed: mapState({
    items: s => [...s.items.todo, ...s.items.inProgress, ...s.items.done]
  }),
  methods: {
    itemLane(item) {
      if (this.$store.state.items.todo.includes(item)) {
        return 'todo';
      } else if (this.$store.state.items.inProgress.includes(item)) {
        return 'inProgress';
      }

      return 'done';
    },

    badgeText(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].text;
    },

    badgeClass(item) {
      const lane = this.itemLane(item);
      return badgeDetail[lane].class;
    }
  }
};
</script>
