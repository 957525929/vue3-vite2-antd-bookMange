import { createApp } from "vue";
import App from "./App.vue";

//引入antdv2.x
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//引入router4.x
import router from "./router";

//引入vuex4.x
import store from "./store";

const app = createApp(App);
app.config.productionTip = false;

app.use(Antd);
app.use(router);
app.use(store);
app.mount("#app");

// createApp(App).mount('#app')
