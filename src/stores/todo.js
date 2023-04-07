import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'


export const useTodoStore = defineStore('todo', () => {
  const todos = ref([
    { id: 1, title: 'Drink Coffee', descript: 'Awesome', isComplete: false },
    { id: 2, title: 'Learn Vue3', descript: 'Vue js very cool', isComplete: false },
    { id: 3, title: 'Play with cat', descript: 'Cat is my lovely pet!', isComplete: false },
  ])

  const todoId = ref(0)
  const isActive = ref(false)

  const sortTodos = computed(() => {
    return todos.value.slice().reverse()
  })

  const getTodoById = computed(() => {
    return todos.value.find((todo) => todo.id === todoId.value)
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

  const submitEditTodo = () => {
    console.log(getTodoById.value.id)
    todos.value.map((todo) => {
      if(todo.id === getTodoById.value.id) {
        todo.title = getTodoById.value.title
        todo.descript = getTodoById.value.descript
      }
    })

    isActive.value = true
    setInterval(() => {
      isActive.value = !isActive.value 
    }, 3000);
    
  }

  const delTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }

  return {
    todos,
    sortTodos,
    todoData,
    handleToggle,
    submitTodo,
    getTodoById,
    todoId,
    delTodo,
    submitEditTodo,
    isActive
  }
})
