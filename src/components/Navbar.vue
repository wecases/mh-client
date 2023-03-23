<template>
	<view>
		<van-nav-bar :title="text" :border="false" left-arrow @click-left="onClickLeft">
			<template #left>
				<van-icon name="arrow-left" size="20" color="#000" />
			</template>
		</van-nav-bar>
	</view>
</template>
<script setup>
let props = defineProps({
	text: {
		type: String,
		default: ""
	},
})
function onClickLeft() {
	// 返回上一层页面
	uni.navigateBack()
}
</script>
