<template>
	<view class="blindList" v-for="index in  3" :key="index">
		<view v-for="(item, index) in info" :key="index" class="list">
			<view class="item">
				<view class="left">
					<image src="@/static/logo.png" mode=""></image>
				</view>
				<view class="right">
					<view class="title">{{ item.name }}</view>
					<view class="text">{{ item.text }}</view>
					<view class="price flex">
						<view class="new">￥{{ item.price }}</view>
						<view class="old">￥{{ item.zhekou }}</view>
					</view>
					<view class="imgRow">
						<view class="imgBox" v-for="item, index in 8" :key="index">
							<image src="@/static/logo.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
const info = [{
	name: "笔记本电脑",
	text: "高端性能 长玩游戏",
	price: "24.9",
	zhekou: "28.99",

}]
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
	display: none
}

page {
	background-color: red;
}

.blindList {
	.list {
		margin: 0.75rem 1rem;

		.item {
			margin-top: 0.75rem;
			padding: 0.75rem;
			border-radius: 0.63rem;
			opacity: 1;
			background: #ffffffff;
			display: flex;

			.left {
				padding-right: 0.75rem;

				>image {
					width: 6.44rem;
					height: 6.31rem;
					border-radius: 0.63rem;
				}
			}

			.right {
				flex: 1;

				.title {
					color: #333333ff;
					font-size: 0.75rem;
					font-weight: 400;
					padding-bottom: 0.2rem;
				}

				.text {
					color: #666666ff;
					font-size: 0.63rem;
					font-weight: 400;
					padding-bottom: 0.2rem;
				}

				.price {

					.new {
						color: #f09244ff;
						font-weight: 400;
						text-align: left;
						font-size: 0.83rem;
						padding-right: 0.5rem;
					}

					.old {
						color: #ccccccff;
						font-size: 0.63rem;
						font-weight: 400;
						text-decoration: line-through
					}
				}

				.imgRow {
					padding-top: 0.2rem;
					width: 60%;
					display: flex;
					overflow-x: scroll;

					.imgBox {
						width: 2rem;
						height: 2rem;
						border-radius: 0.25rem;
						opacity: 1;
						border: 0.06rem solid #cccccc80;
						margin-right: 0.25rem;
						flex-shrink: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						overflow: -moz-scrollbars-none;

						>image {
							width: 1.31rem;
							height: 1.75rem;
						}
					}
				}

			}
		}
	}
}
</style>
