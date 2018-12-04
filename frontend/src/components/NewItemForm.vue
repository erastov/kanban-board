<template>
  <v-container grid-list-md fluid>
    <v-layout justify-start row wrap>
      <v-flex xs1>
        <v-select
          dark
          :items="[1, 2, 3, 4, 5]"
          v-model="priority"
          label="Приоритет"
        ></v-select>
      </v-flex>
      <v-flex xs5>
        <v-text-field
          dark
          v-model="itemText"
          label="Задача"
          @keyup.enter="submit"
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn
          round
          dark
          @click="submit"
          color="red"
        >
          Добавить
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NewItemForm',
  data() {
    return {
      itemText: '',
      priority: 5
    };
  },
  methods: {
    submit() {
      if (this.itemText) {
        this.$store.dispatch('addItem', {
          text: this.itemText,
          type: 'todo',
          priority: this.priority
        });

        this.itemText = '';
      }
    }
  }
};
</script>

<style>
  .v-menu {
    margin-left: -260px;
    margin-top: -180px;
  }
</style>
