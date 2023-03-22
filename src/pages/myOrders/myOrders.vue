<template>
	<view class="retirementBookService">
		<!-- <u-navbar title="我的订单" @rightClick="rightClick" :autoBack="true"></u-navbar> -->

		<Navbar :text="我的订单"></Navbar>
		<view class="BookService">
			<van-tabs v-model:active="active">
				<van-tab v-for="item, index in shopNav" :key="index" :title="item.name"></van-tab>
			</van-tabs>
			<view class="orderList">
				<view class="orderItem" v-for="item, index in 5" :key="index">
					<view class="top">
						<view class="time">2023-03-07</view>
						<view class="status">代发货</view>
					</view>
					<view class="info flex">
						<view class="left">
							<image src="@/static/logo.png" mode=""></image>
						</view>
						<view class="right">
							<view class="name">笔记本电脑</view>
							<view class="text">gaogdsfsdd</view>
							<view class="value flex f-x-b">
								<view class="price">价值￥4000.00</view>
								<view class="num">×1</view>
							</view>
						</view>

					</view>
					<view class="flex" style="justify-content: right;">
						<view class="bottom flex">
							<view class="but1">订单详情</view>
							<view class="but2">提醒发货</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>


// 商品导航栏
let shopNav = ref([{
	name: "全部"
},
{
	name: "待付款"
},
{
	name: "待发货"
},

{
	name: "待收货"
},
{
	name: "已完成"
}
]);
// 商品导航栏
let list = ref({
	pay_status_name: "待确认运费并支付定金",
});
// 当前导航栏
const active = ref(0);
// 切换导航栏
watch(active, (active, prevCount) => {
	/* ... */
	console.log(active)
})
</script>

<style lang="scss" scoped>
page {
	padding: 0;
	margin: 0;
	background: #F5F5F5;
}

.retirementBookService {

	.orderList {
		margin: 0.75rem 1rem 0 1rem;

		.orderItem {
			border-radius: 0.63rem;
			background: #ffffffff;
			padding: 0.75rem;
			margin-top: 0.75rem;

			.info {
				display: flex;
			}

			.top {
				padding-bottom: 0.44rem;
				display: flex;
				justify-content: space-between;

				.time {
					color: #666666ff;
					font-size: 0.75rem;
					font-weight: 400;
				}

				.status {
					color: #7d71f5ff;
					font-size: 0.75rem;
					font-weight: 400;
				}
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

				.text {
					color: #666666ff;
					font-size: 0.63rem;
					font-weight: 400;
				}

				.value {
					.price {
						color: #f09244ff;
						font-weight: 400;
						font-size: 0.75rem;
						padding-top: 0.2rem;
					}

					.num {
						color: #666666ff;
						font-size: 0.69rem;
						font-weight: 400;
						padding-top: 0.25rem;
					}
				}
			}
		}

		.bottom {
			display: flex;

			.but1 {
				padding: 0.2rem 0.88rem;
				color: #999999ff;
				font-size: 0.81rem;
				font-weight: 400;
				border-radius: 1rem;
				opacity: 1;
				border: 0.06rem solid #ccccccff;
				margin-right: 0.75rem;
			}

			.but2 {
				padding: 0.2rem 0.88rem;
				color: #ffffffff;
				font-size: 0.81rem;
				font-weight: 400;
				border-radius: 1.19rem;
				opacity: 1;
				background: #7d71f5ff;
			}
		}
	}

}
</style>
