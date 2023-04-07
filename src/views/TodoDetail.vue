<template>
  <div>
    <h1>Todo--Detail</h1>
    <hr>
    <p>Display the content of post with ID {{ $route.params.id }}</p>
    <div>
      <button @click="goHome">Go home</button>
      <button @click="goPrevious">Previous Page</button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

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
