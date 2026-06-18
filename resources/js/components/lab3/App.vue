<template>
<h1 class="text-xl font-semibold">Zadanie 4</h1>
    <div class="box">

        <p class="counter">Licznik: {{ count }}</p>

        <p :class="statusClass">
            {{ counterStatus }}
        </p>

        <CounterButtons
            @increment="increment"
            @decrement="decrement"
            @reset="resetCounter"
        />
    </div>
</template>

<script>
import CounterButtons from './components/CounterButtons.vue'

export default {
    name: 'App',
    components: {
        CounterButtons
    },
    data() {
        return {
            count: 0
        }
    },
    computed: {
        counterStatus() {
            if (this.count > 0) {
                return 'Wartość dodatnia'
            }

            if (this.count < 0) {
                return 'Wartość ujemna'
            }

            return 'Zero'
        },
        statusClass() {
            if (this.count > 0) {
                return 'positive'
            }

            if (this.count < 0) {
                return 'negative'
            }

            return 'zero'
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        },
        resetCounter() {
            this.count = 0
        }
    }
}
</script>

<style scoped>
.box {
    max-width: 500px;
    margin: 40px auto;
    padding: 25px;
    border-radius: 12px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.counter {
    font-size: 28px;
    font-weight: bold;
}

.positive {
    color: #198754;
    font-weight: bold;
}

.negative {
    color: #dc3545;
    font-weight: bold;
}

.zero {
    color: #6c757d;
    font-weight: bold;
}
</style>