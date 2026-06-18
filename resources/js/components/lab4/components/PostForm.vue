<template>
    <div class="form-box">
        <h2>Dodaj nowy post</h2>

        <input v-model="title" type="text" placeholder="Tytuł posta">

        <textarea v-model="body" placeholder="Treść posta"></textarea>

        <p v-if="error" class="error">
            {{ error }}
        </p>

        <button @click="submitPost">
            Dodaj post
        </button>
    </div>
</template>

<script>
export default {
    emits: ['addPost'],

    data() {
        return {
            title: '',
            body: '',
            error: ''
        }
    },

    methods: {
        submitPost() {

            if (!this.title.trim() || !this.body.trim()) {
                this.error = 'Wypełnij wszystkie pola'
                return
            }

            this.error = ''

            this.$emit('addPost', {
                title: this.title,
                body: this.body,
                userId: 1
            })

            this.title = ''
            this.body = ''
        }
    }
}
</script>

<style scoped>
.form-box {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 25px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

h2 {
    margin-bottom: 15px;
}

input,
textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
    border: 1px solid #ced4da;
    border-radius: 8px;
    font-size: 14px;
    box-sizing: border-box;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

button {
    background: #0d6efd;
    color: white;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
}

button:hover {
    background: #0b5ed7;
}
</style>