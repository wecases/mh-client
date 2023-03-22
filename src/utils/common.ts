type JumpParams = {
    url: string,
    params: {
        [key: string]: string
    },
    event?: 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab' | 'navigateBack',
    delta?: number
};

export const Jump = function (params: JumpParams) {
    let url = params.url
    params.params ? url += '?' + Object.keys(params.params).map(key => key + '=' + params.params[key]).join('&') : ''

    switch (params.event) {
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
                url: params.url
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
 * @description 获取当前页面路径
 */
export const Page = function () {
    const pages = getCurrentPages()
    // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
    return `/${pages[pages.length - 1]?.route ?? ''}`
}
