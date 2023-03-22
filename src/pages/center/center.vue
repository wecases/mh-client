<template>
	<view class="center">
		<view class="bg">
			<!-- <image src="@/static/img/center/mineBg.png"  mode=""></image> -->

		</view>
		<!-- 用户信息 -->
		<view class="info">
			<view class="avatar"></view>
			<view class="right">
				<view class="name ellipsis">18845166</view>
				<view class="bottom">
					v1等级
				</view>
			</view>
		</view>
		<!-- 我的订单 -->
		<view class="grid_box">
			<view class="userInfo flex">
				<view class="infoItem" @click="$u.route('/pages/myWallet/myWallet')">
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
					<view class="check flex f-y-c">
						查看更多
						<image src="@/static/img/center/rightArrow.png" mode=""></image>
					</view>
				</view>
				<van-grid :border="false" col="4">
					<van-grid-item class="grid_item" v-for="(nav, index) in myOrderNav" :key="index">
						<!-- <image :src="$Common.img(nav.icon)" mode=""></image> -->
						<image :src="'../../static/img/' + nav.icon" />
						<view class="text">{{ nav.text }}</view>
						<u-badge v-if="nav.value" absolute :offset="[-5, 10]" numberType="limit" :type="type" max="99"
							:value="nav.value"></u-badge>
					</van-grid-item>
				</van-grid>
			</navigator>

		</view>
		<!-- 会员中心 -->
		<view class="grid_box">
			<view class="top flex f-y-c f-x-b">
				<view class="title">我的服务</view>
			</view>
			<van-grid col="4" :border="false">
					<van-grid-item class="grid_item t-c" v-for="(nav, index) in vipCenterNav" :key="index"
					@click="navto(nav.jump)">
						<image :src="'../../static/img/' + nav.icon" />
						<view class="text">{{nav.text}}</view>
						<!-- <u-badge v-if="nav.value" absolute :offset="[-5, 10]" numberType="limit" :type="type" max="99"
							:value="nav.value"></u-badge> -->
					</van-grid-item>
				</van-grid>
		</view>

	</view>
</template>

<script setup>
// 我的订单
let myOrderNav = reactive([{
	text: "待发货",
	icon: "center/order1.svg"
	,
	value: 2
},
{
	text: "待收货",
	icon: "center/order2.svg"
	,
	value: 2
},
{
	text: "已完成",
	icon: "center/order3.svg"
	,
	value: 2
}, {
	text: "全部订单",
	icon: "center/order4.svg"
	,
}
])
// 会员中心
let vipCenterNav = reactive([
	{
		text: "钱包",
		icon: "center/s1.svg",
		jump: "pages/myWallet/myWallet"
	},
	{
		text: "推荐好友",
		icon: "center/s2.svg",
	},
	{
		text: "我的地址",
		icon: "center/s3.svg",
		jump: "pages/address/address"
	},
	{
		text: "意见反馈",
		icon: "center/s4.svg",
		jump: "pages/feedback/feedback"
	},
	{
		text: "我的仓库",
		icon: "center/s5.svg",
		jump: "pages/myHouse/myHouse"
	},
	{
		text: "在线客服",
		icon: "center/s6.svg",
	},
	{
		text: "设置",
		icon: "center/s7.svg",
		jump: 'pages/set/set'

	}, {
		text: "碎片交易",
		icon: "center/s8.svg",
		jump: "pages/debrisExchange/debrisExchange"
	}
])
function navto(jump){
	uni.navigateTo({
			url: jump,

})}
</script>

<style lang="scss" scoped>
page {
	background-color: #f1f1f1;

}

.center {
	// padding-top: 50rpx;
	background-image: url("@/static/img/center/mineBg.png");
	width: 23.44rem;
	height: 11.88rem;
	background-repeat: no-repeat;
	background-position: center;

	.bg {
		position: absolute;
		left: 0;
		z-index: 0;
		width: 23.44rem;
		height: 11.88rem;
		top: 0;
	}

	.set {
		padding-right: 20rpx;
		margin-bottom: 20rpx;

		image {
			width: 50rpx;
			height: 50rpx;
		}
	}

	.info {
		padding-bottom: 2.31rem;
		padding-top: 3.5rem;
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
			margin-bottom: 30rpx;
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
