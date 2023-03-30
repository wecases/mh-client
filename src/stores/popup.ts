export const popupStore = defineStore('popup', {
    state: () => ({
        // 签到弹出层显隐
        siginShow: false,
        // 签到奖励显隐
        siginAwardShow: false,
        // 限时礼包显隐
        limitGiftShow: false
    }),
    actions: {
        unsiginShow() {
            console.log(this.siginShow)
            this.siginShow = !this.siginShow
        },
        unsiginAwardShow() {
            this.siginAwardShow = !this.siginAwardShow
        },
        unlimitGiftShow() {
            this.limitGiftShow = !this.limitGiftShow
        },

        // 签到
        getSiginEvent() {
            this.siginShow = false
            this.siginAwardShow = true
        }
    }
})
