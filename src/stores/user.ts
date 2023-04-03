export const userStore = defineStore('user', {
    state: () => ({
        user: <UserInfo>{},
    }),
    actions: {
        async getUserInfo() {

        },
        async goLogin(params: object) {
            const { saveToken } = authStore()
            const { data } = await Api('/login', true).post(params).json()
            let res = data.value
            if (res.code) {
                saveToken(res.data.token)
                this.user = res.data.user
                return res.massage
            }
            return false
        }
    },
    persist: true
})
