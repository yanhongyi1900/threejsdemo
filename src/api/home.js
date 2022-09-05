import instance from "./instance";

export function getHomeBanner(params) {
  return instance.get("/banner", { type: 1 });
}
