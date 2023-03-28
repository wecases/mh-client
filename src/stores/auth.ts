export const authStore = defineStore('auth', {
    state: () => ({
        token: ''
    }),
    actions: {
        haveToken(): boolean {
            return !!this.token
        },
        saveToken(token: string) {
            this.token = token
        }
    },
    persist: true
})
