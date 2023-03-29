<template>
	<view class="login">
		<view class="bg"></view>
		<view class="content">
			<view class="loginTitle">快速登录</view>
			<!-- 收货地址信息 -->
			<!-- <view class="ipt">
				<view class="addressInfo">
					<view class="item flex">
						<input placeholder-style="color: #999" type="text" placeholder="请输入您的手机号码">
					</view>
					<view class="item flex">
						<input :maxlength="11" placeholder-style="color: #999" type="number" placeholder="请输入验证码">
					</view>
					<view class="item flex">
						<input placeholder-style="color: #999" type="password" placeholder="小区楼栋/乡村名称">
					</view>
				</view>
			</view> -->
			<van-cell-group inset>
				<!-- 输入手机号，调起手机号键盘 -->
				<van-field v-model="tel" type="tel" placeholder="请输入您的手机号码" />
				<!-- 输入密码 -->


				<van-field v-model="password" :type="passwordType" placeholder="请输入密码"
					:rules="[{ required: true, message: '请填写密码' }]">
					<template #right-icon>
						<span class="solts" @click="switchPasswordType">
							<van-icon name="eye" v-if="passwordType === 'password'" />
							<van-icon name="closed-eye" v-else />
						</span>
					</template>
				</van-field>

				<van-cell-group>
					<van-field v-model="sms" center clearable placeholder="请输入短信验证码">
						<template #button>
							<view class="codeText">
								点击获取
							</view>
						</template>
					</van-field>
				</van-cell-group>
			</van-cell-group>
			<view class="row mt-3 flex justify-between">
				<view class="">
					忘记密码
				</view>
				<view class="">
					注册
				</view>
			</view>
			<but text="登录"></but>
		</view>

	</view>
</template>

<script setup>
// 密码
let password = ref('')
let sms = ref('')
let tel = ref('')

let passwordType = ref('password')
// 密码框可见内容切换
let switchPasswordType = () => {
	passwordType.value = passwordType.value === 'password' ? 'text' : 'password'
}
</script>

<style lang="scss">
page {
	padding: 0;
	background: #ffffffff;
	min-height: 100%;
}

.login {
	.bg {
		background-image: url("../../static/img/login/Vector.png");
		background-size: cover;
		width: 18.25rem;
		height: 9.31rem;
		position: fixed;
		right: 0;
		top: 0;
		text-align: center;
	}

	.content {
		border-radius: 0.88rem;
		opacity: 1;
		padding: 0 0.75rem;

		.loginTitle {
			color: #333333ff;
			font-size: 1.25rem;
			font-weight: 400;
			font-family: "Source Han Sans CN";
			padding-top: 8.63rem;
			padding-bottom: 2.13rem;
		}

		.codeText {
			color: #7d71f5ff;
			font-size: 0.75rem;
			font-weight: 400;
			font-family: "Source Han Sans CN";
		}

		.addressInfo {

			.item {
				font-size: 28rpx;
				font-weight: 500;
				color: #282828;
				padding-bottom: 20rpx;
				margin-bottom: 30rpx;
				border-bottom: 0.06rem solid #99999933;
				position: relative;
				display: flex;




				input {
					width: 68%;
					height: 26rpx;
					font-size: 28rpx;
					font-weight: 500;
					color: #282828;
				}

				.arrow {
					width: 25rpx;
					height: 25rpx;
					right: 10rpx;
					top: 20%;
				}


			}
		}

		.row {
			color: #7d71f5ff;
			font-size: 0.75rem;
			font-weight: 400;
			font-family: "Source Han Sans CN";
		}
	}


}
</style>
