<template>
<h1>Zadanie 1</h1>
    <div class="box">

        <h3>Użytkownicy z API</h3>

        <input
            v-model="search"
            type="text"
            placeholder="Wpisz nazwę użytkownika"
        >

        <p v-if="loading">Ładowanie danych...</p>
        <p v-if="error" class="error">{{ error }}</p>

        <p v-if="!loading && !error && filteredUsers.length === 0">
            Brak wyników
        </p>

        <ul v-if="!loading && !error && filteredUsers.length > 0">
            <li v-for="user in filteredUsers" :key="user.id">
                <strong>{{ user.name }}</strong><br>
                Email: {{ user.email }}<br>
                Miasto: {{ user.address.city }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            users: [],
            search: '',
            loading: false,
            error: ''
        }
    },

    mounted() {
        this.loadUsers()
    },

    computed: {
        filteredUsers() {
            return this.users.filter(user =>
                user.name.toLowerCase().includes(this.search.toLowerCase())
            )
        }
    },

    methods: {
        async loadUsers() {
            this.loading = true
            this.error = ''

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')

                if (!response.ok) {
                    throw new Error('Błąd HTTP: ' + response.status)
                }

                this.users = await response.json()
            } catch (error) {
                this.error = 'Nie udało się pobrać użytkowników'
            } finally {
                this.loading = false
            }
        }
    }
}
</script>