import {
    createApp
} from "vue";
import router from './components/router/index';
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.use(router).mount("#app");