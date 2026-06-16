<template>
  <div class="container">
    <h1  class="text-xl font-semibold">Zadanie 5</h1>

    <section class="form-box">
      <h2>Edycja danych książki</h2>

      <label>Tytuł:</label>
      <input
        ref="tytulInput"
        type="text"
        :value="book.tytul"
        @input="updateTytul"
      >

      <label>Autor:</label>
      <input
        type="text"
        :value="book.autor"
        @input="updateAutor"
      >

      <label>Rok wydania:</label>
      <input
        type="text"
        :value="book.rok"
        @input="updateRok"
      >

      <label>Gatunek:</label>
      <input
        type="text"
        :value="book.gatunek"
        @input="updateGatunek"
      >

      <label>Opis:</label>
      <textarea
        :value="book.opis"
        @input="updateOpis"
      ></textarea>

      <label class="checkbox-label">
        <input
          type="checkbox"
          ref="dostepnaCheckbox"
          :checked="book.dostepna"
          @change="updateDostepna"
        >
        Książka dostępna
      </label>

        <button class="reset-btn" @click="restoreBook">
        Przywróć dane początkowe
        </button>

        <button class="focus-btn" @click="focusTitle">
        Ustaw fokus na tytule
        </button>
    </section>

    <section class="preview-box">
      <h2>Podgląd książki</h2>

      <p><strong>Tytuł:</strong> {{ book.tytul }}</p>
      <p><strong>Autor:</strong> {{ book.autor }}</p>
      <p><strong>Rok wydania:</strong> {{ book.rok }}</p>
      <p><strong>Gatunek:</strong> {{ book.gatunek }}</p>
      <p><strong>Opis:</strong> {{ book.opis }}</p>

      <p v-if="book.dostepna" class="available">
        Książka dostępna
      </p>
      <p v-else class="borrowed">
        Książka obecnie wypożyczona
      </p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialBook: {
        tytul: 'Lalka',
        autor: 'Bolesław Prus',
        rok: '1890',
        gatunek: 'Powieść realistyczna',
        dostepna: true,
        opis: 'Powieść przedstawiająca losy Stanisława Wokulskiego oraz obraz społeczeństwa XIX wieku.'
      },
      book: {
        tytul: 'Lalka',
        autor: 'Bolesław Prus',
        rok: '1890',
        gatunek: 'Powieść realistyczna',
        dostepna: true,
        opis: 'Powieść przedstawiająca losy Stanisława Wokulskiego oraz obraz społeczeństwa XIX wieku.'
      }
    }
  },
  methods: {
    updateTytul(event) {
      this.book.tytul = event.target.value
    },
    updateAutor(event) {
      this.book.autor = event.target.value
    },
    updateRok(event) {
      this.book.rok = event.target.value
    },
    updateGatunek(event) {
      this.book.gatunek = event.target.value
    },
    updateOpis(event) {
      this.book.opis = event.target.value
    },
    updateDostepna(event) {
      this.book.dostepna = event.target.checked
    },
    restoreBook() {
      this.book = { ...this.initialBook }
    },
    focusTitle() {
      this.$refs.tytulInput.focus()
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 700px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}

.form-box,
.preview-box {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: #f4f4f4;
}

label {
  display: block;
  margin-top: 12px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  box-sizing: border-box;
}

textarea {
  min-height: 80px;
}

.checkbox-label {
  display: flex;
  gap: 8px;
  align-items: center;
}

.checkbox-label input {
  width: auto;
}

button {
  margin-top: 15px;
  margin-right: 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.available {
  color: green;
  font-weight: bold;
}

.borrowed {
  color: red;
  font-weight: bold;
}

.reset-btn {
  background-color: #e53935;
}

.reset-btn:hover {
  background-color: #b71c1c;
}

.focus-btn {
  background-color: #43a047;
}

.focus-btn:hover {
  background-color: #1b5e20;
}
</style>