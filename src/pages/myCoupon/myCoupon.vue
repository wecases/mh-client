<template>
    <view class="myCoupon">
        <navbar text="我的卡券"></navbar>
        <view class="tab">
            <view v-for="(tab, index) in shopNav" :key="index" class="left" @click="tabbarActIndex = index">
                <view>
                    <text :class="{ actNav: index == tabbarActIndex }">{{ tab.name }}</text>
                    <view v-if="tabbarActIndex == index" class="tabBorder flex f-x-c"></view>
                </view>
            </view>
        </view>
        <view class="content p-3">
            <coupon-list :actNav="tabbarActIndex"></coupon-list>
        </view>
    </view>
</template>
<script setup>
const tabbarActIndex = ref(0)
let shopNav = ref([{
    name: "可用卡券",
    numberKey: 1,
    status: null

},
{
    name: "历史卡券",
    numberKey: 2,
    status: null
}

],);
</script>
<style lang="scss" scoped>
.myCoupon {
    .tab {
        color: #333333ff;
        font-size: 0.88rem;
        font-weight: 500;
        padding: 0.75rem 30rpx;
        background: #ffffffff;
        display: flex;
        justify-content: space-around;

        .actNav {
            // color: #7d71f5ff;
        }

        .tabBorder {
            width: 0.88rem;
            height: 0.19rem;
            border-radius: 0.31rem;
            background-color: #7d71f5ff;
            margin: 0 auto;
            margin-top: 0.1rem;
        }
    }
}
</style>
