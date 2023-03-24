<template>
	<view class="debris">
		<navbar text="碎片交易"></navbar>
		<view class="exchange">
			<card-list :type="1" />
		</view>
		<view class="sell" @click="$u.route('/pages/sell/sell')">
			<view class="but">
				<view class="img">
					<!-- <image src="@/static/img/center/sell.svg" mode=""></image> -->
				</view>
				<view class="">
					出售碎片
				</view>
			</view>

		</view>
	</view>
</template>

<script setup>
function rightClick() {
	console.log(1111)
}
</script>

<style lang="scss" scoped>
.debris {

	.exchange {
		padding-top: 0.75rem;
	}

	.sell {

		position: fixed;
		bottom: 2.8rem;
		right: 0;
		width: 3.75rem;
		height: 3.75rem;
		border-radius: 2rem;
		opacity: 1;
		background: #7d71f5ff;
		box-shadow: 0 0 0.25rem 0.13rem #584adf4d;
		color: #ffffffff;
		font-size: 0.69rem;
		font-weight: 400;

		.but {
			padding: 0.2rem;
			display: flex;
			flex-direction: column;
			align-items: center;

			image {
				width: 1.5rem;
				height: 1.5rem;
			}
		}

	}
}
</style>
