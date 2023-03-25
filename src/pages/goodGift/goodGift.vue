<template>
    <view class="goodGift">
        <navbar text="消费好礼"></navbar>
        <view class="content">
            <view class="price">
                <view class="price_box">
                    <view class="price_title">领取权益奖励攻略</view>
                    <view class="line">
                        <view class="linee flex">
                            <view class="dian"></view>
                            <view class="dian"></view>
                            <image src="@/static/img/goodGift/goodGifticon.png"></image>
                        </view>

                    </view>
                    <view class="price_name flex space-around">
                        <view>首单激活权益</view>
                        <view>满足权益门槛</view>
                        <view>领取权益奖励</view>
                    </view>
                </view>
            </view>
            <view class="consume">
                <view class="consume_title">单日消费满额必得奖品</view>
                <view class="time mt-1 mb-1 flex justify-center items-center">
                    <view class="time_title mr-2">距重置剩余</view>
                    <count-down time="80000"></count-down>
                </view>
                <view class="giftList mt-3 mb-3">
                    <template v-for="(tab, index) in giftNav">
                        <view class="item" @click="tabbarActIndex = index">
                            <view :class="{ actNav: index == tabbarActIndex }" class="tabname">{{ tab.name }}</view>
                        </view>
                    </template>
                </view>
                <view class="consume_price">还差199.90元即可解锁奖励</view>
                <!-- 进度条 -->
                <view class="mt-2">
                    <van-progress track-color="#ffddc1ff" :percentage="75" :show-pivot="false" color="#ffddc1ff" />
                </view>
                <view class="spend mt-1 mb-1 flex items-center">
                    今日已消费
                    <image class="ml-1 mr-1" src="@/static/img/goodGift/maney.png" />
                    <text class="moneyNum">39.00</text>
                </view>
                <view class="arawd flex">
                    <view class="arawdBox flex flex-col justify-center items-center">
                        <image src="@/static/logo.png"></image>
                        <view class="pt-1">满减优惠券</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script setup>
// 当前礼包
const tabbarActIndex = ref(0)

let giftNav = ref([{
    name: "青铜礼包",
    numberKey: 1,
    status: null

},
{
    name: "青铜礼包",
    numberKey: 2,
    status: null
},
{
    name: "青铜礼包",
    numberKey: 3,
    status: null

},
{
    name: "青铜礼包",
    numberKey: 4,
    status: null
}, {
    name: "青铜礼包",
    numberKey: 5,
    status: null
}

],);
</script>

<style lang="scss" scoped>
page {
    background-color: #FF914C;

}

::-webkit-scrollbar {
    display: none
}

.goodGift {
    height: 100vh;

    .content {
        background-image: url('@/static/img/goodGift/goodGiftBg.png');
        min-height: calc(100vh - 50px);
        background-size: cover;
        padding: 0 1rem;

        .price {
            padding-top: 24rem;

            .price_box {
                border-radius: 0.63rem;
                opacity: 1;
                background: #fef7eaff;
                padding: 0.75rem;
                padding-bottom: 1.5rem;

                image {
                    width: 2.06rem;
                    height: 1.81rem;
                    top: -0.6rem;
                    left: 0.8rem;
                }

                .price_title {
                    color: #333333ff;
                    font-size: 0.94rem;
                    font-weight: 500;
                    font-family: "Source Han Sans CN";
                    text-align: center;
                    padding-bottom: 1.25rem;
                }

            }

            .line {
                height: 0.56rem;
                border-radius: 0.81rem;
                opacity: 1;
                background: #ff904eff;

                .linee {
                    padding: 0 3rem;
                    justify-content: space-between;

                    :nth-child(2) {
                        margin-left: 2rem;
                    }
                }

                .dian {
                    width: 0.56rem;
                    height: 0.56rem;
                    opacity: 1;
                    background: #ffffffff;
                    border-radius: 0.56rem;
                }
            }

            .price_name {
                padding-top: 0.75rem;
                color: #333333ff;
                font-size: 0.75rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
                justify-content: space-around;
            }
        }

        .consume {
            margin: 0.75rem 0;
            padding: 0.75rem 0.75rem 1.5rem 0.75rem;
            border-radius: 0.63rem;
            opacity: 1;
            background: #fef7eaff;

            .consume_title {
                color: #333333ff;
                font-size: 0.94rem;
                font-weight: 500;
                font-family: "Source Han Sans CN";
                text-align: center;
            }

            .time {
                .time_title {
                    color: #333333ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                }
            }

            .giftList {
                overflow-x: scroll;
                display: flex;
                flex-wrap: nowrap;

                .actNav {
                    color: #ffffffff;
                    background: #ffa065ff;
                }

                .item {
                    flex-shrink: 0;
                    color: #333333ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";

                }

                .tabname {
                    border-radius: 1.25rem;
                    opacity: 1;
                    border: 0.06rem solid #ffa065ff;
                    padding: 0.2rem 0.8rem;
                    margin-right: 1rem;
                }
            }

            .consume_price {
                color: #333333ff;
                font-size: 0.69rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
                text-align: right;
            }

            .spend {
                color: #333333ff;
                font-size: 0.69rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
                text-align: left;

                image {
                    width: 0.75rem;
                    height: 0.75rem;
                }

                text {
                    color: #f09244ff;
                    font-size: 0.94rem;
                    font-weight: 500;
                    font-family: "DIN Next LT Pro";
                }
            }

            .arawd {
                .arawdBox {
                    border-radius: 0.63rem;
                    opacity: 1;
                    border: 0.1rem solid #FFA065;
                    background: #ffffffff;
                    color: #333333ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                    padding: 0.8rem;

                    >image {
                        width: 2.94rem;
                        height: 2.63rem;
                    }
                }
            }
        }
    }
}
</style>
