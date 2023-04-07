<template>
    <ul>
      <li 
        v-for="todo in store.sortTodos" 
        :key="todo.id"
        :class="{ 'task-done': todo.isComplete }"
      >
        {{ todo.title }} -- 
        <span>
          <a @click="store.handleToggle(todo.id)">
            &check;
          </a>
          &#124;
          <RouterLink :to="{ name: 'todo-detail', params: { id: todo.id } }">
            Detail
          </RouterLink>
          &#124;
          <a 
            @click="store.delTodo(todo.id)"
            class="del-todo"
          >
            &cross;
          </a>
        </span>
      </li>
    </ul>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()

</script>

<style scoped>
ul {
  font-size: 20px;
}

span {
  padding: 2px;
}

.del-todo {
  color: tomato;
}

</style>
