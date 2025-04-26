import { createApp } from 'vue'
import './style.css';
// @ts-ignore
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import Router from './router'
import App from './App.vue';
import "@/assets/biings-ds/build/bds.css";
// import 'biings-ds/dist/bds-icons.svg';

const app = createApp(App);

app.use(Router);
app.use(Toast);

app.mount('#app');
