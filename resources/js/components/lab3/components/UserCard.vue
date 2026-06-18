<template>
    <div class="user-card">
        <h3>{{ name }}</h3>
        <p><strong>Wiek:</strong> {{ age }}</p>
        <p><strong>Miasto:</strong> {{ city }}</p>
        <p>
            <strong>Status:</strong>
            {{ isStudent ? 'Student' : 'Nie jest studentem' }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'UserCard',

    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number
        },
        city: {
            type: String,
            default: 'nie podano'
        },
        isStudent: {
            type: Boolean,
            default: false
        }
    }
}
</script>