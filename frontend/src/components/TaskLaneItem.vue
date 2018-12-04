<template>
  <div class="card task-lane-item">
    <div class="card-block">
        <h5 class="card-title">
            <span class="text-muted">#{{item.id}}</span>
            {{item.text}}
          <span :class="priorityClass[item.priority]">
              <v-icon dark>{{priorityIcon[item.priority]}}</v-icon>
            </span>
        </h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskLaneItem',
  props: ['item'],
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
  }
};
</script>

<style>
.card.task-lane-item {
  background: #627180;
}
</style>
