// @unocss-include
export const centerStore = defineStore('center', {
    state: () => ({
        myOrderNav: [
            {
                text: "待发货",
                icon: "i-icon-order1",
                value: 2
            },
            {
                text: "待收货",
                icon: "i-icon-order2",
                value: 2
            },
            {
                text: "已完成",
                icon: "i-icon-order3",
                value: 2
            }, {
                text: "全部订单",
                icon: "i-icon-order4",
            }
        ],
        vipCenterNav: [
            {
                text: "钱包",
                icon: "i-icon-s1",
                color: '#7893FC',
                jump: "/pages/myWallet/myWallet"
            },
            {
                text: "推荐好友",
                icon: "i-icon-s2",
                color: '#FCB54B',
            },
            {
                text: "我的地址",
                icon: "i-icon-s3",
                color: '#FCB54B',
                jump: "/pages/address/address"
            },
            {
                text: "意见反馈",
                icon: "i-icon-s4",
                color: '#45BE8B',
                jump: "/pages/feedback/feedback"
            },
            {
                text: "我的仓库",
                icon: "i-icon-s5",
                color: '#7893FC',
                jump: "/pages/myCoupon/myCoupon"
            },
            {
                text: "在线客服",
                color: '#FCB54B',
                icon: "i-icon-s6",
            },
            {
                text: "设置",
                icon: "i-icon-s7",
                color: '#7893FC',
                jump: '/pages/set/set'

            },
            {
                text: "碎片交易",
                icon: "i-icon-s8",
                color: '#7D71F5',
                jump: "/pages/debrisExchange/debrisExchange"
            }
        ]
    })
})
