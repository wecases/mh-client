export const popupStore = defineStore('popup', {
    state: () => ({
        // 签到弹出层显隐
        siginShow: false,
        // 签到奖励显隐
        siginAwardShow: false,
        // 限时礼包显隐
        limitGiftShow: false,
        //弹出框显示隐藏
        dialogShow: false
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
        },
        // 弹出框组件关闭
        closeDialog() {
            this.dialogShow = false
        },
        // 弹出框组件打开
        openDialog() {
            this.dialogShow = true
        }
    }
})
