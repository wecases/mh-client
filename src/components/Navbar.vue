<template>
	<view>
		<van-nav-bar :title="title" left-arrow>
			<template #left>
				<van-icon name="arrow-left" size="18" color="#000" />
			</template>
		</van-nav-bar>
		{{ title }}
	</view>
</template>
<script setup>
let props = defineProps({
	text: {
		type: String,
		default: ""
	},
})
console.log(props)
</script>
