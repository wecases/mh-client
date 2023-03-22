<template>
	<view class="cateGory">
		<view class="top">
			<view class="header">
				<!-- 搜索 -->
				<view class="search">
					<image src="@/static/img/index/search.png"></image>
					<input type="text" placeholder="手机系列盲盒" placeholder-style="color:#B5B8BA;">
				</view>
			</view>
			<!-- 			<view class="flex" style="width: 120%; flex: 1;">
				<u-tabs active-color="#2979ff" lineColor="#7D71F5" :list="shopNav" :is-scroll="false" :current="current" @change="change"></u-tabs>
			</view> -->
			<!-- 导航栏 -->
			<view class="tab">
				<view v-for="(tab, index) in shopNav" :key="index" class="left" @click="tabbarActIndex = index">
					<view class="item">
						<view :class="{ actNav: index == tabbarActIndex }">{{ tab.name }}</view>
						<view v-if="tabbarActIndex == index" class="tabBorder"></view>
					</view>

				</view>
			</view>
		</view>
		<!-- 商品列表 -->
		<blind-list />
	</view>
</template>

<script setup>
const tabbarActIndex = ref(0)
let shopNav = ref([{
	name: "数码",
	numberKey: 1,
	status: null

},
{
	name: "家用电器",
	numberKey: 2,
	status: null
},
{
	name: "美妆",
	numberKey: 3,
	status: null

},
{
	name: "潮流周边",
	numberKey: 4,
	status: null
}, {
	name: "家居好物",
	numberKey: 5,
	status: null
}

],);
</script>

<style lang="scss">
::-webkit-scrollbar {
	display: none
}

page {
	padding: 0;
	background-color: #f1f1f1;
}

.top {
	padding: 0.5rem 0;
	background: #ffffffff;

	.header {
		margin-bottom: 35rpx;
		display: flex;
		justify-content: space-between;

		.search {
			background: #F5F5F5;
			border-radius: 35rpx;
			padding: 15rpx 24rpx;
			flex: 1;
			display: flex;

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

	.tab {

		overflow-x: scroll;
		width: 100%;
		display: flex;
		overflow-x: scroll;
		flex-wrap: nowrap;

		.actNav {
			color: #7d71f5ff;
		}

		.item {
			width: 100%;
			font-size: 32rpx;
			color: #333333;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			flex-wrap: nowrap;
			padding: 0 1rem;

		}

		.tabBorder {
			width: 0.88rem;
			height: 0.19rem;
			border-radius: 0.31rem;
			background-color: #7d71f5ff;
			margin: 0 auto;
			margin-top: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

}
</style>
