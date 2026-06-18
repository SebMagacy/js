<template>
    <div class="contact-form">
        <h2>Formularz kontaktowy</h2>

        <input
            v-model.trim="form.name"
            placeholder="Imię"
            :class="{ invalid: errors.name }"
        >
        <p v-if="errors.name" class="field-error">
            {{ errors.name }}
        </p>

        <input
            v-model.trim="form.email"
            placeholder="Email"
            :class="{ invalid: errors.email }"
        >
        <p v-if="errors.email" class="field-error">
            {{ errors.email }}
        </p>

        <input
            v-model.trim="form.subject"
            placeholder="Temat wiadomości"
            :class="{ invalid: errors.subject }"
        >
        <p v-if="errors.subject" class="field-error">
            {{ errors.subject }}
        </p>

        <textarea
            v-model.trim="form.message"
            placeholder="Treść wiadomości"
            :class="{ invalid: errors.message }"
        ></textarea>

        <p v-if="errors.message" class="field-error">
            {{ errors.message }}
        </p>

        <p v-if="error" class="error">
            {{ error }}
        </p>

        <button @click="submitForm">
            Wyślij
        </button>

        <div v-if="submitted" class="preview">
            <h3>Podgląd wysłanej wiadomości</h3>

            <p>
                <strong>Imię:</strong>
                {{ submittedForm.name }}
            </p>

            <p>
                <strong>Email:</strong>
                {{ submittedForm.email }}
            </p>

            <p>
                <strong>Temat:</strong>
                {{ submittedForm.subject }}
            </p>

            <p>
                <strong>Wiadomość:</strong>
                {{ submittedForm.message }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactForm',

    data() {
        return {
            submitted: false,

            error: '',

            errors: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },

            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },

            submittedForm: {
                name: '',
                email: '',
                subject: '',
                message: ''
            }
        }
    },

    methods: {
        submitForm() {
            this.errors = {
                name: '',
                email: '',
                subject: '',
                message: ''
            }

            let hasErrors = false

            if (!this.form.name) {
                this.errors.name = 'Podaj imię'
                hasErrors = true
            }

            if (!this.form.email) {
                this.errors.email = 'Podaj adres e-mail'
                hasErrors = true
            }

            if (!this.form.subject) {
                this.errors.subject = 'Podaj temat wiadomości'
                hasErrors = true
            }

            if (!this.form.message) {
                this.errors.message = 'Wpisz treść wiadomości'
                hasErrors = true
            }

            if (hasErrors) {
                this.error = 'Formularz zawiera błędy.'
                return
            }

            this.error = ''

            this.submitted = true

            this.submittedForm = {
                ...this.form
            }
        }
    }
}
</script>