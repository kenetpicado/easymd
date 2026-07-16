import TheLoader from "./components/TheLoader.vue";
import type { App } from "vue";

const install = (app: App): void => {
  app.component("TheLoader", TheLoader);
};

export { TheLoader };

export default {
  install,
};
