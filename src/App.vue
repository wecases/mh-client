<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import 'vant/lib/index.css'

onLaunch(() => {
	console.log("App Launch");
});
onShow(() => {
	console.log("App Show");
});
onHide(() => {
	console.log("App Hide");
});
</script>
<style>
@font-face {
	font-family: 'testFont';
	src: url('./static/zyytBold.ttf');
}

/*每个页面公共css */

page::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -2;
	background: #f1f1f1;
}

/* 底部导航栏 */
/deep/ .uni-tabbar-bottom .uni-tabbar {
	padding-top: 0.3rem;
}
</style>
