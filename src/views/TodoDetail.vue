<template>
  <div>
    <h1>Todo--Detail</h1>
    <hr>
    <p>Display the content of post with ID {{ $route.params.id }}</p>

    <div v-if="store.getTodoById.title">
      <form @submit.prevent="store.submitEditTodo">
        <input 
          type="text" 
          v-model="store.getTodoById.title"
        >
        <input 
          type="text" 
          v-model="store.getTodoById.descript"
        >
        <button class="btn-edit">Submit Edit</button>
        <p v-if="store.isActive"
          class="info"
        >Update Successfully!!</p>
      </form>
    </div>

    <hr>
    <NavBottom></NavBottom>
  </div>
</template>

<script setup>
import {  onBeforeMount } from 'vue'
import { useTodoStore } from '@/stores/todo.js'
import { useRoute } from 'vue-router'
import NavBottom from '@/components/NavBottom.vue'

onBeforeMount(() => {
  store.todoId = parseInt(route.params.id)
})

const store = useTodoStore()

const route = useRoute()
  

</script>

<style>
button {
  margin-right: 5px;
} 

.btn-edit {
  width: 100%;
  padding: 5px;
  background-color: skyblue;
  font-weight: bold;
}

.info {
  text-align: center;
  color: green;
  font-weight: bold;
}
</style>
