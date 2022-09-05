import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  timeout: 3000,
  headers: {
    "x-player": "text",
  },
});

// 请求拦截
instance.interceptors.request.use(
  (config) => {
    let cookie = sessionStorage.getItem("cookie");
    if (cookie) {
      config.headers.Authorization = cookie;
    }
    return config;
  },
  (err) => {
    console.error(err);
  }
);

// 响应拦截
instance.interceptors.response.use(
  function (response) {
    if (response.status != 200) {
      return Promise.reject(error);
    }
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;
