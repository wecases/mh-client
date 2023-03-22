<template>
	<view class="feedback">
		<navbar text="意见反馈"></navbar>
		<view class="content">
			<view class="title">反馈类型</view>
			<view class="suggest">
				<view class="s" v-for="(item, index) in suggest" :key="index" :class="{ act: item.sid == actS }"
					@click="actS = item.sid">{{ item.text }}</view>
			</view>
			<view class="title">
				意见反馈
			</view>
			<view class="ttt">
				<textarea class="textarea" placeholder="请详细描述问题或建议" v-model="txt"></textarea>
			</view>
			<but :text="提交"></but>
		</view>
	</view>
</template>

<script setup>
import { ref } from "vue"
let suggest = ref([
	{
		text: '反馈类型',
		sid: 1
	}, {
		text: '功能异常',
		sid: 2
	}
])
let actS = ref(1)
// 反馈内容
let txt = ref("")
</script>

<style lang="scss">
page {
	background-color: #f1f1f1;
}

.feedback {

	.content {
		padding: 0 0.75rem;

		.title {
			padding: 0.75rem 0;
			color: #666666ff;
			font-size: 0.9rem;
			font-weight: 400;
		}

		.suggest {
			display: flex;
			padding-bottom: 1.5rem;

			.s {
				color: #666666ff;
				font-size: 0.81rem;
				font-weight: 400;
				border-radius: 1rem;
				opacity: 1;
				border: 0.06rem solid #ccccccff;
				padding: 0.2rem 0.88rem;
				margin-right: 0.75rem;
			}

			.act {
				color: #ffffffff;
				background: #7d71f5ff;
				border: none;
			}
		}

		.ttt {
			padding: 0.75rem;
			background: #ffffffff;

			.textarea {
				min-height: 8.69rem;
				border-radius: 0.63rem;
				opacity: 1;
			}
		}

	}

	.bottom {
		position: fixed;
		bottom: 0;
		height: 4.3rem;
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
