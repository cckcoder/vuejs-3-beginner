<script setup>
import { ref } from 'vue'

const count = ref(0)
const title = ref('My Counter App')

const increment = () => {
    count.value++
}

const decrement = () => {
    count.value--
}

</script>

<template>
    <div class="counter">
        <h1>Welcome Home</h1>
        <h2>{{ title }}</h2>
        <div>
            <button class="btn-counter">--</button>
            <button class="btn-counter" @click="decrement">-</button>
            {{ count }} 
            <button class="btn-counter" @click="increment">+</button>
            <button class="btn-counter">++</button>
        </div>
        <div>
            <input 
                v-model="title"
                type="text" 
                name="title-model"
            >
            <input 
                v-model.number="count"
                type="number" 
                name="title-model"
            >
        </div>
    </div>
</template>

<style scope>
.counter button {
    font-size: 1.5rem;
}

.counter {
    text-align: center;
}

.btn-counter {
    margin: 3px;
}

input {
    width: 100%;
    padding: 5px;
    margin-bottom: 5px;
}
</style>
