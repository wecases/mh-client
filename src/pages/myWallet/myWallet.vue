<template>
	<view class="myWallet">
		<navbar-plus text="我的钱包"></navbar-plus>
		<view class="topBg">
			<view class="info">
				<view class="total">账户余额</view>
				<view class="totalNum">
					￥1000.00
				</view>
				<view class="pay">
					<text>提现</text>

				</view>
				<view class="canPay">
					可提现余额￥120.00
				</view>
				<view class="bottom">
					<template v-for="(item, index) in nav" :key="index">
						<view class="aa" @click="$u.route(item.jump)">{{ item.text }}</view>
						<text v-if="index !== 3">|</text>
					</template>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="top">余额充值</view>
			<view class="recharge ">
				<template v-for="(item, index) in payMoney" :key="index">
					<view @click="actMoney = index + 1"
						:class="{ payBut: actMoney != index + 1, act: actMoney == index + 1 }">{{ item }}
					</view>
				</template>
			</view>
			<view class="custom">
				<text>￥</text>
				<input type="number" placeholder="输入自定义金额">
			</view>
		</view>
		<view class="box">
			<view class="submit">充值</view>
		</view>
	</view>
</template>

<script setup>
let nav = ref([
	{
		text: "充值记录",
	},
	{
		text: "提现明细"
	}, {
		text: "消费明细"
	}, {
		text: "收益明细",
		jump: "pages/incomeDetail/incomeDetail"
	}
])
// 充值金额
let payMoney = ref([100, 200, 300, 400, 600, 800])
let actMoney = ref(1)

// 返回
function onClickLeft() {
	uni.navigateBack()
}
</script>

<style>
/deep/.van-nav-bar__content {
	background-color: transparent !important;
	border: none;
}

/deep/.van-nav-bar {
	background-color: transparent !important;
	border: none;

}
</style>
<style lang="scss" scoped>
page {
	padding: 0;
	margin: 0;
	height: 100vh;
	background-color: #ffffffff;
}

.nav {
	position: absolute;

	.nav_titile {
		color: #ffffffff;
		font-size: 1.06rem;
		font-weight: 500;
	}
}

.myWallet {

	.topBg {
		background-image: url("../../src/static/img/wallet/myWallet.png");
		width: 100%;
		height: 15.13rem;
		background-size: cover;
	}

	.info {
		padding: 0 0 0 1rem;
		padding-top: 3rem;

		.total {
			color: #ffffffff;
			font-size: 0.69rem;
			font-weight: 400;
		}

		.totalNum {
			color: #ffffffff;
			font-weight: 400;
			font-size: 1rem;
			padding-top: 0.31rem;
		}

		.pay {
			text-align: right;

			text {
				background: #ffffffff;
				border-radius: 1rem 0 0 1rem;
				opacity: 1;
				padding: 0.4rem 0.7rem 0.4rem 1.2rem;
				color: #7d71f5ff;
				font-size: 0.81rem;
				font-weight: 400;
			}
		}

		.canPay {
			padding-top: 0.88rem;
			color: #ffffffff;
			font-weight: 400;
			text-align: left;
			font-size: 0.75rem;

		}

		.bottom {
			padding-top: 2.5rem;
			padding-right: 1rem;
			color: #ffffffff;
			font-size: 0.75rem;
			font-weight: 400;
			display: flex;
			justify-content: space-between;
		}
	}

	.content {
		padding: 1.5rem 1rem 0 1rem;

		.top {
			color: #333333ff;
			font-size: 0.88rem;
			font-weight: 500;
			padding-bottom: 0.75rem;
		}

		.recharge {
			flex-wrap: wrap;
			display: flex;
			justify-content: space-between;

			.payBut {
				border-radius: 0.38rem;
				opacity: 1;
				background: #f1f1f1ff;
				color: #f09244ff;
				font-weight: 400;
				font-size: 0.9rem;
				padding: 0.3rem 2rem;
				margin-bottom: 0.8rem;
			}

			.act {
				border-radius: 0.38rem;
				opacity: 1;
				background: #F09244;
				color: #ffffffff;
				font-weight: 400;
				font-size: 0.9rem;
				padding: 0.3rem 2rem;
				margin-bottom: 0.8rem;
			}
		}

		.custom {
			display: flex;
			align-items: center;
			margin-top: 1rem;
			color: #f09244ff;
			font-size: 1.25rem;
			font-weight: 500;
			padding: 0.5rem 0.75rem;
			border-radius: 0.63rem;
			opacity: 1;
			background: #f1f1f1ff;

			text {
				padding-right: 0.8rem;
			}
		}
	}

	.submit {
		bottom: 2rem;
		margin: 0 1rem;
		text-align: center;
		color: #ffffffff;
		font-size: 1.06rem;
		font-weight: 400;
		border-radius: 1.88rem;
		opacity: 1;
		background: #7d71f5ff;
		padding: 0.6rem 0;

		margin-top: 8rem;
	}
}
</style>
