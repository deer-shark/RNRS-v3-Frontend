import axios from "axios";
import Swal from "sweetalert2";

const productionBaseURL = "https://api.rnrs.deershark.com";
const developmentBaseURL = "http://localhost:3030";
const baseURL =
  process.env.NODE_ENV === "production"
    ? productionBaseURL
    : developmentBaseURL;

const instance = axios.create({
  baseURL,
  validateStatus(status) {
    return status < 500;
  },
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    Swal.fire({
      title: "伺服器錯誤!",
      text: "請洽詢 主辦單位 或 Deershark 。",
      icon: "error",
    });
    Promise.reject(err);
  }
);
instance.interceptors.response.use(
  (res) => {
    if (res.status === 403) {
      Swal.fire({
        title: "權限錯誤!",
        text: "請先登入，或你沒有權限操作此功能。",
        icon: "error",
      });
    }
    return res;
  },
  (err) => {
    Swal.fire({
      title: "伺服器錯誤!",
      text: "請洽詢 主辦單位 或 Deershark 。",
      icon: "error",
    });
    Promise.reject(err);
  }
);

export default instance;
