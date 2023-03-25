<template>
    <view class="couponList">
        <view class="list" v-if="list.length">
            <template v-for="item in props.list">
                <view class="item flex items-center mb-3" :class="{actItem:actNav==1}">
                    <view class="left flex flex-col justify-center items-center">
                        <view>
                            <text>￥</text>{{ item.price }}
                        </view>
                        <view class="item_price mt-1">满20.10元可用</view>
                    </view>
                    <view class="right flex justify-content">
                        <view class="info flex flex-col justify-center pl-3 pr-3">
                            <view class="right_name">{{ item.name }}</view>
                            <view class="right_time mt-1">有效期{{ item.time }}</view>
                            <view class="right_ask mt-3">使用说明</view>
                        </view>
                        <view class="info_right flex items-center">
                            <view class="btn">去使用</view>
                        </view>
                    </view>
                </view>
            </template>
        </view>
        <no-data v-else alertText="你还没有卡券" img="2"></no-data>
    </view>
</template>
<script setup>
let props = defineProps({
    list: {
        type: Array,
        default: [
            {
                name: "新人专属福利优惠券",
                price: 10,
                mPrice: 20.10,
                time: '2023.3.15',
            }, {
                name: "新人专属福利ddddddddd优惠券",
                price: 10,
                mPrice: 20.10,
                time: '2023.3.15',
            }
        ]
    },
    // 选中项
    actNav: {
        type: Number,
        default: 0
    }
})

</script>
<style lang="scss" scoped>
.couponList {
    .list {
        .actItem{
            filter: grayscale(50%)
        }
        .item {
            border-radius: 0 0.63rem 0.63rem 0;
            opacity: 1;
            background: #ffffffff;

            .left {
                background-image: url("@/static/img/coupon/coupon.png");
                height: 5.69rem;
                background-size: cover;
                width: 30%;
                color: #ffffffff;
                font-weight: 400;
                text-align: left;
                font-size: 1.25rem;
                font-family: "DIN Next LT Pro";

                text {
                    color: #ffffffff;
                    font-weight: 400;
                    text-align: left;
                    font-size: 0.5rem;
                    font-family: "DIN Next LT Pro";
                }

                .item_price {
                    color: #ffffffff;
                    font-size: 0.5rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                }
            }

            .right {
                width: 70%;
                justify-content: space-between;

                .info {
                    width: 60%;

                    .right_name {
                        color: #333333ff;
                        font-size: 0.75rem;
                        font-weight: 500;
                        font-family: "Source Han Sans CN";
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .right_time {
                        color: #666666ff;
                        font-size: 0.63rem;
                        font-weight: 400;
                        font-family: "Source Han Sans CN";
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .right_ask {
                        color: #666666ff;
                        font-size: 0.63rem;
                        font-weight: 400;
                        font-family: "Source Han Sans CN";
                    }
                }

                .info_right {

                    // flex: 1;
                    .btn {
                        margin-right: 1rem;
                        // width: 40%;
                        height: 1.38rem;
                        padding: 0 0.6rem;
                        line-height: 1.38rem;
                        color: #ffffffff;
                        font-size: 0.69rem;
                        font-weight: 400;
                        font-family: "Source Han Sans CN";
                        border-radius: 0.75rem;
                        opacity: 1;
                        background: #7d71f5ff;
                    }
                }

            }
        }
    }
}
</style>
