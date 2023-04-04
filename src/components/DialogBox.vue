<template>
    <view>
        <van-popup :show="dialogShow" :close-on-click-overlay="false"
            style="width: 80%; padding: 1rem;border-radius:0.25rem; background-color: #ffffffff;">
            <view text-center>
                <view v-if="title" text-xl>{{ title }}</view>
                <view v-if="content">{{ content }}</view>
            </view>
            <view flex pt-8 justify-around>
                <view @click="$emit('cancel')">取消</view>
                <view color @click="$emit('confirm')">确认</view>
            </view>
        </van-popup>
    </view>
</template>
<script setup>
const { dialogShow } = $(storeToRefs(popupStore()));
let props = defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
})
</script>
