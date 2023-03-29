import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default (app: any) => {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)

    return app.use(pinia)
}
