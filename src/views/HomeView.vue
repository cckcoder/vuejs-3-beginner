<script setup>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('onMounted')
})

onUpdated(() => {
  console.log('onUpdated')
})

onUnmounted(() => {
  console.log('onUnmounted')
})

const count = ref(0)
const title = ref('My Counter App')

const increment = (amount) => {
    count.value += amount
}

const decrement = (amount) => {
    count.value -= amount
}

const oddOrEvent = computed(() => {
    if (count.value % 2 == 0) return 'event'
    return 'odd'
})

const doubleNumber = computed(() => {
    return count.value * 2
})

</script>

<template>
    <div class="counter">
        <h1>Welcome Home</h1>
        <h2>{{ title }}</h2>
        <div>
            <button class="btn-counter" @click="decrement(3)">--</button>
            <button class="btn-counter" @click="decrement(1)">-</button>
            {{ count }} 
            <button class="btn-counter" @click="increment(1)">+</button>
            <button class="btn-counter" @click="increment(3)">++</button>
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
        <h3>The number is: {{ oddOrEvent }}</h3>
        <hr>
        <h3>Double Number is: {{ doubleNumber }}</h3>
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
