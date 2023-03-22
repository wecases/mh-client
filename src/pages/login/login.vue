<template>
	<view class="login">
		<view class="bg">
		</view>
		<view class="content">
			<view class="title">快速登录</view>
			<view class="ipt">
				<view class="content">
			<!-- 收货地址信息 -->
			<view class="addressInfo">
				<view class="item flex">
					<view class="title">收货人</view>
					<input placeholder-style="color: #999" type="text" placeholder="请输入注册的手机号">
				</view>
				<view class="item flex">
					<view class="title">手机号码</view>
					<input :maxlength="11" placeholder-style="color: #999" type="number" placeholder="请输入验证码">
				</view>
				<view class="item flex" @click="addressShows">
					<view class="title">选择地区</view>
					<input disabled placeholder-style="color: #999" type="password" v-model="areaAddress" placeholder="请输入密码">
					<image class="arrow absolute" src="@/static/img/rightArrow.png" mode=""></image>
				</view>
				<view class="item flex">
					<view class="title">详细地址</view>
					<input placeholder-style="color: #999" type="text" placeholder="小区楼栋/乡村名称">
				</view>
			</view>
		</view>
				<!-- <inputPlus inputPlaceholder="请输入注册的手机号"></inputPlus>
				<inputPlus inputPlaceholder="请输入验证码" length="10" type="code"></inputPlus>
				<inputPlus length="18" type="password" inputPlaceholder="请输入密码"></inputPlus> -->
			</view>
			<view class="row flex f-x-b">
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
</script>

<style lang="scss">
	page {
		padding: 0;
	}

	.login {

		.bg {
			background-image: url("@/static/img/login/Vector.png");
			background-size: cover;
			width: 18.25rem;
			height: 9.31rem;
			position: absolute;
			right: 0;
			top: 0;
		}

		.content {
			padding: 0 1rem;
			.title {
				padding: 8.63rem 0 2rem;
				color: #333333ff;
				font-size: 1.25rem;
				font-weight: 400;
			}
			.row{
				padding: 0.75rem;
				 color: #7d71f5ff;
				 font-size: 0.75rem;
				 font-weight: 400;
				 margin-bottom: 3.31rem;
			}

		}


	}
</style>
