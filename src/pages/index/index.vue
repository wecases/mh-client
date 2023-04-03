<template>
	<view class="index">
		<view class="i-icon-icon2 text-lg"></view>
		<view class="container">
			<view class="top">
				<view class="header flex items-center">
					<!-- 搜索 -->
					<view class="search flex">
						<view class="i-icon-sousuo" text-xs pr-5></view>
						<input type="text" placeholder="手机系列盲盒" placeholder-style="color:#B5B8BA;">
					</view>
					<view class="singin" @click="showPopup">
						<view class="i-icon-qiandao color text-2xl" />
						<text>签到</text>
					</view>
				</view>
				<!-- 轮播图 -->
				<view class="uni-margin-wrap">
					<!-- <swiper class="swipers" circular :indicator-dots="indicatorDots" :autoplay="autoplay"
						:interval="interval" :duration="duration"> -->
					<swiper class="swipers" circular>
						<swiper-item>
							<image src="@/static/logo.png"></image>
						</swiper-item>
						<swiper-item>
							<image src="@/static/logo.png"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
			<view class="content px-4">
				<view class="newUser flex f-x-b f-y-c">
					<view class="img flex f-y-c">
						<image src="@/static/logo.png"></image>
					</view>
					<view class="title">
						<view class="top">新人必抽盲盒</view>
						<view class="bottom">0.01元抽一次 新人可抽三次</view>
					</view>
					<view class="newBuy text-2 px-2 py-1">
						立即去换
					</view>
				</view>
				<view class="row items-center flex justify-between mt5 mb3">
					<text class="text-3">新上盲盒</text>
					<view flex items-center text-2>更多
						<view class="i-icon-jiantou2 color text-xs" />
					</view>
				</view>
				<view flex overflow-scroll>
					<new-blind @go-blind="id => Jump('/pages/openBlind/openBlind', { params: { id: id } })"></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
					<new-blind></new-blind>
				</view>
				<view class="row items-center flex justify-between mt5 mb3"
					@click="Jump('/pages/hot/hot', { params: { id: 1, name: 2 } })">
					<text class="text-3">热卖专区</text>
					<view flex items-center text-2>更多
						<view class="i-icon-jiantou2 color text-xs" />
					</view>
				</view>
				<card-list :list="hotBoxList"></card-list>
			</view>
		</view>
		<award-popup></award-popup>

	</view>
</template>

<script setup lang="ts">

const { getUserInfo, goLogin } = userStore()
const { getHotBoxList, getNewBoxList } = boxStore()
onShow(async () => {
	await getNewBoxList()
	await getHotBoxList()
	await goLogin()
	// await getUserInfo()
})
const { user, userinfo } = $(storeToRefs(userStore()))
const { newBoxList, hotBoxList } = $(storeToRefs(boxStore()));
console.log(user.name, 'userInfo');

const { unsiginShow } = popupStore()
function showPopup() {
	unsiginShow()
}

</script>

<style lang="scss" scoped>
page {
	padding: 0;
	background: #f1f1f1ff;
}


.index {
	.top {
		background: #ffffffff;
		padding-top: 0.75rem;

		.header {
			margin-bottom: 35rpx;
			display: flex;
			margin: 0 1rem;

			.singin {
				display: flex;
				flex-direction: column;
				margin-left: 2rem;

				>image {
					width: 1.5rem;
					height: 1.5rem;
				}

				color: #333333ff;
				font-size: 0.63rem;
				font-weight: 400;
			}

			.search {
				background: #F5F5F5;
				border-radius: 35rpx;
				padding: 0 0.38rem;
				height: 1.75rem;
				flex: 1;
				align-items: center;
				font-size: 0.63rem;
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
			color: #ffffffff;
			border-radius: 1.25rem;
			opacity: 1;
			background: #7d71f5ff;
		}
	}

	.row {

		:first-child {
			color: #333333ff;
			font-weight: 500;
		}

		:last-child {
			color: #666666ff;
			font-weight: 400;
		}

	}

}
</style>
