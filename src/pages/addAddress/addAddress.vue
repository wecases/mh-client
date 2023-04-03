<template>
	<view class="add">
		<navbar text="添加收货地址"></navbar>
		<van-address-edit area-placeholder="请选择省、市、区" :area-list="areaList" show-set-default
			:area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete"
			@change-detail="onChangeDetail" name="收货人" />
	</view>
</template>

<script setup>
import { areaList } from '@vant/area-data';
let address = ref('')
const onSave = (AddressEditInfo) => {
	address = { ...AddressEditInfo }
	console.log(address);
};

const onDelete = () => showToast('delete');
</script>

<style lang="scss">
:deep .van-button {
	background-color: #7D71F5;
	border: none;
}

:deep .van-switch--on {
	background-color: #7D71F5;

}

:deep .van-picker__confirm {
	color: #7D71F5;
}
</style>
