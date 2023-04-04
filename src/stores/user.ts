export const userStore = defineStore('user', {
    state: () => ({
        user: <UserInfo>{},
    }),
    actions: {
        async getUserInfo() {
        },
        // 注册
        async goRegister(params: object) {
            const { data } = await Api('/register', true).post(params).json();
            // return data
            let res = data.value
            console.log('data', res);

            if (res.code == 200) {
                uni.showToast({
                    title: '注册成功，请登录',
                    icon: 'success',
                    duration: 1500,
                    success: () => {
                        uni.navigateTo({
                            url: '/pages/login/login'
                        });
                    }
                });
            } else {
                Toast(res.massage)
                uni.showToast({
                    title: res.massage,
                    icon: 'none',
                    duration: 1500
                });
            }
        },
        // 登录
        async goLogin(params: object) {
            const { saveToken } = authStore()
            const { data } = await Api('/login', true).post(params).json()
            let res = data.value

            if (res.code == 200) {
                saveToken(res.data.token)
                this.user = res.data.user
                return res
            }
            return res
        }
    },
    persist: true
})
