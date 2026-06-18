<template>
  <div class="container">

    <div class="card">
      <h1  class="text-xl font-semibold">Zadanie 6</h1>

      <div class="form-group">
        <label>Tytuł</label>
        <input
          ref="titleInput"
          type="text"
          :value="book.title"
          @input="updateTitle"
          :class="{ errorInput: errors.title }"
        >
        <p v-if="errors.title" class="error">
          {{ errors.title }}
        </p>
      </div>

      <div class="form-group">
        <label>Autor</label>
        <input
          type="text"
          :value="book.author"
          @input="updateAuthor"
          :class="{ errorInput: errors.author }"
        >
        <p v-if="errors.author" class="error">
          {{ errors.author }}
        </p>
      </div>

      <div class="form-group">
        <label>Rok wydania</label>
        <input
          type="text"
          :value="book.year"
          @input="updateYear"
          :class="{ errorInput: errors.year }"
        >
        <p v-if="errors.year" class="error">
          {{ errors.year }}
        </p>
      </div>

      <div class="form-group">
        <label>Gatunek</label>
        <input
          type="text"
          :value="book.genre"
          @input="updateGenre"
        >
      </div>

      <div class="form-group checkbox">
        <input
          type="checkbox"
          :checked="book.available"
          @change="updateAvailable"
        >
        <span>Dostępna</span>
      </div>

      <div class="form-group">
        <label>Opis</label>
        <textarea
          rows="4"
          :value="book.description"
          @input="updateDescription"
        ></textarea>
      </div>

      <div class="buttons">
        <button class="btn btn-primary" @click="validateForm">
          Wyślij formularz
        </button>

        <button class="btn btn-warning" @click="resetBook">
          Przywróć dane
        </button>

        <button class="btn btn-success" @click="focusTitle">
          Ustaw fokus
        </button>
      </div>

      <p v-if="formSuccess" class="success">
        Formularz wysłany poprawnie
      </p>
    </div>

    <div class="preview">
      <h2>Podgląd książki</h2>

      <p><strong>Tytuł:</strong> {{ book.title }}</p>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Rok:</strong> {{ book.year }}</p>
      <p><strong>Gatunek:</strong> {{ book.genre }}</p>

      <p>
        <strong>Status:</strong>

        <span v-if="book.available" class="available">
          Książka dostępna
        </span>

        <span v-else class="unavailable">
          Książka obecnie wypożyczona
        </span>
      </p>

      <div class="description">
        {{ book.description }}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      initialBook: {
        title: 'Władca Pierścieni',
        author: 'J.R.R. Tolkien',
        year: '1954',
        genre: 'Fantasy',
        available: true,
        description: 'Klasyczna powieść fantasy.'
      },

      book: {
        title: 'Władca Pierścieni',
        author: 'J.R.R. Tolkien',
        year: '1954',
        genre: 'Fantasy',
        available: true,
        description: 'Klasyczna powieść fantasy.'
      },

      errors: {
        title: '',
        author: '',
        year: ''
      },

      formSuccess: false
    }
  },

  methods: {
    updateTitle(event) {
      this.book.title = event.target.value
    },

    updateAuthor(event) {
      this.book.author = event.target.value
    },

    updateYear(event) {
      this.book.year = event.target.value
    },

    updateGenre(event) {
      this.book.genre = event.target.value
    },

    updateDescription(event) {
      this.book.description = event.target.value
    },

    updateAvailable(event) {
      this.book.available = event.target.checked
    },

    validateForm() {
      this.errors.title = ''
      this.errors.author = ''
      this.errors.year = ''

      this.formSuccess = false

      if (!this.book.title.trim()) {
        this.errors.title = 'Tytuł jest wymagany'
      }

      if (!this.book.author.trim()) {
        this.errors.author = 'Autor jest wymagany'
      }

      if (!/^\d+$/.test(this.book.year)) {
        this.errors.year = 'Rok wydania może zawierać tylko cyfry'
      }

      if (
        !this.errors.title &&
        !this.errors.author &&
        !this.errors.year
      ) {
        this.formSuccess = true
      }
    },

    resetBook() {
      this.book = { ...this.initialBook }

      this.errors = {
        title: '',
        author: '',
        year: ''
      }

      this.formSuccess = false
    },

    focusTitle() {
      this.$refs.titleInput.focus()
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 30px auto;
  font-family: Arial, sans-serif;
}

.card,
.preview {
  background: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,.1);
}

h1,
h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
}

.buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.btn {
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  font-weight: bold;
}

.btn-primary {
  background: #3498db;
}

.btn-warning {
  background: #f39c12;
}

.btn-success {
  background: #27ae60;
}

.error {
  color: #e74c3c;
  margin-top: 5px;
  font-size: 14px;
}

.errorInput {
  border: 2px solid #e74c3c;
  background: #fff0f0;
}

.success {
  color: #27ae60;
  font-weight: bold;
  margin-top: 15px;
}

.available {
  color: #27ae60;
  font-weight: bold;
}

.unavailable {
  color: #e74c3c;
  font-weight: bold;
}

.description {
  margin-top: 15px;
  padding: 15px;
  background: #f4f6f8;
  border-radius: 6px;
}
</style>