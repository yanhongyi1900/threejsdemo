import instance from "./instance";

export function searchMusicByKeywords(params) {
  return instance.get("/cloudsearch", { params });
}

export function queryMusicUrl(params) {
  return instance.get("/song/url", { params });
}

export function queryMusicLrc(params) {
  return instance.get("/lyric", { params });
}
