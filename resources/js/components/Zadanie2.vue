<template>
  <div>
    <h1 class="text-xl font-semibold">
        {{ zadanie }}
    </h1>

    <h2>Przydatne linki</h2>

    <img
      :src="imageUrl"
      :alt="imageAlt"
      :width="imageWidth"
    >

    <p>{{ description }}</p>

    <p>
      <a
        :href="linkUrl"
        :style="{ color: linkColor }"
        target="_blank"
      >
        Strona uczelni Vistula
      </a>
    </p>

    <p>
      <a
        :href="vueUrl"
        :style="{ color: vueLinkColor }"
        target="_blank"
      >
        Dokumentacja Vue.js
      </a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zadanie: 'Zadanie 2',

      imageUrl: 'https://vuejs.org/images/logo.png',
      imageAlt: 'Logo frameworka Vue.js',
      imageWidth: 150   ,

      linkUrl: 'https://vistula.edu.pl',
      vueUrl: 'https://vuejs.org',

      linkColor: 'green',
      vueLinkColor: 'blue',

      description:
        'Framework Vue.js umożliwia tworzenie nowoczesnych i reaktywnych interfejsów użytkownika.'
    }
  }
}
</script>