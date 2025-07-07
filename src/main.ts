import { app } from '@/shared/lib/app'
import App from './app/App.vue'
import './app'

app.component('App', App)
app.mount('#app')
