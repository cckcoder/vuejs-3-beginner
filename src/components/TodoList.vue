<template>
    <ul>
      <li 
        v-for="todo in sortTodos" 
        :key="todo.id"
        @click="$emit('handleActive', todo.id)"
        :class="{ 'task-done': todo.isComplete }"
      >
        {{ todo.title }} -- 
        <span>{{ todo.descript }}</span>
      </li>
    </ul>
</template>

<script setup>

defineProps({
  sortTodos: {
    type: Object,
    required: true
  }
}) 

defineEmits([
  'handleActive'
])

</script>
