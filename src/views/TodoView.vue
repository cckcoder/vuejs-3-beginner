<template>
  <div>
    <h1>My Todo List</h1>
    <form @submit.prevent="store.submitTodo">
      <input 
        type="text" 
        v-model="store.todoData.title" 
        placeholder="Add title here"
      >
      <textarea  
        style="width: 100%;"
        v-model="store.todoData.descript"
        placeholder="Add Description here"
      >
      </textarea>
      <button class="btn-submit">Submit</button>
    </form>

    <hr>

    <TodoList></TodoList>

  </div>
</template>

<script setup>
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/stores/todo.js'

const store = useTodoStore()

</script>

<style>
ul {
  cursor: pointer;
}

li {
  padding: 5px;
}

.task-done {
  text-decoration: line-through;
}

.btn-submit {
  margin: 5px;
  padding: 5px;
  width: 100%;
}

</style>

