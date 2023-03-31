<template>
    <view>
        <navbar-plus :color="col"></navbar-plus>
        <view class="content pt-2 p-x-5">
            <view class="text-1xl">商品待发货</view>
            <view class="text-xs py-2">订单确认，已通知平台发货</view>
            <view class="step">
                <van-steps :active-color="col" direction="vertical" :active="0">
                    <van-step>
                        <view>已通知平台发货</view>
                        <p>2016-07-12 12:40</p>
                    </van-step>
                    <van-step>
                        <view>送至 河南省郑州市</view>
                        <p>2016-07-11 10:00</p>
                    </van-step>
                </van-steps>
            </view>
            <view class="order" :key="index">
                <view class="info flex">
                    <view class="left">
                        <image src="@/static/logo.png" mode=""></image>
                    </view>
                    <view class="right">
                        <view class="name">笔记本电脑</view>
                        <view class="text">gaogdsfsdd</view>
                        <view class="value flex justify-between">
                            <view class="price">价值￥4000.00</view>
                            <view class="num">×1</view>
                        </view>
                    </view>

                </view>
            </view>
            <view class="row mt-3 p3 flex justify-between items-center">
                <view>订单编号</view>
                <view>432523748234897238</view>
            </view>
        </view>
    </view>
</template>
<script setup>
let col = ref('#7d71f5ff')
</script>
<style lang="scss" scoped>
page {
    height: 12rem;
    background: linear-gradient(182.1deg, #e4e1ffff 0%, #f1f1f1ff 100%);
}

.step {
    padding: 0.5rem;
    border-radius: 0.63rem;
    opacity: 1;
    background: #ffffffff;
}

.row {
    border-radius: 0.63rem;
    opacity: 1;
    background: #ffffffff;

    :first-child {
        color: #666666ff;
        font-size: 0.75rem;
        font-weight: 400;
        font-family: "Source Han Sans CN";
    }

    :last-child {
        color: #333333ff;
        font-size: 0.75rem;
        font-weight: 400;
        font-family: "Source Han Sans CN";
    }
}

.order {
    border-radius: 0.63rem;
    background: #ffffffff;
    padding: 0.75rem;
    margin-top: 0.75rem;

    .left {
        padding-right: 0.75rem;

        >image {
            width: 5.38rem;
            height: 5.13rem;
            border-radius: 0.63rem;
        }
    }

    .right {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .name {
            color: #333333ff;
            font-size: 0.75rem;
            font-weight: 400;
        }

        .text {
            color: #666666ff;
            font-size: 0.63rem;
            font-weight: 400;
        }

        .value {
            .price {
                color: #f09244ff;
                font-weight: 400;
                font-size: 0.75rem;
                padding-top: 0.2rem;
            }

            .num {
                color: #666666ff;
                font-size: 0.69rem;
                font-weight: 400;
                padding-top: 0.25rem;
            }
        }
    }
}
</style>
