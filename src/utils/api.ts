/**
 * 页面路径
 * @description 获取当前页面路径
 */
export const Api = (url: string, unToken?: boolean) => {
    const BaseUrl = import.meta.env.VITE_BASE_URL;
    uni.showLoading();
    const fetch = useFetch(BaseUrl + url, {
        // 请求前
        async beforeFetch({ url, options, cancel }) {

            if (!unToken) {
                const { haveToken } = authStore();
                const { token } = storeToRefs(authStore());

                if (!haveToken()) {
                    uni.showToast({
                        title: '请先登录',
                        icon: 'none',
                        duration: 2000,
                        complete: () => {
                            setTimeout(() => {
                                Jump('/pages/login/login')
                            }, 2000)
                        }
                    })
                }

                options.headers = {
                    ...options.headers,
                    Authorization: `Bearer ${token.value}`,
                }
            }

            return {
                options,
            }
        },
        // 请求后
        afterFetch(ctx) {
            console.log(ctx, 'afterFetch');
            uni.hideLoading();

            return ctx
        },
    })

    return fetch
}
