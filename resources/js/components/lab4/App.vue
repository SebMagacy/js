<template>
    <div class="container">
        <h1>Zadanie 2 - Zarządzanie postami</h1>

        <PostForm @add-post="addPost" />

        <PostList :posts="posts" @deletePost="deletePost" />
        <p v-if="error" class="error">
            {{ error }}
        </p>
    </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

export default {
    components: {
        PostForm,
        PostList
    },

    data() {
        return {
            posts: []
        }
    },

    mounted() {
        this.loadPosts()
    },

    methods: {
        async loadPosts() {
            const response = await fetch(API_URL)
            const data = await response.json()

            this.posts = data.slice(0, 10)
        },

        async addPost(post) {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(post)
            })

            const newPost = await response.json()

            this.posts.unshift(newPost)
        },

        async deletePost(postId) {
            await fetch(`${API_URL}/${postId}`, {
                method: 'DELETE'
            })

            this.posts = this.posts.filter(post => post.id !== postId)
        }
    }
}
</script>
<style scoped>
.container {
    max-width: 900px;
    margin: 30px auto;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 25px;
}
</style>