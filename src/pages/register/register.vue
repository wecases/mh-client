<template>
    <view class="login">
        <view class="bg"></view>
        <view class="content">
            <view class="loginTitle px4">注册</view>
            <!-- 注册 -->
            <view px-4>
                <van-form>
                    <van-cell-group inset>
                        <!-- 输入手机号，调起手机号键盘 -->
                        <van-field v-model="registerInfo.phone" :rules="[{ validator: phoneTest, message: '请输入正确手机号' }]"
                            type="tel" placeholder="请输入您的手机号码" />
                        <!-- 输入密码 -->
                        <van-field v-model="registerInfo.password" :rules="[{ validator: passTest, message: '密码不少于六位' }]"
                            :type="passwordType" placeholder="请输入密码">
                            <template #right-icon>
                                <span class="solts"
                                    @click="passwordType == 'password' ? passwordType = 'text' : passwordType = 'password'">
                                    <van-icon name="eye" v-if="passwordType == 'password'" />
                                    <van-icon name="closed-eye" v-else />
                                </span>
                            </template>
                        </van-field>
                        <!-- 确认密码 -->
                        <van-field v-model="confirmPassword" :rules="[{ validator: confirm, message: '两次密码输入不一致' }]"
                            :type="passwordType1" placeholder="请输入密码">
                            <template #right-icon>
                                <span class="solts"
                                    @click="passwordType1 == 'password' ? passwordType1 = 'text' : passwordType1 = 'password'">
                                    <van-icon name="eye" v-if="passwordType1 === 'password'" />
                                    <van-icon name="closed-eye" v-else />
                                </span>
                            </template>
                        </van-field>
                        <van-field v-model="InvitationCode" type="tel" :disabled="InvitationType"
                            placeholder="请输入邀请码(可选填)" />
                    </van-cell-group>
                </van-form>
            </view>
            <view class="row mt-3 mx-4 flex justify-end">
                <view class="" @click="Jump('/pages/login/login')">
                    去登录
                </view>
            </view>
            <but text="注册" @submit="submit"></but>
        </view>

    </view>
</template>

<script setup lang="ts">
onLoad((pamrs: any) => {
    if (pamrs.code) {
        InvitationCode = pamrs.code
        // 有邀请注册 邀请码框禁用状态打开
        InvitationType = true
    }
})
//邀请码
let InvitationCode = ref('')
// 邀请码输入款禁用状态
let InvitationType: any = ref(false)
// 注册信息
let registerInfo = reactive({
    phone: '',
    password: '',
    // invite_code: ''
})
// 确认密码
let confirmPassword = ref('')
// 手机号正则
const phoneTest = (val: any) => /1\d{10}/.test(val);
// 密码验证
const passTest = (val: any) => val.length >= 6;
// 确认密码验证
const confirm = (val: any) => val == registerInfo.password;
//密码可以看见吗
let passwordType: any = ref('password')
let passwordType1: any = ref('password')
// 去注册
const { goRegister } = userStore()

const submit = async () => {
    // 判断注册信息是否有误
    if (phoneTest(registerInfo.phone) && passTest(registerInfo.password) && confirm(confirmPassword.value)) {
        try {
            let pamrs = {
                ...registerInfo,
                confirm_password: confirmPassword.value
            }
            await goRegister(pamrs)
        } catch {
            Toast('注册失败')
        }
    } else {
        Toast('请确认注册信息')
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
        border-radius: 0.88rem;
        opacity: 1;
        // padding: 0 0.75rem;

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
