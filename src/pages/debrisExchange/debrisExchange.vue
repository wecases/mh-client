<template>
	<view class="debris">
		<navbar text="碎片交易"></navbar>
		<view class="exchange">
			<card-list :type="1" />
		</view>
		<view class="sell" @click="$u.route('/pages/sell/sell')">
			<view class="but">
				<view class="i-icon-paimai text-white text-2xl" />
				<view class="px-1">
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
		border-radius: 50%;
		opacity: 1;
		background: #7d71f5ff;
		box-shadow: 0 0 0.25rem 0.13rem #584adf4d;
		color: #ffffffff;
		font-size: 0.69rem;
		font-weight: 400;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.but {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

	}
}
</style>
