<template>
    <div class="container">

        <header>

            <h1>Laboratorium 5 - Vue Router</h1>

            <nav>

                <RouterLink to="/">Start</RouterLink>

                <RouterLink to="/about">
                    O aplikacji
                </RouterLink>

                <RouterLink to="/contact">
                    Kontakt
                </RouterLink>

                <RouterLink to="/services">
                    Usługi
                </RouterLink>

            </nav>

        </header>

        <main>

            <RouterView />

        </main>

    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style scoped>

.container{
    max-width:900px;
    margin:auto;
    padding:20px;
}

nav{
    display:flex;
    gap:15px;
    margin:25px 0;
}

nav a{
    text-decoration:none;
    color:#444;
    padding:8px 15px;
    border-radius:6px;
    background:#f0f0f0;
}

nav a:hover{
    background:#42b883;
    color:white;
}

.router-link-exact-active{
    background:#42b883;
    color:white;
}

.box{
    padding:20px;
    border:1px solid #ddd;
    border-radius:10px;
    background:white;
}

ul{
    padding-left:20px;
}

li{
    margin:10px 0;
}

</style>