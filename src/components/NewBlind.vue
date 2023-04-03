<template>
    <view class="flex">
        <view class="card">
            <view class="img">
                <image src="@/static/logo.png"></image>
            </view>
            <view class="text ellipsis">
                惊喜盲盒
            </view> 
            <view class="price">
                ￥24.60
            </view>
            <view class="dd">
                <view class="btn" @click="$emit('goBlind', 1)">去开盒</view>
            </view>
        </view>
    </view>
</template>

<script setup>
// let props = withDefaults(defineProps<{
//     type: number,
//     list?: Array<object>
// }>(), {
//     type: 1,
// })
let props = defineProps({
    list: {
        type: Array,
        default: [{
            title: "笔记本电脑盲盒",
            price: 128.99,
            vipPrice: 159.99,
            orginPrice: 179.99
        }, {
            title: "笔记本电脑盲盒",
            price: 128.99,
            vipPrice: 159.99,
            orginPrice: 179.99
        },]
    },
    type: {
        type: Number,
        default: 0
    }
})
console.log("fhsdgiua", props.type)
</script>

<style  lang="scss" scoped>
.card {
    padding: 0.75rem 0.94rem;
    border-radius: 0.63rem;
    opacity: 1;
    background: #ffffffff;

    .img {
        >image {
            width: 4.38rem;
            height: 4.38rem;
        }
    }

    .text {
        margin-top: 0.25rem;
        color: #333333ff;
        font-size: 0.75rem;
        font-weight: 400;
    }

    .price {
        margin-top: 0.25rem;
        color: #f09244ff;
        font-weight: 500;
        text-align: left;
        font-size: 0.88rem;
        margin-top: 0.25rem;
    }

    .dd {
        margin-top: 0.3rem;
    }

    .btn {
        color: #ffffffff;
        font-size: 0.69rem;
        font-weight: 400;
        border-radius: 1.88rem;
        opacity: 1;
        background: #7d71f5ff;
        display: inline;
        padding: 0.2rem 1rem;
        margin-top: 0.3rem;
    }
}
</style>
