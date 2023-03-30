<template>
	<view>
		<view class="bottom"></view>
		<view class="addBox" style="display: flex; justify-content: center;">
			<view class="add" @click="$emit('submit')">{{ text }}</view>
		</view>
	</view>
</template>

<script setup>
let prop = defineProps({
	text: {
		type: String,
		default: "按钮"
	}
})
</script>

<style lang="scss" scoped>
.bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 4.3rem;
	width: 100vw;
	background: #ffffffff;
	padding: 0 1rem;

}

.addBox {
	display: flex;
	justify-content: center;
	margin: 0 auto;
}

.add {
	border-radius: 1.88rem;
	opacity: 1;
	background: #7d71f5ff;
	padding: 0.6rem 7rem;
	text-align: center;
	color: #ffffffff;
	font-size: 1.06rem;
	font-weight: 400;
	position: fixed;
	bottom: 1rem;
}
</style>
