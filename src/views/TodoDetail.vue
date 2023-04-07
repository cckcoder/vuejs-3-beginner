<template>
  <div>
    <h1>Todo--Detail</h1>
    <hr>
    <p>Display the content of post with ID {{ $route.params.id }}</p>

    <div v-if="store.getTodoById.title">
      <p>{{ store.getTodoById.title }}</p>
      <p>{{ store.getTodoById.descript }}</p>
    </div>
    <div>
      <button @click="goHome">Go home</button>
      <button @click="goPrevious">Previous Page</button>
    </div>
  </div>
</template>

<script setup>
import {  onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/todo.js'

onBeforeMount(() => {
  store.todoId = parseInt(route.params.id)
})

const store = useTodoStore()

const route = useRoute()
const router = useRouter()
  
const goHome = () => router.push({ name: 'home' })

const goPrevious = () => router.go(-1)

</script>

<style scoped>
button {
  margin-right: 5px;
} 
</style>
