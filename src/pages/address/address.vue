<template>
	<view class="address">
		<!-- <u-navbar
		    title="我的地址"
		    @rightClick="rightClick"
		    :autoBack="true"
		>
		</u-navbar> -->
		<navbar :text="我的地址"></navbar>
		<view class="content">
			<view class="addressBox" v-for="item, index in 4" :key="index">
				<view class="top">
					<view class="left">
						<view class="user">
							<view class="name">猪猪侠</view>
							<view class="phone">18823434438</view>
						</view>
						<view class="addres">河南省郑州市郑东新区翠林路12号</view>
					</view>
					<view class="right">
						<svg xmlns="http://www.w3.org/2000/svg" class="na86hx6j1__icon na86hx6j1__design-iconfont"
							viewBox="0 0 1024 1024">
							<path
								d="M864 501.024a32 32 0 1 1 64 0V768a160 160 0 0 1-160 160H256a160 160 0 0 1-160-160V256a160 160 0 0 1 160-160h304.576a32 32 0 1 1 0 64H256a96 96 0 0 0-96 96v512a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-266.976z m-13.824-353.056a32 32 0 0 1 46.784 43.648L547.84 566.08a32 32 0 1 1-46.816-43.648L850.176 147.968z">
							</path>
						</svg>
					</view>
				</view>
				<view class="default"></view>
				<view class="fun flex f-y-c f-x-b">
					<!-- 默认地址 -->
					<view class="defaultAddress flex f-y-c">
						<!-- 		<image
												:src="default == 1 ? '@/static/address/yuanAct.png' : '@/static/address/yuan.png'"
												mode=""></image> -->
						<image src="@/static/img/address/yuan.png" mode=""></image>
						默认地址
					</view>
					<!-- 删除 -->
					<view class="delete">删除</view>
				</view>
			</view>
		</view>
		<but :text="新增地址"></but>
	</view>
</template>

<script setup>

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
