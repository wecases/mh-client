<template>
	<view class="login">
		<view class="bg"></view>
		<view class="content">
			<view class="loginTitle px4">快速登录</view>
			<!-- 登录 -->
			<view px-4>
				<van-form validate-trigger="onChange">
					<van-cell-group inset>
						<!-- 输入手机号，调起手机号键盘 -->
						<van-field v-model="loginInfo.phone" :rules="[{ validator: phoneTest, message: '请输入正确手机号' }]"
							type="tel" placeholder="请输入您的手机号码" />
						<!-- 输入密码 -->
						<van-field v-model="loginInfo.password" :rules="[{ validator: passTest, message: '密码不少于六位' }]"
							:type="passwordType" placeholder="请输入密码">
							<template #right-icon>
								<span class="solts"
									@click="passwordType == 'password' ? passwordType = 'text' : passwordType = 'password'">
									<van-icon name="eye" v-if="passwordType == 'password'" />
									<van-icon name="closed-eye" v-else />
								</span>
							</template>
						</van-field>
					</van-cell-group>
				</van-form>
			</view>
			<!-- 注册 -->
			<view class="row mt-3 mx-4 flex justify-between">
				<view class="">忘记密码</view>
				<view class="" @click="Jump('/pages/register/register')">
					注册
				</view>
			</view>
			<but text="登录" @submit="submit"></but>
		</view>

	</view>
</template>

<script setup lang="ts">

// 登录信息
let loginInfo = reactive({
	phone: '',
	password: '',
})

// 手机号正则
const phoneTest: Function = (val: any) => /1\d{10}/.test(val);
// 密码验证
const passTest: Function = (val: any) => val.length >= 6;
//密码可以看见吗
let passwordType: any = ref('password')
// 去登陆
const { goLogin } = userStore()

const submit = async () => {
	if (phoneTest(loginInfo.phone) && passTest(loginInfo.password)) {
		try {
			let res = await goLogin(loginInfo)
			const data = await res;
			if (data.code === 200) {
				Toast("登录成功", 'none', () => {
					uni.switchTab({ url: '/pages/index/index' })
				})
			} else {
				Toast(res.massage)
			}
		} catch {
			Toast('登录失败')
		}
	} else {
		Toast('请确认登录信息')
	}
}
</script>

<style lang="scss">
page {
	padding: 0;
	background: #ffffffff;
	min-height: 100%;
}

:deep .van-cell {
	padding-left: 0;
	padding-right: 0;
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

		.row {
			color: #7d71f5ff;
			font-size: 0.75rem;
			font-weight: 400;
			font-family: "Source Han Sans CN";
		}
	}


}
</style>
