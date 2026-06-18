<template>
    <div>
        <h1>{{ zadanie }}</h1>
        <h2>{{ imie }}</h2>

        <p><strong>Kierunek:</strong> {{ kierunek }}</p>
        <p><strong>Grupa:</strong> {{ grupa }}</p>

        <p>
            Jestem studentem kierunku Informatyka.
            Interesuję się programowaniem aplikacji webowych,
            Laravel oraz JavaScript.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            zadanie: 'Zadanie 1',
            imie: 'Sebastian Rogacki',
            kierunek: 'Informatyka',
            grupa: '1'
        }
    }
}
</script>