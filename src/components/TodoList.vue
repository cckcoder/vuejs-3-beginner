<template>
    <ul>
      <li 
        v-for="todo in sortTodos" 
        :key="todo.id"
        :class="{ 'task-done': todo.isComplete }"
      >
        {{ todo.title }} -- 
        <span>
          <a @click="$emit('handleActive', todo.id)">
            &check;
          </a>
          &#124;
          <RouterLink :to="{ name: 'todo-detail', params: { id: todo.id } }">
            Edit
          </RouterLink>
        </span>
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

<style scoped>
ul {
  font-size: 20px;
}

span {
  padding: 2px;
}

</style>
