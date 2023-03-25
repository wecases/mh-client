<template>
	<view class="cardList">
		<view class="shop_item" v-for="(shop, index) in list" :key="index">
			<view class="cover">
				<image src="@/static/logo.png" mode=""></image>
			</view>
			<view class="Info">
				<view class="title ellipsis">{{ shop.title }}</view>
				<view class="price">
					<view class="unity">￥{{ shop.price }}</view>
					<view v-if="type == 1" class="look">
						<!-- <image src="@/static/img/center/look.svg" mode=""></image> -->
						<text>120</text>
					</view>
				</view>
				<view class="relation" v-if="type == 1">
					<view class="head">
						<image src="@/static/logo.png" mode=""></image>
					</view>
					<text>188234325432</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
// const shopNavAct = inject('shopNavAct')
// console.log("shopNavAct", shopNavAct.value);
let props = defineProps({
	list: {
		type: Array,
		default: [{
			title: "笔记本电脑盲盒",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		}, {
			title: "笔记本电脑盲盒",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},]
	},
	type: {
		type: Number,
		default: 0
	}
})
console.log(props.type);
</script>

<style lang="scss" scoped>
.cardList {
	display: flex;
	justify-content: space-between;
}

.shop_item {
	background: #FFFFFF;
	border-radius: 15rpx;
	margin-bottom: 20rpx;
	width: 48%;

	&.left {
		margin-right: 10rpx;
	}

	&.right {
		margin-left: 10rpx;
	}

	.cover {
		image {
			width: 100%;
			height: 7.88rem;
		}
	}

	.Info {
		padding: 0.75rem;


		.title {
			color: #333333ff;
			font-size: 0.75rem;
			font-weight: 400;
			width: 290rpx;
			margin-bottom: 15rpx;

			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.price {
			color: #f09244ff;
			font-weight: 400;
			font-size: 0.7rem;
			margin-bottom: 10rpx;
			display: flex;
			align-items: center;
		}

		.look {
			padding-left: 0.75rem;
			display: flex;
			align-items: center;
			color: #666666ff;
			font-size: 0.69rem;
			font-weight: 400;

			>image {
				width: 0.75rem;
				height: 0.75rem;
			}
		}

		.relation {
			padding-top: 0.25rem;
			display: flex;
			align-items: center;
			color: #333333ff;
			font-size: 0.69rem;
			font-weight: 400;

			.head {

				>image {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 0.75rem;
					margin-right: 0.2rem;
				}
			}
		}

	}

}
</style>
