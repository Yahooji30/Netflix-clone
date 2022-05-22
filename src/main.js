import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "../src/assets/Style.css";

createApp(App).use(router).use(store).mount("#app");
