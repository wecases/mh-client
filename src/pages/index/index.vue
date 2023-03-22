<template>
	<view class="index">
		<view class="container">
			<view class="top">
				<view class="header">
					<!-- 搜索 -->
					<view class="search flex f-y-c">
						<image src="@/static/img/index/search.png"></image>
						<input type="text" placeholder="手机系列盲盒" placeholder-style="color:#B5B8BA;">
					</view>
				</view>
				<!-- 轮播图 -->
				<view class="uni-margin-wrap">
					<swiper class="swipers" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
						:interval="interval" :duration="duration">
						<swiper-item>
							<image src="@/static/logo.png" mode=""></image>
						</swiper-item>
						<swiper-item>
							<image src="@/static/logo.png" mode=""></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="content">
				<view class="newUser flex f-x-b f-y-c">
					<view class="img flex f-y-c">
						<image src="@/static/logo.png" mode=""></image>
					</view>
					<view class="title">
						<view class="top">新人必抽盲盒</view>
						<view class="bottom">0.01元抽一次 新人可抽三次</view>
					</view>
					<view class="newBuy">
						立即去换
					</view>
				</view>
				<view class="row flex  -x-b">
					<text>新上盲盒</text>
					<text>更多</text>
				</view>
				<card list="1"></card>
				<view class="row flex f-x-b" @click="Jump({ url: '/pages/sell/sell', params: { id: 1, name: 2 } })">
					<text>热卖专区</text>
					<text>更多
						<image class="arrow" src="@/static/img/center/rightArrow.png" mode=""></image>
					</text>

				</view>
				<!-- <shopList></shopList> -->
				<CardList></CardList>
				<ShopList></ShopList>
			</view>
		</view>
	</view>
</template>

<script setup>
import { Jump } from "@/utils/common";
</script>

<style lang="scss" scoped>
page {
	padding: 0;
	background: #f1f1f1ff;

	&::after {
		background: #fff;
	}
}

.index {
	margin-top: 30rpx;

	.container {
		// display: flex;
	}


	.top {
		background: #ffffffff;

		.header {
			margin-bottom: 35rpx;
			display: flex;


			.search {
				background: #F5F5F5;
				border-radius: 35rpx;
				padding: 15rpx 24rpx;
				flex: 1;
				display: flex;
				align-items: center;

				image {
					width: 40rpx;
					height: 40rpx;
					margin-right: 15rpx;
				}

				input {
					font-size: 30rpx;
					font-weight: 400;
				}
			}


		}

		.uni-margin-wrap {
			position: relative;
			// height: 210rpx !important;
			border-radius: 50%;

			.swipers {
				height: calc(400rpx);
			}

			uni-swiper-item,
			uni-swiper {
				border-radius: 10rpx;
			}

			image {
				width: 100%;
				height: 280rpx;
			}
		}

		.uni-margin-wrap {
			position: relative;
			// height: 210rpx !important;
			border-radius: 50%;
			margin: 16rpx;

			.swipers {
				height: calc(300rpx);
			}

			uni-swiper-item,
			uni-swiper {
				border-radius: 10rpx;
			}

			image {
				width: 100%;
				height: 280rpx;
			}
		}

	}

	.content {
		padding: 0 20rpx;
	}

	.newUser {
		// margin: 30rpx;
		margin-top: 0.75rem;
		border-radius: 10rpx;
		opacity: 1;
		background: #ffffffff;
		padding: 0 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.img {
			>image {
				width: 74px;
				height: 74px;

			}
		}

		.title {

			.top {
				font-size: 16px;
				color: #333333ff;
				text-align: center;
				padding-bottom: 5px;
			}

			.bottom {
				font-size: 10px
			}
		}

		.newBuy {
			padding: 0 0.56rem;
			height: 1.25rem;
			color: #ffffffff;
			font-size: 10rpx;
			border-radius: 20rpx;
			opacity: 1;
			background: #7d71f5ff;
		}
	}

	.row {
		padding: 1.5rem 0 1rem;

		:first-child {
			color: #333333ff;
			font-size: 0.88rem;
			font-weight: 500;
		}

		:last-child {
			color: #666666ff;
			font-size: 11px;
		}

		.arrow {
			width: 0.7rem;
			height: 0.8rem;
		}
	}
}
</style>
