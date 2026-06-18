<template>
    <li class="product-item">
        <div>
            <strong>{{ product.name }}</strong>
            <br>
            {{ product.price }} zł
        </div>

        <span
            :class="product.available ? 'available' : 'unavailable'"
        >
            {{ product.available ? 'Dostępny' : 'Niedostępny' }}
        </span>
    </li>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>