<template>
  <el-carousel :interval="4000" autoplay loop pause-on-hover>
    <el-carousel-item
      v-for="(item, index) in cardList"
      height="260px"
      :key="index"
    >
      <!-- <img class="banner-img" :src="item.imageUrl" /> -->
      <el-image :src="item.imageUrl" fit="fill" height="100%" />
    </el-carousel-item>
  </el-carousel>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getHomeBanner } from "@/api/home.js";
const cardList = ref([]);
const getHomeBannerFn = () => {
  return getHomeBanner();
};
onMounted(() => {
  getHomeBannerFn().then(({ banners }) => {
    cardList.value = banners;
  });
});
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.banner-img {
  width: 100%;
  height: 100%;
}
</style>
