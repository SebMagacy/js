<template>
    <main class="container py-4">
        <h1 class="text-xl font-semibold">Zadanie 2</h1>

        <UserCard
            name="Anna"
            :age="21"
            city="Częstochowa"
            :is-student="true"
        />

        <UserCard
            name="Jan"
            :age="24"
            :is-student="false"
        />
    </main>
</template>

<script>
import UserCard from './components/UserCard.vue'

export default {
    name: 'App',

    components: {
        UserCard
    }
}
</script>