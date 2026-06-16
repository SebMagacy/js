<template>
  <div class="container">
      <h2>Zadanie 4</h2>

      <ul class="students-list">
        <li
          v-for="student in students"
          :key="student.id"
          class="student-item"
          :class="student.ocena < 3 ? 'weak-grade' : 'good-grade'"
        >
          <p><strong>Imię:</strong> {{ student.imie }}</p>
          <p><strong>Ocena:</strong> {{ student.ocena }}</p>
          <p><strong>Status:</strong> {{ student.zaliczyl ? 'zaliczony' : 'niezaliczony' }}</p>

          <p v-if="student.zaliczyl" class="passed">
            Student zaliczył przedmiot.
          </p>

          <p v-else class="failed">
            Student nie zaliczył przedmiotu.
          </p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,

      students: [
        {
          id: 1,
          imie: 'Sebastian',
          ocena: 5,
          zaliczyl: true
        },
        {
          id: 2,
          imie: 'Anna',
          ocena: 4,
          zaliczyl: true
        },
        {
          id: 3,
          imie: 'Jan',
          ocena: 2,
          zaliczyl: false
        },
        {
          id: 4,
          imie: 'Ewa',
          ocena: 3,
          zaliczyl: true
        }
      ]
    }
  },

  methods: {
    toggleMessage() {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 24px;
  font-family: Arial, sans-serif;
}

.card {
  margin-bottom: 24px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
}

button {
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.button-show {
  background-color: #198754;
}

.button-hide {
  background-color: #dc3545;
}

.message-visible {
  color: #198754;
  font-weight: bold;
}

.message-hidden {
  color: #dc3545;
  font-weight: bold;
}

.students-list {
  padding: 0;
  list-style: none;
}

.student-item {
  margin-bottom: 12px;
  padding: 14px;
  border-radius: 10px;
}

.good-grade {
  background-color: #e8f5e9;
}

.weak-grade {
  background-color: #fdecea;
}

.passed {
  color: #198754;
  font-weight: bold;
}

.failed {
  color: #dc3545;
  font-weight: bold;
}
</style>