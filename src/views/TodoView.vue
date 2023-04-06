<template>
  <div>
    <h1>My Todo List</h1>
    <ul>
      <li 
        v-for="(todo, index) in todos" 
        :key="todo.id"
        @click="handleToggle(index)"
        :class="{ 'task-done': todo.isComplete }"
      >
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

const handleToggle = (index) => {

  todos.value[index].isComplete = !todos.value[index].isComplete
}
</script>

<style scoped>
ul {
  cursor: pointer;
}

li {
  padding: 5px;
}

.task-done {
  text-decoration: line-through;
}

</style>

