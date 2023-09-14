/* eslint-disable prettier/prettier */
import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI,
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use(
  async (config) => {
    if (localStorage.getItem("accessToken")) {
      config.headers["Authorization"] = `Bearer ${localStorage.getItem("accessToken")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { config, response } = error;

    if (response.status === 400 && response.data.message==="Token Expired") {
      const originalRequest = config;

      const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
        "Refresh": localStorage.getItem("refreshToken"),
      }

      try {
        const data = await axios({
          url: `${process.env.REACT_APP_SERVER_URI}/members/reissue`,
          method: "GET",
          headers
        });
        if (data) {
          localStorage.setItem("accessToken", data.headers.get("Authorization").split(" ")[1]);
          originalRequest.headers.Authorization = `Bearer ${data.headers.get("Authorization").split(" ")[1]}`;
          return await axios.request(originalRequest);
        }
      } catch (error) {
        try{
          axios({
            url: `${process.env.REACT_APP_SERVER_URI}/members/logout`,
            method: "GET",
            headers
          });
        } finally {
          localStorage.clear();
        }
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default instance;
