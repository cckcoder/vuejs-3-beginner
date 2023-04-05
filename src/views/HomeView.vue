<script>
export default {
    data() {
        return {
            count: 5,
            title: 'My Counter App'
        }
    },
}

</script>

<template>
    <div class="counter">
        <h1>Welcome Home</h1>
        <h2>{{ title }}</h2>
        <div>
            <button class="btn-counter">++</button>
            <button class="btn-counter">+</button>
            {{ count }} 
            <button class="btn-counter">-</button>
            <button class="btn-counter">--</button>
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
</style>
