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
