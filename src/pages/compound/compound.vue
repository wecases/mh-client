<template>
    <view class="compound">
        <navbar-plus text="合成碎片"></navbar-plus>
        <view class="top">
            <view class="name">
                <text>5G苹果新款手机</text>
            </view>
            <image src="@/static/logo.png"></image>
        </view>
        <view class="grid">
            <view class="grid_name">
                我的碎片
            </view>
            <van-grid :column-num="3" :border="false">
                <van-grid-item class="grid_item" v-for="i, index in 6" :key="index">
                    <van-badge :content="5">
                        <image class='grid_item_img' src="@/static/logo.png" />
                        <view class="text">碎片</view>
                    </van-badge>
                </van-grid-item>
            </van-grid>
            <view class="compoundBtn">立即合成</view>
        </view>
    </view>
</template>
<script setup>

</script>

<style lang="scss" scoped>
page {
    background-color: #c6c3f4;
}

.compound {
    background-image: url('@/static/img/compound/compound.png');
    width: 100vw;
    height: 100vh;
    background-size: cover;

    .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8vh;

        .name {
            border-radius: 4.38rem;
            opacity: 1;
            background: #ffffffff;
            padding: 0.2rem 0.8rem;
            margin-bottom: 0.94rem;

            >text {
                color: #7d71f5ff;
                font-size: 0.81rem;
                font-weight: 400;
                font-family: "Source Han Sans CN";
            }

        }

        >image {
            width: 7.19rem;
            height: 12.06rem;
        }
    }

    .grid {
        margin: 0 1rem;
        margin-top: 4.31rem;
        padding: 0.75rem 0.18rem 0 0.18rem;
        border-radius: 0.63rem;
        opacity: 1;
        background: #ffffffff;

        .grid_name {
            text-align: center;
            color: #333333ff;
            font-size: 0.94rem;
            font-weight: 500;
            font-family: "Source Han Sans CN";
        }

        .grid_item {
            .grid_item_img {
                width: 3.5rem;
                height: 3.63rem;
            }

        }

        .compoundBtn {
            background-image: url('@/static/img/compound/compoundBtn.png');
            width: 12.06rem;
            height: 4.31rem;
            background-size: cover;
            background-repeat: no-repeat;
            text-align: center;
            line-height: 4.31rem;
            color: #ffffffff;
            font-size: 1.06rem;
            font-weight: 400;
            font-family: "Source Han Sans CN";
            margin: 0 auto;
        }
    }
}
</style>
