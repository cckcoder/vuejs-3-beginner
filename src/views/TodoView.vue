<template>
  <div>
    <h1>My Todo List</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }} -- 
        <span>{{ todo.descript }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, title: 'Drink Coffee', descript: 'Awesome', isComplete: false },
  { id: 2, title: 'Learn Vue3', descript: 'Vue js very cool', isComplete: false },
  { id: 3, title: 'Play with cat', descript: 'Cat is my lovely pet!', isComplete: false },

])
</script>

