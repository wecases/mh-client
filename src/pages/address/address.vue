<template>
	<view class="address">
		<navbar text="我的地址"></navbar>
		<view class="content">
			<view class="addressBox" v-for="item, index in orderList" :key="index">
				<view class="top">
					<view class="left">
						<view class="user">
							<view class="name">{{ item.name }}</view>
							<view class="phone">{{ item.phone }}</view>
						</view>
						<view class="addres">{{ item.address }}</view>
					</view>
					<view class="right">
						<view class="i-icon-bianji"></view>
					</view>
				</view>
				<view class="default"></view>
				<view class="fun flex f-y-c f-x-b">
					<view>
						<van-checkbox v-model="item.is_def" :checked-color="'#7D71F5'" :icon-size="'1rem'"
							@click="!selected">
							默认地址
						</van-checkbox>
					</view>
					<view class="delete">删除</view>
				</view>
			</view>
		</view>
		<but text="新增地址" @submit="Jump('/pages/addAddress/addAddress')"></but>
	</view>
</template>

<script setup>
let selected = ref(false)
let orderList = reactive([
	{
		name: "猪猪侠",
		phone: "138748349334",
		address: "河南省郑州市郑东新区翠林路12号",
		is_def: true
	},
	{
		name: "猪猪侠",
		phone: "138748349334",
		address: "河南省郑州市郑东新区翠林路12号",
		is_def: false
	}
])
</script>

<style lang="scss" scoped>
page {
	padding: 0;
	background-color: #f1f1f1;
}

.address {

	.content {
		padding: 0 1rem;

		.addressBox {
			margin-top: 0.4rem;
			padding: 0.75rem;
			border-radius: 0.63rem;
			opacity: 1;
			background: #ffffffff;

			.top {
				display: flex;
				justify-content: space-between;
				padding-bottom: 0.75rem;
				border-bottom: 0.05rem #eee solid;

				.left {
					.user {
						display: flex;
						align-items: center;

						.name {
							color: #333;
							font-size: 0.9rem;
							font-weight: 400;
							padding-right: 0.75rem;
						}

						.phone {
							color: #333333ff;
							font-size: 0.8rem;
							font-weight: 400;
						}

					}

					.addres {
						padding-top: 0.3rem;
						color: #666666ff;
						font-size: 0.63rem;
						font-weight: 400;
					}
				}

				.right {
					display: flex;
					align-items: center;

					svg {
						width: 1rem;
					}
				}
			}

			.fun {
				padding-top: 0.45rem;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.defaultAddress {
					font-size: 24rpx;
					font-weight: 500;
					color: #333333;
					display: flex;
					align-items: center;

					image {
						width: 30rpx;
						height: 30rpx;
						margin-right: 14rpx;
					}
				}

				.delete {
					font-size: 24rpx;
					font-weight: 500;
					color: #666666;
				}
			}
		}
	}

	.bottom {
		position: fixed;
		bottom: 0;
		height: 4.5rem;
		width: 100%;
		background: #ffffffff;
		padding: 0 1rem;

	}

	.add {
		border-radius: 1.88rem;
		opacity: 1;
		background: #7d71f5ff;
		padding: 0.6rem 7rem;
		text-align: center;
		color: #ffffffff;
		font-size: 1.06rem;
		font-weight: 400;
		position: fixed;
		bottom: 1rem;
	}
}
</style>
