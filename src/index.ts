import { createApp } from "vue";
import { createPinia } from "pinia";
import InteractiveRatingComponent from "./InteractiveRatingComponent.vue";
import "./styles/index.scss";

const pinia = createPinia();
const app = createApp(InteractiveRatingComponent);

app.use(pinia);
app.mount("#interactive-rating-component");

if (module.hot) {
  module.hot.accept();
}
