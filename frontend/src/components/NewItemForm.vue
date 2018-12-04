<template>
    <div class="add-item">
        <form action="#" method="post" v-on:submit.prevent="submitForm">
            <input type="text" v-model="itemText" placeholder="Добавить задачу в журнал">
        </form>
    </div>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemText: ''
    };
  },
  methods: {
    submitForm() {
      if (this.itemText) {
        this.$store.dispatch('addItem', {
          text: this.itemText,
          type: 'todo'
        });

        this.itemText = '';
      }
    }
  }
};
</script>

<style>
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}

.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}

.add-item {
  margin: 30px 0;
}
</style>
