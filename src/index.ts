import { createApp } from "vue";
import InteractiveRatingComponent from "./InteractiveRatingComponent.vue";
import "./styles/index.scss";

const app = createApp(InteractiveRatingComponent);
app.mount("#interactive-rating-component");

if (module.hot) {
  module.hot.accept();
}
