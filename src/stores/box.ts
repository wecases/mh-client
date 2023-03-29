export const boxStore = defineStore('box', {
    state: () => ({
        newBoxList: <CardInfo[]>[],
        hotBoxList: <CardInfo[]>[],
        classBoxList: <CardInfo[]>[]
    }),
    actions: {
        /**
         * 获取新上盲盒列表
         */
        async getNewBoxList() {
             this.newBoxList = boxMock;
        },

        /**
         * 获取热卖盲盒列表
         */
        async getHotBoxList() {
            this.hotBoxList = boxMock;
        },

        /**
         * 获取分类页盲盒列表
         */
        async getClassBoxList() {
            this.classBoxList = boxMock;
        },
    }
})


// 测试数据
let boxMock = [{
    image: '/static/logo.png',
    title: '哈哈哈哈',
    price: 156,
    sale: 256,
    views: 4546,
    user: {
        avatar: '/static/logo.png',
        phone: '12345678910',
    },
    selected: true
}, {
    image: '/static/logo.png',
    title: '哈哈哈哈',
    price: 156,
    sale: 256,
    views: 4546,
    user: {
        avatar: '/static/logo.png',
        phone: '12345678910',
    }
}];
