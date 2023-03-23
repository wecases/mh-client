<template>
	<view class="index">
		<view class="i-icon-icon2 text-lg"></view>
		<view class="container">
			<view class="top">
				<view class="header">
					<!-- 搜索 -->
					<view class="search">
						<image src="@/static/img/index/search.png"></image>
						<input type="text" placeholder="手机系列盲盒" placeholder-style="color:#B5B8BA;">
					</view>
					<view class="singin"  @click="showPopup">
						<image src="@/static/img/index/qiandao.svg"></image>
						签到
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
				<view class="row">
					<text>新上盲盒</text>
					<text>更多
						<image class="arrow" src="@/static/img/center/rightArrow.png" mode=""></image>
					</text>
				</view>
				<card list="1"></card>
				<view class="row flex f-x-b" @click="Jump({ url: '/pages/hot/hot', params: { id: 1, name: 2 } })">
					<text>热卖专区</text>
					<text>更多
						<image class="arrow" src="@/static/img/center/rightArrow.png" mode=""></image>
					</text>

				</view>

				<card-list></card-list>
			</view>
		</view>
		<!-- 签到弹出框 -->
		<van-popup v-model:show="siginShow" style="width: 90%; background-color: transparent;">
			<view class="siginPopup">
				<view class="title">累计签到赢好礼</view>
				<view class="day">
					<text>已连续签到1天</text>
				</view>
				<view class="grid">
					<view class="grid_row" v-for="item, index in 3" :key="index">
						<view class="grid_item" v-for="item, index in 2" :key="index">
							<view class="grid_item_day">第一天</view>
							<view class="grid_item_img">
								<image src="@/static/logo.png"></image>
							</view>
							<view class="grid_item_money">+10金币</view>
						</view>
					</view>
					<view class="day7">
						<view class="day">第七天</view>
					</view>
				</view>
				<view class="signBtn" @click="siginEvent">立即签到</view>
			</view>
			<view class="closePop" @click="close('siginShow')">
				<image src="@/static/close.svg"></image>
			</view>
		</van-popup>
		<!-- 奖励弹框 -->
		<van-popup v-model:show="siginAward" style="width: 90%; background-color: transparent;">
			<view class="award">
				<view class="award_title">
					恭喜获得10个金币
				</view>
				<view class="award_title1">
					明天签到再得10金币
				</view>
				<image class="award_img" src="@/static/img/index/singin.png"></image>
				<view class="award_btn">
					开心收下
				</view>
			</view>
			<view class="closePop" @click="close('siginAward')">
				<image src="@/static/close.svg"></image>
			</view>
		</van-popup>

	</view>
</template>

<script setup>
import { Jump } from "@/utils/common";
// 签到弹出层显示
const siginShow = ref(false)
// 签到奖励
const siginAward = ref(false)
const showPopup = () => {
	siginShow.value = true;
};
const siginEvent = () => {
	siginShow.value = false
	siginAward.value = true
}
// 关闭弹出层
const close = (pop) => {
	if (pop == 'siginAward') {
		siginAward.value = false
	} else if (pop == 'siginShow') {
		siginShow.value = false

	}
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
				padding: 0.38rem;
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
		padding: 0 1rem;
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
		display: flex;
		justify-content: space-between;

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

	.award {
		border-radius: 0.63rem;
		opacity: 1;
		background: #ffffffff;
		padding: 1.2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;

		.award_title {
			color: #333333ff;
			font-weight: 500;
			font-size: 1.13rem;
			font-family: "Source Han Sans CN";
		}

		.award_title1 {
			color: #666666ff;
			font-size: 0.88rem;
			font-weight: 400;
			font-family: "Source Han Sans CN";
			padding: 0.2rem 0;
		}

		.award_img {

			width: 11.81rem;
			height: 7.63rem;
			margin-bottom: 0.2rem;
		}

		.award_btn {
			background-image: url('@/static/img/index/siginBtn.png');
			width: 10.5rem;
			height: 3.75rem;
			background-size: cover;
			background-repeat: no-repeat;
			display: flex;
			justify-content: center;
			align-items: center;
			color: #ffffffff;
			font-size: 1.38rem;
		}
	}
}

.siginPopup {
	padding: 0.75rem;
	margin: 0 auto;
	border-radius: 0.63rem;
	opacity: 1;
	background: #ffffffff;

	.title {
		color: #333333ff;
		font-size: 1rem;
		font-weight: 500;
		text-align: center;
		padding-bottom: 0.3rem;
	}

	.day {
		display: flex;
		justify-content: center;
		margin-bottom: 0.75rem;

		text {
			border-radius: 1.25rem;
			opacity: 1;
			background: #aca4ffff;
			padding: 0.2rem 0.8rem;
			margin: 0 auto;
			color: #ffffffff;
			font-size: 0.69rem;
			font-weight: 400;
		}
	}

	.grid {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.grid_row {
			display: flex;
			width: 49%;
			justify-content: space-between;
			margin-bottom: 0.75rem;
		}

		.day7 {
			width: 48%;
			background-color: red;
			margin-bottom: 0.75rem;
			border-radius: 0.25rem;
			background: #f1f1f1ff;
		}

		.grid_item {
			width: 48%;
			display: flex;
			flex-direction: column;
			align-items: center;
			border-radius: 0.25rem;
			opacity: 1;
			background: #f1f1f1ff;
			padding: 0.38rem 0;

			.grid_item_day {
				color: #666666ff;
				font-size: 0.81rem;
				font-weight: 400;
			}

			.grid_item_img {
				>image {
					width: 1.88rem;
					height: 2rem;
				}
			}

			.grid_item_money {
				color: #666666ff;
				font-size: 0.69rem;
			}
		}
	}

	.signBtn {
		height: 2.75rem;
		border-radius: 1.88rem;
		opacity: 1;
		background: #7d71f5ff;
		color: #ffffffff;
		font-size: 1.06rem;
		text-align: center;
		line-height: 2.75rem;
	}

}

.closePop {
	text-align: center;
	margin-top: 1.44rem;

	>image {
		width: 1.43rem;
		height: 1.43rem;
	}

}
</style>
