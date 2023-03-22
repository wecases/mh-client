<template>
	<view class="message">
		<znx-header noLeft rightPadding="0">
			<template v-slot:right>
				<view class="bell relative">
					<image src="@/static/img/message/ball.png" mode=""></image>
					<u-badge absolute :offset="[-6, -8]" numberType="limit" :type="type" max="99" :value="1"></u-badge>
				</view>
			</template>
		</znx-header>
		<!-- 公告列表 -->
		<view class="list">
			<view class="item" v-for="num in 10" :key="num">
				<view class="content">
					<view class="title flex f-y-c f-x-b">
						<view class="value ellipsis">app版本更新</view>
						<view class="time">2022-11-15 16:23:25</view>
					</view>
					<view class="inter ellipsis">尊敬的用户们，app将于2022-11-28 12:00:00进行维护更新,请大家提前做好准备</view>
				</view>
				<view class="check flex f-x-b f-y-c">
					查看更多
					<image src="@/static/img/center/rightArrow.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.message {
	.bell {
		transform: translateY(6rpx);

		image {
			width: 40rpx;
			height: 40rpx;
		}
	}

	.list {
		padding-bottom: 30rpx;

		.item {
			margin-top: 30rpx;
			background: #FFFFFF;
			border-radius: 24rpx;
			padding: 30rpx;

			.content {
				padding-bottom: 40rpx;
				font-weight: 400;
				border-bottom: 1rpx solid #EEEFF1;

				.title {
					font-size: 32rpx;
					color: #333333;

					.value {
						width: 45%;
					}

					.time {
						font-size: 28rpx;
						color: #999999;
					}
				}

				.inter {
					margin-top: 30rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #999999;
				}
			}

			.check {
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				margin-top: 20rpx;

				image {
					width: 30rpx;
					height: 30rpx;
				}
			}
		}
	}
}
</style>
