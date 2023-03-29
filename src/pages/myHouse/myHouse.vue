<script setup lang="ts">
const { getClassBoxList } = boxStore()
const { classBoxList } = $(storeToRefs(boxStore()));

onShow(async () => {
	await getClassBoxList()
})

const selected = $ref(false)

const tabbarActIndex = $ref(0)
// 碎片列表
let debris = $ref([
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

function select(card: CardInfo) {

}
watch($$(selected), () => {
	classBoxList.forEach((item) => {
		item.selected = selected
	})
})
</script>

<template>
	<view class="myHouse">
		<view class="mb-6">
			<van-tabs v-model:active="tabbarActIndex" :color="'#7d71f5'" :line-width="15" :sticky="true" swipeable>
				<van-tab title="我合成的">
					<view class="p-4">
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
						<card-list :list="classBoxList" type="select" showSelected @change="select"></card-list>
					</view>
				</van-tab>
				<van-tab title="我的碎片">
					<view class="debris">
						<template v-for="item, index in 6 ">
							<view class="debrisCard">
								<view class="top">
									<view class="left">
										<image src="@/static/logo.png"></image>
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
											<image src="@/static/logo.png"></image>
											<view class="text">{{ item.name }}</view>
										</van-grid-item>
									</van-grid>
								</view>
							</view>
						</template>
					</view>
				</van-tab>
			</van-tabs>
		</view>
		<template v-if="tabbarActIndex == 0">
			<view class="fixed w-full bottom-11 bg-white">
				<view class="flex-between px-4 py-2">
					<view>
						<van-checkbox v-model="selected" :checked-color="'#7D71F5'" :icon-size="'1rem'" @click="!selected">
							已选(1)
						</van-checkbox>
					</view>
					<view>

					</view>
				</view>
			</view>
		</template>
	</view>
</template>

<style lang="scss" scoped>
page {
	padding: 0;
	background-color: #f1f1f1;
	--uno: pb-4;
}

.myHouse {
	.compound {
		padding: 0 1rem;
		flex-wrap: wrap;
		flex-shrink: 0;
		justify-content: space-between;
		display: flex;
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
