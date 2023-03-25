type JumpParams = {
    params: {
        [key: string]: string
    },
    event?: 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab' | 'navigateBack',
    delta?: number
};

/**
 * 跳转页面
 * @description 跳转页面
 * @param {string} url 跳转路径
 * @param {object} params 跳转参数
 * @param {string} params.url 跳转路径
 * @param {object} params.params 跳转参数
 * @param {string} params.event 跳转事件
 * @param {number} params.delta 返回的页面数
 */
export const Jump = function (url: string, params?: JumpParams) {
    params?.params ? url += '?' + Object.keys(params.params).map(key => key + '=' + params.params[key]).join('&') : ''

    switch (params?.event) {
        case 'redirectTo':
            uni.redirectTo({
                url
            });
            break;
        case 'reLaunch':
            uni.reLaunch({
                url
            });
            break;
        case 'switchTab':
            uni.switchTab({
                url: url
            });
            break;
        case 'navigateBack':
            uni.navigateBack({
                delta: params.delta
            });
            break;
        default:
            uni.navigateTo({
                url: url
            });
            break;
    }
}

/**
 * 页面路径
 * @description 获取当前页面路径
 */
export const Page = function () {
    const pages = getCurrentPages()
    // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
    return `/${pages[pages.length - 1]?.route ?? ''}`
}
