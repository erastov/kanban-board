<template>
  <div class="board">
    <div class="row">
        <div class="col-md">
          <task-lane id="todo" title="Запланировано" :items="todoItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="inProgress" title="В работе" :items="inProgressItems"></task-lane>
        </div>
        <div class="col-md">
          <task-lane id="done" title="Готово" :items="doneItems"></task-lane>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskLane from './TaskLane';

export default {
  name: 'KanbanBoard',
  components: {
    'task-lane': TaskLane
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    doneItems: s => s.items.done
  }),
  created() {
    this.$store.dispatch('loadData');
  }
};
</script>

