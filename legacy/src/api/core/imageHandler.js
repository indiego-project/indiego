/* eslint-disable prettier/prettier */
import axios from "axios";

const imageHandler = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URI,
  headers: {
    "Accept": "*/*",
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
});

imageHandler.interceptors.request.use(
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

imageHandler.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const { config, response } = error;

    if (response.status === 400) {
      const originalRequest = config;

      const headers = {
        "Content-Type": "multipart/form-data",
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
        axios({
          url: `${process.env.REACT_APP_SERVER_URI}/members/logout`,
          method: "GET",
          headers
        });
      }
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default imageHandler;
