<template>
	<view class="add">
		<navbar :text="添加收货地址"></navbar>
		<view class="content">
			<!-- 收货地址信息 -->
			<view class="addressInfo">
				<view class="item flex">
					<view class="title">收货人</view>
					<input placeholder-style="color: #999" type="text" placeholder="填写收货人姓名">
				</view>
				<view class="item flex">
					<view class="title">手机号码</view>
					<input :maxlength="11" placeholder-style="color: #999" type="number" placeholder="请填写收货人的手机号码">
				</view>
				<view class="item flex" @click="addressShows">
					<view class="title">选择地区</view>
					<input disabled placeholder-style="color: #999" type="text" v-model="areaAddress"
						placeholder="请选择省、市、区">
					<image class="arrow absolute" src="@/static/img/rightArrow.png" mode=""></image>
				</view>
				<view class="item flex">
					<view class="title">详细地址</view>
					<input placeholder-style="color: #999" type="text" placeholder="小区楼栋/乡村名称">
				</view>
			</view>
		</view>
		<!-- 省市区 -->

	</view>
</template>

<script setup>

import {
	ref,
	reactive,
} from "vue"
// let address = reactive({
// 	// 是否设置为默认地址
// 	is_default: false,
// 	// 省id
// 	province_id: null,
// 	// 市id
// 	city_id: null,
// 	// 区id
// 	area_id: null,
// 	// 收货人姓名
// 	name: "",
// 	// 收货人手机号
// 	mobile: "",
// 	// 详细地址
// 	detail: ""
// })
// 城市选择器显示隐藏开关
let addressShow = ref(false)
// 选择的地区
let areaAddress = ref('')
let editId = ref(null)

let columns = ref([

])
let columnData = ref([

])

function addressShows() {
	addressShow.value = true
	console.log('addressShow', addressShow.value);
}

</script>

<style lang="scss">
.add {

	.content {
		margin-top: 0.75rem;
		border-radius: 0.88rem;
		opacity: 1;
		background: #ffffffff;
		padding: 0 0.75rem;

		.addressInfo {
			padding: 30rpx 22rpx;
			background-color: #fff;
			border-radius: 20rpx;

			.item {
				font-size: 28rpx;
				font-weight: 500;
				color: #282828;
				padding-bottom: 20rpx;
				margin-bottom: 30rpx;
				border-bottom: 1rpx solid #f5f5f5;
				position: relative;
				display: flex;
				widows: 100%;

				&:last-child {
					padding-bottom: 0;
					margin-bottom: 0;
					border-bottom: none;
				}

				.title {
					margin-right: 31rpx;
					width: 22%;
				}

				input {
					width: 68%;
					height: 26rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #282828;
				}

				.arrow {
					width: 25rpx;
					height: 25rpx;
					right: 10rpx;
					top: 20%;
				}
			}
		}

	}
}
</style>
