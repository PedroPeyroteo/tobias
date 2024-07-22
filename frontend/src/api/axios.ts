import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

// Request interceptor to attach the token to every reques
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
