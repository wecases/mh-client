<template>
    <view>
        <!-- 签到弹出框 -->
        <van-popup v-model:show="siginShow" :close-on-click-overlay="false"
            style="width: 90%; background-color: transparent;">
            <view class="siginPopup">
                <view class="title">累计签到赢好礼</view>
                <view class="day">
                    <text>已连续签到1天</text>
                </view>
                <view class="grid">
                    <view class="grid_row" v-for="item, index in 3" :key="index">
                        <view class="grid_item" v-for="item, index in 2" :key="index">
                            <view class="grid_item_day">第一天</view>
                            <view class="grid_item_img">
                                <image src="@/static/logo.png"></image>
                            </view>
                            <view class="grid_item_money">+10金币</view>
                        </view>
                    </view>
                    <view class="day7">
                        <view class="day">第七天</view>
                    </view>
                </view>
                <view class="signBtn" @click="siginEvent">立即签到</view>
            </view>
            <view class="closePop" @click="close('siginShow')">
                <view class="i-icon-yuanxingdacha text-2xl inline-block text-white" />
            </view>
        </van-popup>
        <!-- 奖励弹框 -->
        <van-popup v-model:show="siginAwardShow" :close-on-click-overlay="false"
            style="width: 90%; background-color: transparent;">
            <view class="award">
                <view class="award_title">
                    恭喜获得10个金币
                </view>
                <view class="award_title1">
                    明天签到再得10金币
                </view>
                <image class="award_img" src="@/static/img/index/singin.png"></image>
                <view class="award_btn">
                    开心收下
                </view>
            </view>
            <view class="closePop" @click="close('siginAwardShow')">
                <view class="i-icon-yuanxingdacha text-2xl inline-block text-white" />
            </view>
        </van-popup>
        <!-- 限时礼包弹出层 -->
        <van-popup :show="limitGiftShow" :close-on-click-overlay="false" style="background-color: transparent;">
            <view class="limit_gift">
                <view class="limit_title flex-center pt-26 text-2xl">限时礼包</view>
                <view class="gift_list mb-2 mt-10 ml-6 mr-6">
                    <template v-for="i in 6">
                        <view class="gift_item mb-3 flex">
                            <view class="left flex flex-col justify-center items-center">
                                <view class="price">
                                    ￥<text>50</text>
                                </view>
                                <view class="jian">
                                    满90元可用
                                </view>
                            </view>
                            <view class="right flex-1 pl-6 pr-2 pt-4 pb-3">
                                <view class="row1 pt-1">新人专属限时福利</view>
                                <view class="row2 pt-1">有效期至2023.3.15</view>
                                <view class="row3 pt-1 flex justify-between items-center">
                                    <view class="flex items-center">
                                        使用说明
                                        <view class="shuoming i-icon-shuoming pl-2 text-xs inline-block text-white" />
                                    </view>
                                    <view class="take_btn text-xs">
                                        立即领取
                                    </view>
                                </view>
                            </view>
                        </view>
                    </template>

                </view>
                <view class="all_btn">
                    全部领取
                </view>
            </view>
            <view class="closePop" @click="close('limitGiftShow')">
                <view class="i-icon-yuanxingdacha text-2xl inline-block text-white" />
            </view>
        </van-popup>
    </view>
</template>
<script setup>
const { unsiginShow, unsiginAwardShow, unlimitGiftShow, getSiginEvent } = popupStore()
const { siginShow, siginAwardShow, limitGiftShow } = $(storeToRefs(popupStore()));

// 关闭图标事件
const close = pop => {
    if (pop == 'siginAwardShow') {
        unsiginAwardShow()
    } else if (pop == 'siginShow') {
        unsiginShow()
    } else if (pop == 'limitGiftShow') {
        unlimitGiftShow()
    }
}

// 去签到
const siginEvent = () => {
    getSiginEvent()
}
</script>
<style lang="scss" scoped>
// 奖励弹出层
.award {
    border-radius: 0.63rem;
    opacity: 1;
    background: #ffffffff;
    padding: 1.2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .award_title {
        color: #333333ff;
        font-weight: 500;
        font-size: 1.13rem;
        font-family: "Source Han Sans CN";
    }

    .award_title1 {
        color: #666666ff;
        font-size: 0.88rem;
        font-weight: 400;
        font-family: "Source Han Sans CN";
        padding: 0.2rem 0;
    }

    .award_img {

        width: 11.81rem;
        height: 7.63rem;
        margin-bottom: 0.2rem;
    }

    .award_btn {
        background-image: url('@/static/img/index/siginBtn.png');
        width: 10.5rem;
        height: 3.75rem;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffffff;
        font-size: 1.38rem;
    }
}

// 签到弹出层
.siginPopup {
    padding: 0.75rem;
    margin: 0 auto;
    border-radius: 0.63rem;
    opacity: 1;
    background: #ffffffff;

    .title {
        color: #333333ff;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        padding-bottom: 0.3rem;
    }

    .day {
        display: flex;
        justify-content: center;
        margin-bottom: 0.75rem;

        text {
            border-radius: 1.25rem;
            opacity: 1;
            background: #aca4ffff;
            padding: 0.2rem 0.8rem;
            margin: 0 auto;
            color: #ffffffff;
            font-size: 0.69rem;
            font-weight: 400;
        }
    }

    .grid {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .grid_row {
            display: flex;
            width: 49%;
            justify-content: space-between;
            margin-bottom: 0.75rem;
        }

        .day7 {
            width: 49%;
            background-color: red;
            margin-bottom: 0.75rem;
            border-radius: 0.25rem;
            background: #f1f1f1ff;
        }

        .grid_item {
            width: 48%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 0.25rem;
            opacity: 1;
            background: #f1f1f1ff;
            padding: 0.38rem 0;

            .grid_item_day {
                color: #666666ff;
                font-size: 0.81rem;
                font-weight: 400;
            }

            .grid_item_img {
                >image {
                    width: 1.88rem;
                    height: 2rem;
                }
            }

            .grid_item_money {
                color: #666666ff;
                font-size: 0.69rem;
            }
        }
    }

    .signBtn {
        height: 2.75rem;
        border-radius: 1.88rem;
        opacity: 1;
        background: #7d71f5ff;
        color: #ffffffff;
        font-size: 1.06rem;
        text-align: center;
        line-height: 2.75rem;
    }

}

// 限时礼包弹出层
.limit_gift {
    width: 21rem;
    height: 34rem;
    background-image: url('@/static/img/index/giftBg.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 100%;

    .limit_title {
        color: #ffffffff;
        font-size: 1.5rem;
        font-weight: 500;
        font-family: "Source Han Sans CN";
    }

    .gift_list {
        height: 18rem;
        overflow-x: scroll;

        .gift_item {
            border-radius: 0.63rem;
            opacity: 1;
            background: linear-gradient(130.3deg, #7d71f5ff 0%, #e146feff 100%);

            .left {
                border-right: 0.02rem #ffffffff dashed;
                width: 30%;

                .price {
                    color: #ffffffff;
                    font-weight: 500;
                    font-family: "DIN Next LT Pro";
                    text-align: left;
                    font-size: 0.75rem;

                    text {
                        color: #ffffffff;
                        font-weight: 500;
                        font-family: "DIN Next LT Pro";
                        text-align: left;
                        font-size: 2.5rem;
                    }
                }

                .jian {
                    color: #ffffffff;
                    font-size: 0.69rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                }
            }

            .row1 {
                color: #ffffffff;
                font-size: 0.75rem;
                font-weight: 500;
                font-family: "Source Han Sans CN";
            }

            .row2 {
                color: #ffffffff;
                font-size: 0.63rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
            }

            .row3 {
                color: #ffffffff;
                font-size: 0.63rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";

            }

            .take_btn {
                background-image: url("../../static/img/index/take_btn.png");
                width: 5.56rem;
                height: 2rem;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                line-height: 2rem;
                text-align: center;
            }
        }
    }

    .all_btn {
        color: #ffffffff;
        font-size: 1.38rem;
        font-weight: 500;
        font-family: "Source Han Sans CN";
        margin: 0 auto;
        background-image: url("../../static/img/index/take_btn.png");
        width: 13.19rem;
        height: 3.6rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        line-height: 3.6rem;
        text-align: center;
    }
}

.closePop {
    text-align: center;
    margin-top: 1.44rem;
}
</style>
