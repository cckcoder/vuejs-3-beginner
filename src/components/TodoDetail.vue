<template>
    <ul>
      <li 
        v-for="(todo, index) in sortTodos" 
        :key="todo.id"
        @click="$emit('handleActive', index)"
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
