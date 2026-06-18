<template>
    <div class="buttons">
        <button @click="$emit('increment')" class="btn plus">+1</button>
        <button @click="$emit('decrement')" class="btn minus">-1</button>
        <button @click="$emit('reset')" class="btn reset">Reset</button>
    </div>
</template>

<script>
export default {
    name: 'CounterButtons',
    emits: ['increment', 'decrement', 'reset']
}
</script>

<style scoped>
.buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
}

.btn {
    padding: 10px 18px;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-weight: bold;
}

.plus {
    background: #198754;
}

.minus {
    background: #dc3545;
}

.reset {
    background: #6c757d;
}
</style>