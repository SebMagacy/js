<template>
    <div>
        <h3>Lista produktów</h3>

        <div
            v-for="product in products"
            :key="product.id"
            class="product"
        >
            <div>
                <strong>{{ product.name }}</strong>
                <p>{{ product.price }} zł</p>
            </div>

            <button @click="$emit('add-to-cart', product)">
                Dodaj do koszyka
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },

    emits: ['add-to-cart']
}
</script>