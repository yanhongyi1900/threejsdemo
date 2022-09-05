<template>
  <Banner></Banner>
  <div class="container">
    <div class="bar">
      <el-menu :unique-opened="true">
        <template v-for="(item, index) in resources" :key="item.id">
          <el-menu-item v-if="item.children == null" :index="item.code">{{  item.name  }}
          </el-menu-item>
          <el-sub-menu v-else :index="item.code">
            <template #title>
              <span>{{  item.name  }}</span>
            </template>

            <template v-for="(tItem) in item.children" :key="tItem.id" :index="tItem.code">
              <el-menu-item v-if="tItem.children == null" :index="tItem.code" :key="tItem.id">{{
                 tItem.name  }}
              </el-menu-item>
              <el-sub-menu v-else :index="tItem.code">
                <template #title>
                  <span>{{  tItem.name  }}</span>
                </template>
                <el-menu-item v-for="fItem in tItem.children" :index="fItem.code" :key="fItem.id">{{
                   fItem.name  }}
                </el-menu-item>
              </el-sub-menu>
            </template>

          </el-sub-menu>
        </template>
      </el-menu>

    </div>
    <div class="main">
      <div class="search-bar">
        <el-input v-model="value" placeholder="输入你想听的歌" class="input-with-select">
          <template #append>
            <el-button :icon="Search" @click="handleSearch" />
          </template>
        </el-input>
      </div>

      <el-row>
        <el-col v-for="item in options" :key="item.id" :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <el-image style="width: 200px; height: 200px" :src="item.al.picUrl" :initial-index="4" fit="cover" />
            <div style="padding: 14px">
              <span>{{
                 item.name + " - " + item.ar.map((i) => i.name).join(",") 
                }}</span>
              <div class="bottom">
                <time class="time">{{  formatTime(item.publishTime)  }}</time>
                <el-button type="text" class="button" @click="addMusicToList(item)">加入播放列表</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div>
        <el-button v-if="showHasMore" type="text" @click="handleLoadMore">加载更多</el-button>
      </div>
    </div>
  </div>

  <Player :playlist="playlist"></Player>
</template>

<script setup>
import { resources } from "../../assets/source"
import { VideoPlay, Search } from "@element-plus/icons-vue";
import { ref, reactive, watch } from "vue";
import {
  searchMusicByKeywords,
  queryMusicUrl,
  queryMusicLrc,
} from "@/api/music.js";
// import Player from "@/components/Player.vue";
// import Banner from "@/components/Banner.vue";
import dayjs from "dayjs";
const value = ref("");
const loading = ref(false);
const options = ref([]);
const showHasMore = ref(false);
let count = 0;
const playlist = ref({
  name: "",
  url: "",
  cover: "",
});
const searchMusicByKeywordsFn = () => {
  $emit('aaa')
  loading.value = true;
  searchMusicByKeywords({
    keywords: value.value,
    limit: 6,
    offset: count,
  }).then(({ result: { songs, hasMore, songCount } }) => {
    options.value = [...options.value, ...songs];
    loading.value = false;
    if (count >= songCount) {
      showHasMore.value = false;
    } else {
      count = count + songs.length;
      showHasMore.value = true;
    }
  });
};

const handleSearch = () => {
  count = 0;
  options.value = [];
  searchMusicByKeywordsFn();
};

const formatTime = (time) => {
  return dayjs(time).format("YYYY/MM/DD/ HH:mm:ss");
};

const queryMusicUrlFn = (id) => {
  return queryMusicUrl({ id }).then(({ data }) => {
    return data[0];
  });
};

const addMusicToList = async function (item) {
  let { url, type } = await queryMusicUrlFn(item.id);
  let { lrc } = await queryMusicLrc({ id: item.id });
  playlist.value = {
    name: item.name,
    cover: item.al.picUrl,
    artist: item.ar.map((i) => i.name).join(","),
    type: "normal",
    url,
    lrc: lrc.lyric,
    theme: "#46718b",
  };
};

const handleLoadMore = () => {
  searchMusicByKeywordsFn();
};
</script>
<style lang="scss">
.container {
  display: flex;
  min-height: 400px;

  .bar {
    width: 200px;
  }

  .main {
    flex: 1;
  }
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
