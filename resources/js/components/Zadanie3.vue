<template>
    <div class="container">
        <h1  class="text-xl font-semibold">Zadanie 3</h1>

        <button
            @click="toggleMessage"
            :class="isVisible ? 'btn-green' : 'btn-red'"
        >
            {{ isVisible ? 'Ukryj komunikat' : 'Pokaż komunikat' }}
        </button>

        <p v-if="isVisible" class="message-visible">
            Komunikat jest obecnie widoczny.
        </p>

        <p v-else class="message-hidden">
            Komunikat został ukryty.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true
        }
    },

    methods: {
        toggleMessage() {
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<style>
.container {
    padding: 20px;
}

button {
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 15px;
}

.btn-green {
    background-color: green;
}

.btn-red {
    background-color: red;
}

.message-visible {
    color: green;
    font-weight: bold;
}

.message-hidden {
    color: red;
    font-weight: bold;
}
</style>