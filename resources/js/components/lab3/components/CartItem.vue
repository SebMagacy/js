<template>
    <div class="cart-item">
        <div>
            <strong>{{ item.name }}</strong>
            <p>
                Cena: {{ item.price }} zł |
                Ilość: {{ item.quantity }} |
                Razem: {{ item.price * item.quantity }} zł
            </p>
        </div>

        <div class="cart-actions">
            <button @click="$emit('decrease', item.id)">-</button>
            <button @click="$emit('increase', item.id)">+</button>
            <button class="remove" @click="$emit('remove', item.id)">
                Usuń
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    emits: ['increase', 'decrease', 'remove']
}
</script>