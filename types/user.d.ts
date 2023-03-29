/**
 * 用户信息
 * @interface UserInfo
 * @description 用户信息
 */
declare type UserInfo = {
    /**
     * 头像
     * @type string
     * @default ''
     * @description 头像
     */
    avatar: string

    /**
     * 昵称
     * @type string
     * @default ''
     * @description 昵称
     */
    nickname: string

    /**
     * 手机号
     * @type string
     * @default ''
     * @description 手机号
     */
    phone: string
}
