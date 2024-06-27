import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './routes';
import '../src/assets/css/style.css';

const app = createApp(App);

// Set up axios globally
app.config.globalProperties.$axios = axios;

// Use router
app.use(router);

// Mount the app
app.mount('#app');
