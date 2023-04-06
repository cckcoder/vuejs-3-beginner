<template>
  <div>
    <h1>My Todo List</h1>
    <ul>
      <li>
        Todo 1 -- <span>Description</span>
      </li>
      <li>
        Todo 2 -- <span>Description</span>
      </li>
      <li>
        Todo 3 -- <span>Description</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, title: 'Drink Coffee', descrip: 'Awesome' },
  { id: 2, title: 'Learn Vue3', descrip: 'Vue js very cool' },
  { id: 3, title: 'Play with cat', descrip: 'Cat is my lovely pet!' },

])
</script>

