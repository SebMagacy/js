<template>
    <div class="box">
        <h2>👋 Witaj w komponencie</h2>

        <button class="btn" @click="showDescription = !showDescription">
            {{ showDescription ? 'Ukryj opis' : 'Pokaż opis' }}
        </button>

        <div v-if="showDescription" class="description">
            <p>
                To jest osobny fragment aplikacji utworzony jako komponent Vue.js.
                Komponent posiada własny stan i może reagować na działania użytkownika.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WelcomeBox',

    data() {
        return {
            showDescription: false
        }
    }
}
</script>