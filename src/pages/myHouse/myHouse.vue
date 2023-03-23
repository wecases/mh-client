<template>
	<view class="myHouse">
		<navbar text="我的仓库"></navbar>
		<view class="tab">
			<view v-for="(tab, index) in shopNav" :key="index" class="left" @click="tabbarActIndex = index">
				<view>
					<text :class="{ actNav: index == tabbarActIndex }">{{ tab.name }}</text>
					<view v-if="tabbarActIndex == index" class="tabBorder flex f-x-c"></view>
				</view>
			</view>
		</view>
		<view v-if="tabbarActIndex != 1" class="compound flex">
			<view class="card" v-for="item, index in 6" :key="index">
				<image src="@/static/logo.png" mode=""></image>
				<view class="info">
					<view class="name">
						联想笔记本电脑
					</view>
					<view class="price">
						价值￥4000.00
					</view>
				</view>
			</view>
		</view>
		<view v-else class="debris">
			<view class="debrisCard" v-for="item, index in 6 " :key="index">
				<view class="top">
					<view class="left">
						<image src="@/static/logo.png" mode=""></image>
					</view>
					<view class="right">
						<view class="name">笔记本电脑</view>
						<view class="title">高端游戏性能</view>
						<view class="price">价值￥4000.00</view>
					</view>
				</view>

				<view class="bottom">
					<van-grid col="4">
						<van-grid-item class="grid_item t-c" v-for="(item, index) in debris" :key="index">
							<image src="@/static/logo.png" mode=""></image>
							<view class="text">{{ item.name }}</view>
							<!-- <van-badge v-if="item.value" absolute :offset="[-5, 10]" numberType="limit" :type="type" max="99"
							:value="item.value"></van-badge> -->
						</van-grid-item>
					</van-grid>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

let shopNav = ref([{
	name: "我合成的",
	numberKey: 1,
	status: null

},
{
	name: "我的碎片",
	numberKey: 2,
	status: null
}

],);
const tabbarActIndex = ref(0)
// 碎片列表
let debris = ref([
	{
		name: "碎片1",
		value: 2
	}, {
		name: "碎片1",
		value: 2
	}, {
		name: "碎片1",
		value: 2
	},
])
</script>

<style lang="scss" scoped>
page {
	padding: 0;
	background-color: #f1f1f1;
}

.myHouse {

	.tab {
		color: #333333ff;
		font-size: 0.88rem;
		font-weight: 500;
		padding: 0.75rem 30rpx;
		background: #ffffffff;
		display: flex;
		justify-content: space-around;

		.actNav {
			// color: #7d71f5ff;
		}

		.tabBorder {
			width: 0.88rem;
			height: 0.19rem;
			border-radius: 0.31rem;
			background-color: #7d71f5ff;
			margin: 0 auto;
			margin-top: 0.1rem;
		}
	}

	.compound {
		padding: 0 1rem;
		flex-wrap: wrap;
		flex-shrink: 0;
		justify-content: space-between;
		display: flex;

		.card {
			margin-top: 1rem;
			border-radius: 0.63rem;
			background: #ffffffff;

			image {
				width: 10.31rem;
				height: 7.88rem;
			}

			.info {
				padding: 0.3rem 0 0.44rem 0.75rem;

				.name {
					color: #333333ff;
					font-size: 0.75rem;
					font-weight: 400;
				}

				.price {
					color: #f09244ff;
					font-weight: 400;
					text-align: left;
					font-size: 0.75rem;
				}
			}

		}

	}

	.debris {
		padding: 0 1rem;

		.debrisCard {
			margin-top: 0.75rem;
			border-radius: 0.63rem;
			opacity: 1;
			background: #ffffffff;
			padding: 0.75rem;

			.top {
				display: flex;
			}

			.left {
				padding-right: 0.75rem;

				>image {
					width: 5.38rem;
					height: 5.13rem;
					border-radius: 0.63rem;
				}
			}

			.right {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: center;

				.name {
					color: #333333ff;
					font-size: 0.75rem;
					font-weight: 400;
				}

				.title {
					padding-top: 0.2rem;
					color: #666666ff;
					font-size: 0.63rem;
					font-weight: 400;
				}

				.price {
					padding-top: 0.2rem;
					color: #f09244ff;
					font-weight: 400;
					text-align: left;
					font-size: 0.75rem;
				}
			}

			.bottom {
				padding-top: 0.75rem;

				.grid_item {
					position: relative;

					image {
						width: 3.5rem;
						height: 3.63rem;
						margin-bottom: 15rpx;
					}

					.text {
						color: #666666ff;
						font-size: 0.75rem;
						font-weight: 400;
						padding-bottom: 0.5rem;
					}
				}
			}
		}
	}
}
</style>
