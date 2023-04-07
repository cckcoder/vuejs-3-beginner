<template>
  <div>
    <button @click="goHome">Go home</button>
    <button @click="goPrevious">Previous Page</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => router.push({ name: 'home' })
const goPrevious = () => router.go(-1)

</script>
