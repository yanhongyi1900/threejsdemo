<template>
  <div>登 录</div>
  <div>
    <el-avatar :src="avatarUrlPic">User</el-avatar>
    <span style="margin-left: 10px">{{ nickNames || "用户名" }}</span>
  </div>
  <div>
    <el-image style="width: 200px; height: 200px" :src="url" />
    <p>{{ statusMsg }}</p>
  </div>
</template>

<script setup>
import {
  getQrCode,
  getCode,
  checkLoginStatus,
  getUserDetail,
  getUserAccount,
  loginRefresh,
} from "@/api/login.js";
import { computed, onMounted, onUnmounted, ref } from "vue";
import instance from "@/api/instance";
import router from "../../router";

const url = ref("");
const avatarUrlPic = ref("");
const nickNames = ref("");
const statusMsg = ref("");

let timer = null;
let code = "";
let cookieVal = "";

const getLoginStatus = (unikey) => {
  clearInterval(timer);
  timer = setInterval(async () => {
    let { code, avatarUrl, nickname, message, cookie } = await checkLoginStatus(
      {
        key: unikey,
      }
    );
    if (code == 803) {
      cookieVal = cookie;
      sessionStorage.setItem("cookie", cookieVal);
      clearInterval(timer);
      loginRefresh();
      getUserAccount();
      router.push("/home");
    }
    if (avatarUrl) {
      avatarUrlPic.value = avatarUrl;
    }
    if (nickname) {
      nickNames.value = nickname;
    }
    if (message) {
      statusMsg.value = message;
    }
  }, 3000);
};

onMounted(async () => {
  clearInterval(timer);
  let {
    data: { unikey },
  } = await getCode();
  code = unikey;
  let {
    data: { qrimg },
  } = await getQrCode({ key: code, qrimg: true });
  url.value = qrimg;

  getLoginStatus(unikey);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
