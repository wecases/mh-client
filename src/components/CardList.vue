<template>
	<view class="cardList">
		<template v-if="props.list">
			<van-row :gutter="props.gutter">
				<template v-for="item, index in props.list">
					<van-col :span="props.span">
						<card class="card" :info="item" :index="index" :type="props.type" :showSelected="showSelected"
							@change="change" />
					</van-col>
				</template>
			</van-row>
		</template>
		<template v-else>
			<no-data alertText="没有更多"></no-data>
		</template>
	</view>
</template>

<script setup lang="ts">
type Props = {
	/**
	 * 子间距
	 * @default 20
	 * @type number
	 */
	gutter?: number

	/**
	 * 列数
	 * @default 12
	 * @type number
	 */
	span?: number

	/**
	 * 是否显示选中
	 * @default false
	 * @type boolean
	 */
	showSelected?: boolean

	/**
	 * 卡片类型
	 * base: 基础卡片
	 * select: 选择卡片
	 * sell: 销售卡片
	 * @default 'base'
	 * @type CardType
	 */
	type?: CardType

	/**
	 * 数据
	 * @default []
	 * @type CardInfo[]
	 */
	list: CardInfo[]
}

const props = withDefaults(defineProps<Props>(), {
	type: "base",
	gutter: 20,
	span: 12
})

const emits = defineEmits<{
	(e: 'change', card: CardInfo, index: number, type: Props["type"]): void
}>()

function change(card: CardInfo, index: number) {
	// 返回点击事件并携带点击的数据
	emits('change', card, index, props.type)
}

</script>

<style lang="scss" scoped>
.cardList {
	.card {
		--uno: mb-4;
	}
}
</style>
