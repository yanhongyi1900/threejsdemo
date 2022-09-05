import instance from "./instance";

export function getCode() {
  return instance.get("/login/qr/key", {
    params: {
      time: new Date().getTime(),
    },
  });
}

export function getQrCode(params) {
  return instance.get("/login/qr/create", {
    params: {
      ...params,
      time: new Date().getTime(),
    },
  });
}

export function checkLoginStatus(params) {
  return instance.get("/login/qr/check", {
    params: {
      ...params,
      time: new Date().getTime(),
    },
  });
}

export function loginRefresh(params) {
  return instance.get("/login/refresh", {
    params,
  });
}

export function getUserAccount(params) {
  return instance.get("/user/account", {
    params,
  });
}

export function getUserDetail(params) {
  return instance.get("/user/detail", {
    params,
  });
}
