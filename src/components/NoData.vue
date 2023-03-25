<template>
    <view class="NoData-box">
        <image class="no-data-img" :src="'/static/img/nodata/noData'+props.img+'.png'" />
        <view class="no-data-tip">{{ props.alertText }}</view>
    </view>
</template>

<script setup lang="ts">

let props = withDefaults(defineProps<{
    alertText?: string
    img?: number
}>(), {
    alertText: "这里什么都没有 去别处看看吧",
    // 1 无添加地址
    // 2 无订单信息
    // 3 无相关信息
    // 4 无消息通知
    img: 1
})
let image = '/static/img/nodata/noData'+props.img+'.png'
</script>

<style lang="scss" scoped>
.NoData-box {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .no-data-img {
        display: block;
        margin: 0 auto;
        width: 16.13rem;
        height: 12.35rem;
    }

    .no-data-tip {
        color: #666666ff;
        font-size: 0.69rem;
        font-weight: 400;
        font-family: "Source Han Sans CN";
        margin-top: 1.51rem;
    }
}
</style>
