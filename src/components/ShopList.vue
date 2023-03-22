<template>
	<view class="shopList">
		<znx-waterFall :value="list">
			<template v-slot:left="{ leftList }">
				<view class="shop_item left" v-for="(shop, index) in leftList" :key="index">
					<view class="cover"></view>
					<view class="title ellipsis">{{ shop.title }}</view>
					<view class="price flex f-y-c">
						<view class="unity">￥</view>
						{{ shop.price }}
					</view>
					<view class="vipIdent">优享会员价</view>
					<view class="vipPrice" v-if="shop.vipPrice">￥{{ shop.vipPrice }}/会员价格</view>
					<view class="orginPrice" v-if="shop.orginPrice">￥{{ shop.orginPrice }} 原价</view>
				</view>
			</template>
			<!-- 			<template v-slot:right="{rightList}">
				<view class="shop_item right" v-for="(shop, index) in rightList" :key="index">
					<view class="cover"></view>
					<view class="title ellipsis">{{shop.title}}</view>
					<view class="price flex f-y-c">
						<view class="unity">￥</view>
						{{shop.price}}
					</view>
					<view class="vipIdent">优享会员价</view>
					<view class="vipPrice" v-if="shop.vipPrice">￥{{shop.vipPrice}}/会员价格</view>
					<view class="orginPrice" v-if="shop.orginPrice">￥{{shop.orginPrice}} 原价</view>
				</view>
			</template> -->
		</znx-waterFall>
		<!-- 暂无更多商品 -->
		<view class="noMore">没有更多商品啦~</view>
	</view>
</template>

<script setup>

// props
let props = defineProps({
	list: {
		type: Array,
		default: [{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "羊肚野生干货50g云南野生干货",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "羊肚野生干货50g云南野生干货",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "羊肚野生干货50g云南野生干货",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "羊肚野生干货50g云南野生干货",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "羊肚野生干货50g云南野生干货",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮猪五花肉",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		},
		{
			title: "农家散养土猪带皮后腿肉",
			price: 128.99,
		},
		{
			title: "榛蘑东北野生蘑菇长山山蘑菇",
			price: 128.99,
			vipPrice: 159.99,
			orginPrice: 179.99
		}
		],
	},
	noMore: {
		type: Boolean,
		default: true,
	}
})
</script>

<style lang="scss">
.shopList {
	.shop_item {
		background: #FFFFFF;
		border-radius: 15rpx;
		padding: 20rpx;
		margin-bottom: 20rpx;

		&.left {
			margin-right: 10rpx;
		}

		&.right {
			margin-left: 10rpx;
		}

		.cover {
			height: 300rpx;
			border-radius: 25rpx;
			margin-bottom: 20rpx;
		}

		.title {
			font-size: 28rpx;
			font-weight: 400;
			color: #333333;
			width: 290rpx;
			margin-bottom: 15rpx;
		}

		.price {
			font-size: 34rpx;
			font-weight: 500;
			color: #E50101;
			margin-bottom: 10rpx;

			.unity {
				font-size: 26rpx;
			}
		}

		.vipIdent {
			border: 1rpx solid #FBA241;
			border-radius: 6rpx;
			padding: 6rpx 10rpx;
			display: inline-block;
			font-size: 28rpx;
			font-weight: 400;
			color: #FBA241;
		}

		.vipPrice {
			font-size: 22rpx;
			font-weight: 400;
			color: #333333;
			line-height: 1;
			margin-bottom: 10rpx;
			margin-top: 16rpx;
		}

		.orginPrice {
			font-size: 22rpx;
			font-weight: 400;
			text-decoration: line-through;
			color: #999999;
		}
	}

	.noMore {
		font-size: 28rpx;
		font-weight: 400;
		color: #C3C9D3;
		margin-top: 30rpx;
		text-align: center;
	}
}
</style>
