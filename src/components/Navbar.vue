<template>
	<view>
		<van-nav-bar :title="text" :border="false" arrow-left @click-left="onClickLeft">
			<template #left v-if="noLeft">
				<van-icon name="arrow-left" size="20" :color="color" />
			</template>
		</van-nav-bar>
	</view>
</template>
<script setup>
let props = defineProps({
	//标题
	text: {
		type: String,
		default: ""
	},
	// 是否有返回按钮
	noLeft: {
		type: Boolean,
		default: true
	},
	// 标题颜色
	color: {
		type: String,
		default: '#000'
	}
})
function onClickLeft() {
	// 返回上一层页面
	uni.navigateBack()
}
</script>
