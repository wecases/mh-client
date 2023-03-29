// @unocss-include
export const centerStore = defineStore('center', {
    state: () => ({
        myOrderNav: [
            {
                text: "待发货",
                icon: "i-icon-daifahuo",
                value: 2
                // color:''
            },
            {
                text: "待收货",
                icon: "i-icon-daishouhuo",
                value: 2
            },
            {
                text: "已完成",
                icon: "i-icon-yiwancheng",
                value: 2
            }, {
                text: "全部订单",
                icon: "i-icon-dingdan",
            }
        ],
        vipCenterNav: [
            {
                text: "钱包",
                icon: "i-icon-qianpao",
                color: '#7893FC',
                jump: "/pages/myWallet/myWallet"
            },
            {
                text: "推荐好友",
                icon: "i-icon-tuijian",
                color: '#FCB54B',
            },
            {
                text: "我的地址",
                icon: "i-icon-dizhi",
                color: '#FCB54B',
                jump: "/pages/address/address"
            },
            {
                text: "意见反馈",
                icon: "i-icon-yixianfankui",
                color: '#45BE8B',
                jump: "/pages/feedback/feedback"
            },
            {
                text: "我的卡券",
                icon: "i-icon-youhuiquancoupon-fill",
                color: '#F09244',
                jump: "/pages/myCoupon/myCoupon"
            },
            {
                text: "在线客服",
                color: '#FCB54B',
                icon: "i-icon-kefu",
            },
            {
                text: "设置",
                icon: "i-icon-shezhi",
                color: '#7893FC',
                jump: '/pages/set/set'

            },
            {
                text: "碎片交易",
                icon: "i-icon-jiaoyi",
                color: '#7D71F5',
                jump: "/pages/debrisExchange/debrisExchange"
            }
        ]
    })
})
