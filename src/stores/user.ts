export const userStore = defineStore('userStore', {
    state: () => ({
        user: {
            name: '123'
        },
        userinfo: {}
    }),
    actions: {
        async getUserInfo() {
            let { data } = await Api('/user').post().json()

            this.userinfo = data.value
        },
        async goLogin() {
            const { saveToken } = authStore()
            const { data } = await Api('/login', true).post().json()

            saveToken(data.value?.token)
        }
    }
})
