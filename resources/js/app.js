import { createApp } from 'vue'

import App from './components/lab5/App.vue'
import router from './components/lab5/router'

const app = createApp(App)

app.use(router)

app.mount('#app')