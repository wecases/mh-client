<template>
	<view>
		<navbar text="出售碎片"></navbar>
		<view class="sell">
			<view class="content">
				<textarea class="textarea" placeholder="描述下你的宝贝碎片吧" v-model="txt"></textarea>
			</view>
			<view class="sellInfo">
				<view class="row">
					<view class="left">价格</view>
					<view class="right">
						<text class="price">￥{{ price }}</text>
						<image src="@/static/img/rightArrow.png" mode=""></image>
					</view>
				</view>
				<view class="row">
					<view class="left">数量</view>
					<view class="right">
						<text class="num">{{ num }}</text>
						<image src="@/static/img/rightArrow.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>

		<but :text="发布"></but>
	</view>
</template>

<script setup>
let price = (0)
let num = (0)
</script>

<style lang="scss" scoped>
page {
	background-color: #f1f1f1;
}

.sell {
	padding: 0 1rem;

	.content {
		margin-top: 1rem;
		padding: 0.75rem;
		background: #ffffffff;

		.textarea {
			min-height: 8.69rem;
			border-radius: 0.63rem;
			opacity: 1;

		}
	}

	.sellInfo {
		margin-top: 0.75rem;
		border-radius: 0.63rem;
		opacity: 1;
		background: #ffffffff;
		padding: 0.75rem 0.75rem 0 0.75rem;

		.row {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-bottom: 0.75rem;

			.left {
				color: #333333ff;
				font-size: 0.88rem;
				font-weight: 400;
			}

			.right {
				.price {
					color: #f09244ff;
					font-size: 0.81rem;
					font-weight: 400;
				}

				.num {
					color: #666666ff;
					font-size: 0.81rem;
					font-weight: 400;
				}

				image {
					width: 0.9rem;
					height: 0.9rem;
				}

			}
		}
	}

}
</style>
