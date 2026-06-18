<template>
<h1>Zadanie 6</h1>
    <div class="box">

        <h3>Koszyk zakupowy</h3>

        <ProductList
            :products="products"
            @add-to-cart="addToCart"
        />

        <h3>Koszyk</h3>

        <p v-if="cart.length === 0" class="empty">
            Koszyk jest pusty.
        </p>

        <div v-else>
            <CartItem
                v-for="item in cart"
                :key="item.id"
                :item="item"
                @increase="increaseQuantity"
                @decrease="decreaseQuantity"
                @remove="removeFromCart"
            />

            <div class="summary">
                Łączna wartość koszyka:
                <strong>{{ totalPrice }} zł</strong>
            </div>
        </div>
    </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import CartItem from './components/CartItem.vue'

export default {
    components: {
        ProductList,
        CartItem
    },

    data() {
        return {
            products: [
                { id: 1, name: 'Laptop', price: 3500 },
                { id: 2, name: 'Mysz', price: 80 },
                { id: 3, name: 'Klawiatura', price: 150 },
                { id: 4, name: 'Monitor', price: 900 }
            ],
            cart: []
        }
    },

    computed: {
        totalPrice() {
            return this.cart.reduce((sum, item) => {
                return sum + item.price * item.quantity
            }, 0)
        }
    },

    methods: {
        addToCart(product) {
            const existingProduct = this.cart.find(item => item.id === product.id)

            if (existingProduct) {
                existingProduct.quantity++
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                })
            }
        },

        increaseQuantity(id) {
            const product = this.cart.find(item => item.id === id)

            if (product) {
                product.quantity++
            }
        },

        decreaseQuantity(id) {
            const product = this.cart.find(item => item.id === id)

            if (product && product.quantity > 1) {
                product.quantity--
            }
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id)
        }
    }
}
</script>