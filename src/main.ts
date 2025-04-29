import { createApp } from 'vue'
import { createPinia } from 'pinia';
import './style.css';
import '../src/assets/biings-ds/build/bds.css'
// @ts-ignore
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import Router from './router'
import App from './App.vue';
import "@/assets/biings-ds/build/bds.css";
// import 'biings-ds/dist/bds-icons.svg';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(Router);
app.use(Toast);

app.mount('#app');
