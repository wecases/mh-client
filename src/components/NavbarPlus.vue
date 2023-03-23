<template>
    <view class="nav">
        <van-nav-bar :border="false" title="我的钱包" :fixed="true" :placeholder="true" @click-left="onClickLeft" left-arrow>
            <template #left>
                <van-icon name="arrow-left" size="20" :color="color" />
            </template>
            <template #title>
                <view class="nav_titile_text" :style="{color:color}">{{ text }}</view>
            </template>
        </van-nav-bar>
    </view>
</template>
<script setup>

const props = defineProps({
    text: {
		type: String,
		default: ""
	},
    // 字体图标颜色
    color:{
        type:String,
        default:'#ffffffff'
    }
})
const onClickLeft = () =>{
    uni.navigateBack()
}
</script>

<style>
/deep/.van-nav-bar__content {
    background-color: transparent !important;
    border: none;
}

/deep/.van-nav-bar {
    background-color: transparent !important;
    border: none;

}

.nav_titile_text {
    font-size: 1.06rem;
    font-weight: 500;
}
</style>
