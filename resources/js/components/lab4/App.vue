<template>
    <div class="container">
        <h1>Zadanie 3 - Mini panel TODO</h1>

        <p v-if="loading">Ładowanie zadań...</p>

        <p v-if="error" class="error">
            {{ error }}
        </p>

        <div v-if="!loading && !error" class="todo-list">
            <div
                v-for="todo in todos"
                :key="todo.id"
                class="todo"
                :class="todo.completed ? 'completed' : 'not-completed'"
            >
                <label class="todo-item">
                    <input
                        type="checkbox"
                        :checked="todo.completed"
                        @change="toggleTodo(todo)"
                    >

                    <span class="title">
                        {{ todo.title }}
                    </span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export default {
    data() {
        return {
            todos: [],
            loading: false,
            error: ''
        }
    },

    mounted() {
        this.loadTodos()
    },

    methods: {
        async loadTodos() {
            this.loading = true
            this.error = ''

            try {
                const response = await fetch(API_URL)

                if (!response.ok) {
                    throw new Error('Błąd pobierania danych')
                }

                const data = await response.json()
                this.todos = data.slice(0, 15)
            } catch (error) {
                this.error = 'Nie udało się pobrać zadań TODO'
            } finally {
                this.loading = false
            }
        },

        async toggleTodo(todo) {
            const newStatus = !todo.completed

            todo.completed = newStatus

            try {
                await fetch(`${API_URL}/${todo.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        completed: newStatus
                    })
                })
            } catch (error) {
                todo.completed = !newStatus
                this.error = 'Nie udało się zaktualizować zadania'
            }
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
}

.todo-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.todo {
    padding: 16px 20px;
    border-radius: 10px;
    transition: 0.2s;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 100%;
    cursor: pointer;
}

.todo-item input {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.title {
    flex: 1;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.4;
}

.completed {
    background: #e8f5e9;
    border-left: 5px solid #198754;
}

.completed .title {
    color: #146c43;
    text-decoration: line-through;
}

.not-completed {
    background: #fff5f5;
    border-left: 5px solid #dc3545;
}

.not-completed .title {
    color: #333;
}

.error {
    color: #dc3545;
    font-weight: bold;
}
</style>