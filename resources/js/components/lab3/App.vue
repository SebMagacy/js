<template>
        <h1>Zadanie 5</h1>
    <div class="box">
        <h3>Aplikacja produktów</h3>

        <ProductForm @add-product="addProduct" />

        <div class="filters">
            <input
                v-model="search"
                type="text"
                placeholder="Szukaj produktu po nazwie"
            >

            <select v-model="availabilityFilter">
                <option value="all">Wszystkie</option>
                <option value="available">Dostępne</option>
                <option value="unavailable">Niedostępne</option>
            </select>
        </div>

        <div class="stats">
            <p>
                Liczba wszystkich produktów:
                <strong>{{ products.length }}</strong>
            </p>

            <p>
                Liczba widocznych produktów:
                <strong>{{ filteredProducts.length }}</strong>
            </p>
        </div>

        <template v-if="filteredProducts.length === 0">
            <p class="empty">
                Brak produktów spełniających kryteria filtrowania.
            </p>
        </template>

        <template v-else>
            <ProductList :products="filteredProducts" />
        </template>
    </div>
</template>

<script>
import ProductForm from './components/ProductForm.vue'
import ProductList from './components/ProductList.vue'

export default {
    components: {
        ProductForm,
        ProductList
    },

    data() {
        return {
            search: '',
            availabilityFilter: 'all',
            nextId: 4,
            products: [
                { id: 1, name: 'Laptop', price: 3500, available: true },
                { id: 2, name: 'Mysz', price: 80, available: true },
                { id: 3, name: 'Klawiatura', price: 150, available: false }
            ]
        }
    },

    computed: {
        filteredProducts() {
            return this.products.filter(product => {
                const matchesName = product.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase())

                const matchesAvailability =
                    this.availabilityFilter === 'all'
                    || (this.availabilityFilter === 'available' && product.available)
                    || (this.availabilityFilter === 'unavailable' && !product.available)

                return matchesName && matchesAvailability
            })
        }
    },

    methods: {
        addProduct(product) {
            this.products.push({
                id: this.nextId,
                ...product
            })

            this.nextId++
        }
    }
}
</script>