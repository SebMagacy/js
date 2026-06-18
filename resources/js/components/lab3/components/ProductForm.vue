<template>
    <div class="product-form">
        <h3>Dodaj produkt</h3>

        <input v-model.trim="product.name" type="text" placeholder="Nazwa produktu">

        <input v-model.number="product.price" type="number" placeholder="Cena">

        <div class="checkbox-row">
            <input v-model="product.available" type="checkbox" id="available">

            <label for="available">
                Produkt dostępny
            </label>
        </div>

        <p v-if="error" class="error">
            {{ error }}
        </p>

        <button @click="saveProduct">
            Dodaj produkt
        </button>
    </div>
</template>

<script>
export default {
    emits: ['add-product'],

    data() {
        return {
            product: {
                name: '',
                price: 0,
                available: true
            },

            error: ''
        }
    },

    methods: {
        saveProduct() {

            if (!this.product.name.trim()) {
                this.error = 'Podaj nazwę produktu'
                return
            }

            if (this.product.price <= 0) {
                this.error = 'Cena musi być większa od 0'
                return
            }

            this.error = ''

            this.$emit('add-product', {
                ...this.product
            })

            this.product = {
                name: '',
                price: 0,
                available: true
            }
        }
    }
}
</script>