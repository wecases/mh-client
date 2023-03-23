import { createSSRApp } from "vue";
import App from "./App.vue";
import { useModules } from 'virtual:modules'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App);
  useModules(app)
  return {
    app,
  };
}
