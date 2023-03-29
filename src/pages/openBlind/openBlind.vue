<template>
    <view class="openBlind">
        <van-nav-bar :border="false" :fixed="true" :placeholder="true" @click-left="onClickLeft">
            <template #left>
                <van-icon name="arrow-left" size="20" :color="color" />
            </template>
            <template #title>
                <view class="nav_titile_text">笔记本电脑盲盒</view>
            </template>
        </van-nav-bar>
        <!-- 舞台 -->
        <view class="platformBg"></view>
        <view class="blindbox">
            <image src="@/static/img/openBlind/blind.png"></image>
        </view>
        <view class="infoTitle mt-14">盲盒中可以开出商品</view>
        <!-- 商品信息 -->
        <view class="shopBox flex pl-4 pr-1 pb-8">
            <template v-for="shop in shopList">
                <view class="shopBox_item mr-3 mt-4 pb-1">
                    <image src="@/static/img/openBlind/blind.png"></image>
                    <view class="shopBox_item_text">{{ shop.name }}</view>
                    <view class="shopBox_item_price"><text>价值</text>￥{{ shop.price }}</view>
                </view>
            </template>
        </view>
        <view class="openBtn" @click="openBtn">立即开启</view>
        <!-- 盲盒动画弹出层 -->
        <van-popup v-model:show="gifshow" style="background-color: transparent;">
            <view class="gifshow flex justify-center flex-wrap">
                <image src="@/static/img/openBlind/bricks_06_0000.gif"></image>
                <image class="gifshow_di" src="@/static/img/openBlind/platformBg.png"></image>
            </view>
        </van-popup>
    </view>
</template>
<script setup>
let color = ref('#ffffffff')
let onClickLeft = () => {
    uni.navigateBack()
}
// 商品列表
let shopList = ref([
    {
        name: "笔记本电脑",
        price: '4900.00'
    }, {
        name: "笔记本电脑",
        price: '4900.00'
    }, {
        name: "笔记本电脑",
        price: '4900.00'
    }, {
        name: "笔记本电脑",
        price: '4900.00'
    }
])

//开启盲盒
let gifshow = ref(false)
const openBtn = () => {
    gifshow.value = true
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
.nav_titile_text {
    padding: 0.2rem 1rem;
    border-radius: 4.38rem;
    opacity: 1;
    background: #ffffffff;
    color: #7d71f5ff;
    font-size: 0.81rem;
    font-weight: 400;
}

.openBlind {
    width: 100vw;
    min-height: 100vh;
    background-image: url('@/static/img/openBlind/blindBg.png');
    background-size: cover;
    background-repeat: no-repeat;

    .platformBg {
        background-image: url('@/static/img/openBlind/platformBg.png');
        height: 14.25rem;
        width: 19.25rem;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 auto;
        margin-top: 11.56rem;
    }

    .blindbox {
        position: absolute;
        top: 7.56rem;
        left: 50%;
        transform: translate(-50%, 0);

        >image {
            -webkit-animation: fadenum 3s linear infinite;

            width: 14.63rem;
            height: 14.63rem;
        }

    }

    @keyframes fadenum {
        0% {
            transform: translateY(0rem);
        }

        40% {
            transform: translateY(2rem);
        }

        100% {
            transform: translateY(0rem);
        }
    }

    .infoTitle {
        color: #ffffffff;
        font-size: 0.94rem;
        font-weight: 500;
        font-family: "Source Han Sans CN";
        text-align: center;


    }

    .shopBox {
        flex-wrap: nowrap;
        overflow-x: scroll;


        .inner-container::-webkit-scrollbar {
            display: none;
        }

        .shopBox_item {
            border-radius: 0.63rem;
            opacity: 1;
            background: #ffffffff;

            width: 7.5rem;

            image {
                width: 7.5rem;

                height: 6.31rem;
            }

            .shopBox_item_text {
                color: #333333ff;
                font-size: 0.75rem;
                font-weight: 400;
                padding: 0 0.75rem;

                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .shopBox_item_price {
                padding: 0 0.75rem;
                color: #f09244ff;
                font-weight: 500;
                text-align: left;
                font-size: 0.88rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;

                text {
                    color: #666666ff;
                    font-weight: 400;
                    text-align: left;
                    font-size: 0.63rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }

    .openBtn {
        margin: 0 auto;
        background-image: url('@/static/img/openBlind/siginBtn.png');
        width: 10.5rem;
        height: 3.75rem;
        text-align: center;
        line-height: 3.75rem;
        color: #ffffffff;
        font-size: 1.38rem;
        font-weight: 500;
        font-family: "Source Han Sans CN";
    }

    .gifshow {


        .gifshow_di {
            position: relative;
            bottom: 6rem;
        }
    }
}
</style>
