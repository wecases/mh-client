<template>
    <view class="debrisDetails">
        <van-nav-bar :boder="false" left-arrow>
            <template #left>
                <van-icon name="arrow-left" size="20" :color="color" />
            </template>
            <template #title>
                <view>
                    <view class="search flex">
                        <view class="i-icon-sousuo"></view>
                        <input type="text" placeholder="手机系列盲盒" placeholder-style="#999999ff">
                    </view>
                </view>
            </template>
        </van-nav-bar>
        <view class="content flex justify-between items-center px-4 py-4">
            <view>
                <van-image src="@/static/logo.png" width="1rem" height="1rem" fit="cover" round lazy-load />
                <text class="phone caret-gray-400 text-xs pl-1">1334243423332</text>
            </view>
            <view class="flex">
                <view class="i-icon-yincang"></view>
                <view class="num text-xs">120</view>
            </view>
        </view>

        <but text="我想要"></but>
    </view>
</template>
<script setup>
let color = ref('#000')
</script>
<style lang="scss" scoped>
page {
    min-height: 100%;
    background-color: #ffffffff;
}

.debrisDetails {
    .search {
        background: #F5F5F5;
        border-radius: 35rpx;
        padding: 0.38rem;
        flex: 1;
        align-items: center;
        font-size: 0.63rem;
    }

    .content {
        .phone {
            color: #333333ff;
        }

        .num {
            color: #666666ff;
        }
    }
}
</style>
