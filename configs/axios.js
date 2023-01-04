import Axios from "axios";

console.log(process.env.NODE_ENV);
const BASE_API =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BACKEND_API_DEV
    : process.env.NEXT_PUBLIC_BACKEND_API_PROD;

const axiosInstance = Axios.create({
  baseURL: BASE_API,
  // baseURL: "https://pambu.net/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

export default axiosInstance;
