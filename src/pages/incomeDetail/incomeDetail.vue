<template>
	<view class="incomeDetail">
		<navbar text="收益明细" />
		<view class="content">
			<view class="item">
				<view class="left">
					<view class="name">推荐奖励</view>
					<view class="time">2023-03-06 12:00</view>
				</view>
				<view class="right">
					<view class="num">
						+24.90
					</view>
				</view>
			</view>
			<view class="item">
				<view class="left">
					<view class="name">推荐奖励</view>
					<view class="time">2023-03-06 12:00</view>
				</view>
				<view class="right">
					<view class="num">
						+24.90
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
page {
	background-color: #f1f1f1;
}

.incomeDetail {
	.content {
		padding: 0.75rem;

		.item {
			display: flex;
			justify-content: space-between;
			padding-top: 0.5rem;

			.left {
				.name {
					color: #333333ff;
					font-size: 0.9rem;
					font-weight: 400;
				}

				.time {
					color: #666666ff;
					font-size: 0.69rem;
					font-weight: 400;
					padding-top: 0.25rem;
				}
			}

			.right {
				display: flex;
				align-items: center;
				color: #333333ff;
				font-size: 0.9rem;
				font-weight: 400;
			}
		}
	}
}
</style>
