/**
 * 类型
 * @type 'base' | 'select' | 'sell'
 * - base: 基础
 * - select: 选择
 * - sell: 销售
 * @default 'base'
 */
declare type CardType = 'base' | 'select' | 'sell'

/**
 * 卡片信息
 * @interface CardInfo
 * @description 卡片信息
 */
declare type CardInfo = {
    /**
     * 图片
     * @type string
     * @default ''
     * @description 图片地址
     */
    image: string

    /**
     * 标题
     * @type string
     * @default ''
     * @description 标题
     */
    title: string

    /**
     * 价格
     * @type number | string
     * @default 0
     * @description 价格
     */
    price: number | string

    /**
     * 原价
     * @type number | string
     * @default 0
     * @description 原价
     */
    sale?: number | string

    /**
     * 描述
     * @type string
     * @default ''
     * @description 描述
     */
    desc?: string

    /**
     * 选中
     * @type boolean
     * @default false
     * @description 选中
     */
    selected?: boolean

    /**
     * 奖品
     * @type any[] | string[] | {}[]
     * @default []
     * @description 奖品
     */
    prize?: any[]

    /**
     * 浏览量
     * @type number
     * @default 0
     * @description 浏览量
     */
    views?: number

    /**
     * 跳转路径
     * @type string
     * @default ''
     * @description 跳转路径
     */
    path?: string

    /**
     * 用户信息
     * @type object
     * @default {}
     * @description 用户信息
     */
    user?: Pick<UserInfo, 'avatar' | 'phone'>;
}
