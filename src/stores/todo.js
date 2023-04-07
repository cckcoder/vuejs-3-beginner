import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import TodoService from '../services/TodoService'


export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  const todoId = ref(0)
  const isActive = ref(false)

  const sortTodos = computed(() => {
    return todos.value.reverse()
  })

  const getTodos = () => {
    TodoService.getTodo()
    .then((resp) => {
      todos.value = resp.data
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getTodoById = computed(() => {
    return todos.value.find((todo) => todo.id === todoId.value)
  })

  const todoData = reactive({
    title: '',
    description: ''
  })

  const handleToggle = (id) => {
    
    const todoObj = todos.value.find((todo) => todo.id === id)
    todoObj.is_complete = !todoObj.is_complete
    TodoService.putTodo(todoObj)
  }

  const submitTodo = () => {
    const todoObj = {
      title: todoData.title,
      description: todoData.description,
      is_complete: false
    }

    TodoService.postTodo(todoObj)
    .then((resp) =>{
      todos.value.push(resp.data)
    })

    todoData.title = ''
    todoData.description = ''
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
    isActive,
    getTodos
  }
})
