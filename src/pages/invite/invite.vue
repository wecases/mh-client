<template>
    <view class="invite">
        <navbar text="邀请好友" />
        <!-- 邀请海报 -->
        <view class="poster"></view>
        <!-- 邀请码 -->
        <view class="content p-4">
            <View class="codeBox pt-3 pb-3 flex-center flex-col">
                <view class="code_content flex-center flex-col">
                    <view class="codeTile pb-2">我的邀请码</view>
                    <view class="codeNum pb-6">SL25447</view>
                    <view class="imgBox">
                        <img :src="qrcode" alt="QR Code" />
                    </view>
                    <view class="copy pt-3 pb-3" @click="copy()">复制邀请链接</view>
                    <view class="share">立即分享好友</view>
                </view>
            </view>

            <!-- 邀请流程图 -->
            <View class="codeBox mt-3 pt-3 pb-3 flex flex-col">
                <view class="center_title pb-2 text-center">
                    邀请流程
                </view>
                <view class="steps">
                    <view class="flex flex-row justify-around">
                        <view class="flex flex-col items-center">
                            <view class="iconBox flex-center">
                                <view class="icon i-icon-fenxiang color text-3xl" style="color: #fff;" />
                            </view>
                            <view class="mt-2 text-xs" style="color: #666666ff;">分享好友</view>
                        </view>
                        <view class="flex flex-col items-center">
                            <view class="iconBox flex-center">
                                <view class="icon i-icon-fenxiang color text-3xl" style="color: #fff;" />
                            </view>
                            <view class="mt-2 text-xs" style="color: #666666ff;">分享好友</view>
                        </view>
                        <view class="flex flex-col items-center">
                            <view class="iconBox flex-center">
                                <view class="icon i-icon-fenxiang color text-3xl" style="color: #fff;" />
                            </view>
                            <view class="mt-2 text-xs" style="color: #666666ff;">分享好友</view>
                        </view>
                    </view>

                </view>
            </view>
            <!-- 邀请记录 -->
            <View class="codeBox mt-3 pt-3 pb-3 flex  flex-col justify-center">
                <view class="center_title pb-2 text-center">
                    邀请记录
                </view>
                <view class="record flex justify-around pt-1">
                    <view class="flex flex-col items-center">
                        <view class="recordItem_key pb-2">
                            邀请人数
                        </view>
                        <view class="recordItem_val">
                            2<text>人</text>
                        </view>
                    </view>
                    <view class="flex flex-col items-center">
                        <view class="recordItem_key pb-2">
                            累计收益
                        </view>
                        <view class="recordItem_val">
                            10<text>元</text>
                        </view>
                    </view>
                </view>
            </view>

            <View class="codeBox mt-3 pt-3 pb-3 flex  flex-col justify-center">
                <view class="center_title pb-2 text-center">
                    邀请排行榜
                </view>
                <view class="rank pl-5 pr-5">
                    <view class="row pb-2 flex">
                        <view class="col1 text-center">排名</view>
                        <view class="col2 text-center">用户</view>
                        <view class="col3 text-center">邀请人数</view>
                    </view>

                    <template v-for="(item, index) in rankList">
                        <view class="row pb-3 flex">
                            <view class="col1 text-center">
                                <template v-if="index < 3">
                                    <image :src="`../../static/img/invite/rank${index + 1}.png`"></image>
                                </template>
                                <template v-else>
                                    {{ item.noun }}
                                </template>
                            </view>
                            <view class="col2 text-center flex justify-center items-center">
                                <image class="mr-1" src="@/static/logo.png"></image>{{ item.name }}
                            </view>
                            <view class="col3 num text-center">{{ item.inviteValue }}
                                <text>人</text>
                            </view>
                        </view>
                    </template>
                </view>
            </view>

        </view>
    </view>
</template>
<script setup lang="ts">
import { showToast } from 'vant';
// 引入vueuse code
import { useQRCode } from '@vueuse/integrations/useQRCode'
import type { QRCodeToDataURLOptions } from 'qrcode';
// 传入字符穿
const text = ref('https://vueuse.org')
const qrcode = useQRCode(text, <QRCodeToDataURLOptions>{
    errorCorrectionLevel: 'H',
    margin: 0,
    color: {
        dark: "#ffffffff",
        light: "#000"
    },
    width: 100
})

// 排行榜数据
const rankList = reactive([
    {
        noun: '1',
        name: '排行榜',
        inviteValue: '10'
    },
    {
        noun: '2',
        name: '排行榜',
        inviteValue: '10'
    }, {
        noun: '3',
        name: '排行榜',
        inviteValue: '10'
    }, {
        noun: '4',
        name: '排行榜',
        inviteValue: '10'
    },
])
// 复制邀请码
function copy() {
    if (text.value) {
        navigator.clipboard.writeText(text.value)
        showToast('复制成功')
    }

}



</script>
<style lang="scss">
page {
    background-color: #7D71F5;
    min-height: 100%;
}

.invite {
    .poster {
        background-image: url('@/static/img/invite/invite.png');
        width: 100%;
        height: 23.88rem;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .content {
        background-color: #7D71F5;
        border-radius: 0.63rem 0.63rem 0 0;
        position: relative;
        top: -1rem;

        .codeBox {
            border-radius: 0.63rem;
            opacity: 1;
            background: #ffffffff;

            .codeTile {
                color: #666666ff;
                font-size: 0.69rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
            }

            // 邀请码
            .code_content {


                .codeNum {
                    color: #333333ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                }

                .imgBox {
                    padding: 0.5rem;
                    border: 0.05rem dotted #001;
                }

                .copy {
                    color: #7d71f5ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                }

                .share {
                    box-sizing: border-box;
                    border-radius: 1.88rem;
                    opacity: 1;
                    background: #7d71f5ff;
                    font-size: 1.06rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                    color: #ffffffff;
                    padding: 0 6.25rem;
                    height: 2.75rem;
                    line-height: 2.75rem;
                }
            }

            // 邀请流程
            .steps {
                .iconBox {
                    background: #7d71f5ff;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 2.5rem;
                }
            }

            //邀请记录
            .record {
                .recordItem_key {
                    color: #666666ff;
                    font-size: 0.75rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                    text-align: left;
                }

                .recordItem_val {
                    color: #7d71f5ff;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";
                    font-size: 1.13rem;

                    text {
                        color: #000;
                        font-weight: 400;
                        font-family: "Source Han Sans CN";
                        font-size: 0.6rem;
                    }
                }
            }

            // 排行榜
            .rank {
                .row {
                    color: #666666ff;
                    font-size: 0.88rem;
                    font-weight: 400;
                    font-family: "Source Han Sans CN";

                    .col1 {
                        width: 30%;

                        image {
                            width: 1.5rem;
                            height: 0.88rem;
                        }
                    }

                    .col2 {
                        width: 40%;

                        image {
                            width: 1.63rem;
                            height: 1.63rem;
                            border-radius: 1.63rem;
                        }
                    }

                    .col3 {
                        width: 30%;
                    }

                    .num {
                        color: #7D71F5;
                        font-weight: 400;
                        font-family: "Source Han Sans CN";
                        font-size: 1.1rem;

                        text {
                            color: #000;
                            font-size: 0.6rem;


                        }
                    }
                }
            }

        }
    }
}
</style>
