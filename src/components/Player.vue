<template>
  <div id="aplayer" ref="playerRef"></div>
</template>
<script setup>
import { onMounted, ref, defineProps, watch } from "vue";
import APlayer from "APlayer"; // 引入音乐插件
import "APlayer/dist/APlayer.min.css";

const props = defineProps({
  playlist: Object,
});

const playerRef = ref(null);
let player = null;

const initPlayer = () => {
  player = new APlayer({
    container: playerRef.value,
    autoplay: true,
    volume: 0.5,
    fixed: true,
    lrcType: 1,
    audio: [],
  });
};
onMounted(() => {
  initPlayer();
});

watch(
  () => props.playlist,
  (video, oldVideo) => {
    player.list.add(video);
  },
  { deep: true }
);
</script>
