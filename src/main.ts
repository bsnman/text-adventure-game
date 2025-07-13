import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import './style.css'

const app = createApp(App)
app.use(createPinia())

const vuetify = createVuetify({
  components,
  directives,
})

app.use(vuetify)
app.mount('#app')
