<template>
	<view class="center">
		<!-- 用户信息 -->
		<view class="info">
			<view class="avatar"></view>
			<view class="right">
				<view class="name ellipsis">{{ user.name }}</view>
				<view class="bottom">
					v1等级
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="grid_box">
			<view class="userInfo flex">
				<view class="infoItem" @click="Jump('/pages/myWallet/myWallet')">
					<view class="infoTop">￥110.00</view>
					<view class="infoBottom">账户余额</view>
				</view>
				<view class="infoItem">
					<view class="infoTop">2</view>
					<view class="infoBottom">卖出的</view>
				</view>
				<view class="infoItem">
					<view class="infoTop">2</view>
					<view class="infoBottom">已合成</view>
				</view>
				<view class="infoItem">
					<view class="infoTop">20</view>
					<view class="infoBottom">碎片数量</view>
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="grid_box">
			<navigator url="/pages/myOrders/myOrders">
				<view class="top">
					<view class="title">我的订单</view>
				</view>
				<van-grid :border="false" col="4">
					<template v-for="nav in myOrderNav">
						<van-grid-item class="grid_item">
							<view :class="nav.icon" text-3xl text3></view>
							<view class="text pt-1 text3">{{ nav.text }}</view>
							<!-- <u-badge v-if="nav.value" absolute :offset="[-5, 10]" numberType="limit" :type="type" max="99"
							:value="nav.value"></u-badge> -->
						</van-grid-item>
					</template>
				</van-grid>
			</navigator>

		</view>
		<!-- 会员中心 -->
		<view class="grid_box">
			<view class="top">
				<view class="title">我的服务</view>
			</view>
			<van-grid col="4" :border="false">
				<template v-for="nav in vipCenterNav">
					<van-grid-item class="grid_item flex items-center justify-center" @click="Jump(nav.jump)">
						<view :class="nav.icon" :style="{ color: nav.color }" text-3xl></view>
						<view class="text">{{ nav.text }}</view>
						<!-- <u-badge v-if="nav.value" absolute :offset="[-5, 10]" numberType="limit" :type="type" max="99"
							:value="nav.value"></u-badge> -->
					</van-grid-item>
				</template>
			</van-grid>
		</view>
	</view>
</template>

<script setup>
const { vipCenterNav, myOrderNav } = storeToRefs(centerStore())
// 用户信息
const { user } = $(storeToRefs(userStore()))

</script>

<style lang="scss" scoped>
page {
	background-color: #f1f1f1;

}

.center {
	// padding-top: 50rpx;
	background-image: url("@/static/img/center/mineBg.png");
	height: 11.88rem;
	background-repeat: no-repeat;
	background-size: cover;

	.info {
		padding-bottom: 2.31rem;
		padding-top: 3.5rem;
		padding-left: 1rem;
		display: flex;
		align-items: center;

		.avatar {
			margin-right: 20rpx;
			width: 110rpx;
			height: 110rpx;
			flex-shrink: 0;
			background-image: url('@/static/img/center/userDefault.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			background-position: center;
			z-index: 999 !important;
		}

		.right {
			.name {
				color: #ffffffff;
				font-size: 0.81rem;
				font-weight: 400;
				width: 400rpx;
				margin-bottom: 0.2rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.bottom {
				color: #ffffffff;
				font-size: 0.63rem;
				font-weight: 400;
				display: flex;
				align-items: center;
			}
		}
	}

	.grid_box {
		background: #FFFFFF;
		border-radius: 12rpx;
		padding: 30rpx;
		margin: 0 1rem;
		margin-bottom: 30rpx;

		.userInfo {
			display: flex;

			.infoItem {
				width: 25%;
				display: flex;
				flex-direction: column;
				align-items: center;

				.infoTop {
					color: #333333ff;
					font-weight: 500;
					text-align: left;
					font-size: 0.88rem;
				}

				.infoBottom {
					color: #666666ff;
					font-size: 0.75rem;
					font-weight: 400;
				}
			}
		}

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.title {
				font-size: 32rpx;
				font-weight: 500;
				color: #23232F;
			}

			.check {
				font-size: 28rpx;
				font-weight: 400;
				color: #999999;
				margin-right: 5rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}

		.grid_item {
			position: relative;

			image {
				width: 1.5rem;
				height: 1.38rem;
				margin-bottom: 15rpx;
			}

			.text {
				color: #333333ff;
				font-size: 0.69rem;
				font-weight: 400;
				padding-bottom: 0.5rem;
			}
		}
	}

	.btn {
		margin-top: 76rpx;
	}
}
</style>
