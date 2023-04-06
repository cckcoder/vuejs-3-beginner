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
      @handleActive=handleToggle
    >
    </TodoDetail>

  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import TodoDetail from '@/components/TodoDetail.vue'

const todos = ref([
  { id: 1, title: 'Drink Coffee', descript: 'Awesome', isComplete: false },
  { id: 2, title: 'Learn Vue3', descript: 'Vue js very cool', isComplete: false },
  { id: 3, title: 'Play with cat', descript: 'Cat is my lovely pet!', isComplete: false },
])

const sortTodos = computed(() => {
  return todos.value.slice().reverse()
})

const todoData = reactive({
  title: '',
  descript: ''
})

const handleToggle = (id) => {
  
  todos.value.map((todo) => {
    if(todo.id === id) {
      todo.isComplete = !todo.isComplete
    }
  })

  //todos.value[index].isComplete = !todos.value[index].isComplete
}

const submitTodo = () => {
  const id = todos.value.length + 1

  todos.value.push({
    id: id,
    title: todoData.title,
    descript: todoData.descript,
  })

  todoData.title = ''
  todoData.descript = ''
}
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

