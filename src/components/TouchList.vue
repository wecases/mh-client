<template>
    <view>
        <!-- 触底加载 -->
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <slot></slot>
        </van-list>
    </view>
</template>
<script setup>
let props = defineProps({
    //父级触底事件
    getData: {
        default: Function,
    },
    //页数
    page: {
        default: 2
    }
})

const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
    setTimeout(() => {

        console.log("触底");
        // 加载状态结束
        loading.value = false;
        // 触底调用父级函数
        props.getData()
        // 数据全部加载完成
        // finished.value = true;
    }, 1000);
};
</script>
<style lang="scss" scoped>
</style>

