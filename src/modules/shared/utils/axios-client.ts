import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_VENDORS_API_BASE_URL,
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("response", { error });
    if (error.code === "ERR_NETWORK") {
      alert("No internet connection");
    }
    return Promise.reject(error);
  }
);

export { axiosClient };
