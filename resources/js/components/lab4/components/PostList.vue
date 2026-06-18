<template>
    <div>
        <h2>Lista postów</h2>

        <div
            v-for="post in posts"
            :key="post.id"
            class="post"
        >
            <h3>{{ post.title }}</h3>

            <p>{{ post.body }}</p>

            <small>
                ID: {{ post.id }}
            </small>

            <br>

            <button @click="$emit('deletePost', post.id)">
                Usuń post
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: Array
    },

    emits: ['deletePost']
}
</script>

<style scoped>
.post {
    background: white;
    border: 1px solid #dee2e6;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.post h3 {
    margin-top: 0;
    color: #0d6efd;
}

.post p {
    line-height: 1.5;
}

.post small {
    color: #6c757d;
}

button {
    margin-top: 10px;
    background: #dc3545;
    color: white;
    border: none;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #bb2d3b;
}
</style>