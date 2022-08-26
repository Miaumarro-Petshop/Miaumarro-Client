import { createApp } from "vue";
import App from "/src/App.vue";
import router from "/src/routes";

import "/src/assets/main.css";

const app = createApp(App);

app.use(router);

app.mount("#app");
