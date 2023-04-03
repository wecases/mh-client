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
    name: string

    /**
     * 手机号
     * @type string
     * @default ''
     * @description 手机号
     */
    phone: string

    /**
     * 邀请码
     */
    invite_code: string
}
