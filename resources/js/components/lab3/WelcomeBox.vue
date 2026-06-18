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

<style scoped>
.box {
    max-width: 600px;
    margin: 20px auto;
    padding: 25px;
    border-radius: 12px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

h2 {
    margin-bottom: 20px;
}

.btn {
    background: #0d6efd;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 15px;
    transition: 0.3s;
}

.btn:hover {
    background: #0b5ed7;
}

.description {
    margin-top: 15px;
    padding: 15px;
    background: white;
    border-left: 4px solid #0d6efd;
    border-radius: 6px;
}
</style>