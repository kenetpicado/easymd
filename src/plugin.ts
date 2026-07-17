import type { App } from "vue";
import TheLoader from "./components/TheLoader.vue";

export default {
  install(app: App) {
    app.component("TheLoader", TheLoader);
  },
};

export { TheLoader };
