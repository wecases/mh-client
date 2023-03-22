<template>
	<view class="set">
		<navbar :text="出售碎片" />
		<view class="content">
			<view class="user">
				<view class="row">
					<view class="left">头像</view>
					<view class="right">
						<image src="@/static/logo.png" mode=""></image>
						<svg xmlns="http://www.w3.org/2000/svg" class="do97pvxlj__icon do97pvxlj__design-iconfont"
							viewBox="0 0 1024 1024">
							<path
								d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z">
							</path>
						</svg>
					</view>
				</view>
				<view class="row">
					<view class="left">手机号码</view>
					<view class="right flex">
						<view class="">
							188345325900
						</view>
						<svg xmlns="http://www.w3.org/2000/svg" class="do97pvxlj__icon do97pvxlj__design-iconfont"
							viewBox="0 0 1024 1024">
							<path
								d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z">
							</path>
						</svg>
					</view>
				</view>
			</view>

			<view class="user">
				<view class="row" v-for="(item, index) in row" :key="index">
					<view class="left">{{ item.text }}</view>
					<view class="right">
						<view v-if="item.right">
							{{ item.right }}
						</view>
						<svg xmlns="http://www.w3.org/2000/svg" class="do97pvxlj__icon do97pvxlj__design-iconfont"
							viewBox="0 0 1024 1024">
							<path
								d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z">
							</path>
						</svg>
					</view>
				</view>
			</view>
			<view class="logOut">退出登录</view>
		</view>

	</view>
</template>

<script setup>
import {
	ref,
	reactive,
} from "vue";
const row = reactive([{
	text: "消息提示",
	right: ""
}, {
	text: "清除缓存",
	right: "12.35MB"
}, {
	text: "关于我们",
	right: ""
}, {
	text: "版本号",
	right: "1.1.0"
}
])
</script>

<style lang="scss">
.content {
	padding-top: 44px;

	.user {
		margin-top: 1rem;
		border-radius: 0.63rem;
		opacity: 1;
		background: #ffffffff;
		padding: 0.75rem;
		padding-bottom: 0rem;

		.row {
			padding-bottom: 1rem;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.left {
				color: #333333ff;
				font-size: 0.88rem;
				font-weight: 400;
			}

			.right {
				color: #666666ff;
				font-size: 0.81rem;
				font-weight: 400;
				display: flex;
				align-items: center;

				svg {
					margin-left: 0.5rem;
					width: 0.8rem;
					height: 0.82rem;
				}
			}
		}

		image {
			width: 1.88rem;
			height: 1.88rem;
			border-radius: 0.94rem;
		}
	}

	.logOut {
		margin-top: 0.75rem;
		padding: 0.6rem;
		text-align: center;
		border-radius: 1.88rem;
		opacity: 1;
		background: #ffffffff;
		color: #333333ff;
		font-size: 1.06rem;
		font-weight: 400;
		font-family: "Source Han Sans CN";
	}
}
</style>
