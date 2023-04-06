<template>
    <view class="fullscreen-image justify-center flex-col">
        <!-- 照片 -->
        <image :src="imageUrl" mode="aspectFit" class="image" />
        <!-- 按钮 -->
        <view type="primary" @tap="changeImage">更换照片</view>
    </view>
</template>

<script setup>
let imageUrl = ref()
let changeImage = () => {
    // 选择新照片并更新页面数据
    uni.chooseImage({
        success: (res) => {
            console.log(res);
            imageUrl = res.tempFilePaths[0];
            console.log(res.tempFilePaths[0]);

        }
    });
}
onLoad((options) => {
    // 获取图片 URL 参数
    // this.imageUrl = decodeURIComponent(options.imageUrl || this.imageUrl);
})
</script>

<style>
page {
    background-color: #000;
}

.fullscreen-image {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>
