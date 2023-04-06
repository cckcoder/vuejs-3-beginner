<template>
  <div>
    <h1>My Todo List</h1>
    <form @submit.prevent="submitTodo">
      <input 
        type="text" 
        v-model="todoData.title" 
        placeholder="Add title here"
      >
      <textarea  
        style="width: 100%;"
        v-model="todoData.descript"
        placeholder="Add Description here"
      >
      </textarea>
      <button class="btn-submit">Submit</button>
    </form>

    <hr>

    <TodoDetail
      :sortTodos=sortTodos 
    >
    </TodoDetail>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TodoDetail from '@/components/TodoDetail.vue'

const todos = ref([
  { id: 1, title: 'Drink Coffee', descript: 'Awesome', isComplete: false },
  { id: 2, title: 'Learn Vue3', descript: 'Vue js very cool', isComplete: false },
  { id: 3, title: 'Play with cat', descript: 'Cat is my lovely pet!', isComplete: false },
])

const sortTodos = computed(() => {
  return todos.value.reverse()
})

const todoData = ref({
  title: '',
  descript: ''
})

const handleToggle = (index) => {
  todos.value[index].isComplete = !todos.value[index].isComplete
}

const submitTodo = () => {

  todos.value.push(todoData.value)

  todoData.value = ref({
    title: '',
    descript: ''
  })
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

.btn-submit {
  margin: 5px;
  padding: 5px;
  width: 100%;
}

</style>

