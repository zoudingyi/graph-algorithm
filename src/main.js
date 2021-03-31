import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';
import Antd from 'ant-design-vue';
import './normalize.css';
import 'ant-design-vue/dist/antd.css';

createApp(App).use(router).use(store).use(Antd).mount('#app');
