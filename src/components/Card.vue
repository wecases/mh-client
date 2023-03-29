<script lang="ts" setup>
let props = withDefaults(defineProps<{
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
     * 是否显示选中
     * @default false
     * @type boolean
     */
    showSelected?: boolean

    /**
     * 索引
     * @default 0
     * @type number
     */
    index?: number

    /**
     * 数据
     * @default []
     * @type BoxInfo[]
     */
    info: CardInfo
}>(), {
    type: 'sell',
})

let { type, info, showSelected, index } = props

const emits = defineEmits(['change'])

function selected() {
    // 如果是选择
    if (showSelected) {
        info.selected = !info.selected
    }

    // 返回点击事件并携带点击的数据
    emits('change', info, index)
}
</script>

<template>
    <view class="bg-white rounded-xl" @click="selected()">
        <view class="flex-center rounded-t-xl overflow-hidden w-full">
            <van-image :src="info.image" width="100%" height="8rem" fit="cover" lazy-load />
        </view>
        <view class="p-2">
            <view class="text-xs  pb-1">{{ info.title }}</view>
            <view class="flex-between  pb-1">
                <view class="price text-sm">
                    <text class="text-xs">￥</text>
                    <text>{{ ToFixed(<number>info.price) }}</text>
                </view>
                <template v-if="type == 'select' && showSelected">
                    <van-checkbox v-model="info.selected" :checked-color="'#7D71F5'" :icon-size="'1rem'"
                        @click="selected()" />
                </template>
                <template v-if="type == 'base'">
                    <view class="sale text-xs line-through">
                        <text>￥</text>
                        <text>{{ info.sale }}</text>
                    </view>
                </template>
                <template v-if="type == 'sell'">
                    <view class="flex-center">
                        <view class="i-icon-liulan  text-xs pl-1" />
                        <text class="text-xs">{{ info.views }}</text>
                    </view>
                </template>
            </view>
            <template v-if="type == 'sell'">
                <view class="flex-start pb-1">
                    <van-image :src="info.user?.avatar" width="1rem" height="1rem" fit="cover" round lazy-load />
                    <text class="caret-gray-400 text-xs pl-1">{{ info.user?.phone }}</text>
                </view>
            </template>
        </view>
    </view>
</template>
