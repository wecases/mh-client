<template>
    <view>
        <van-count-down :time="time">
            <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
            </template>
        </van-count-down>
    </view>
</template>

<script setup>
let prop = defineProps({
    time: {
        type: Number,
        default: 0
    }
})
</script>

<style lang="scss" scoped>
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #ffa065ff;
    font: size 0.63rem;
}

.block {
    height: 0.94rem;
    line-height: 0.94rem;
    padding: 0 0.2rem;
    display: inline-block;
    color: #ffffffff;
    font-size: 0.63rem;
    font-weight: 400;
    font-family: "Source Han Sans CN";
    border-radius: 0.13rem;
    opacity: 1;
    background: #ffa065ff;
}
</style>
