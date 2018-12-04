<template>
  <div class="card">
      <h3 class="card-header">{{ title }}</h3>
      <div class="card-body">
        <draggable v-model="draggables" :options="{ group: 'default' }">
          <div v-for="item in items" :key="item.id">
              <item :item="item"></item>
          </div>
        </draggable>
      </div>
      <div class="card-footer text-muted">
          {{itemCount}}
      </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import TaskLaneItem from './TaskLaneItem';

export default {
  name: 'TaskLane',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskLaneItem,
    draggable: Draggable
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 задача';
      if ([2, 3, 4].includes(this.items.length)) return `${this.items.length} задачи`;
      return `${this.items.length} задач`;
    },
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$store.dispatch('updateItems', {
          items,
          id: this.id
        });
      }
    }
  }
};
</script>

<style>
.card-body > * {
  min-height: 50px;
}
</style>
