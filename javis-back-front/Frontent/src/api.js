import axios from "axios";

//개발용
//배포용
const baseUrl = import.meta.env.DEV 
  ? "http://localhost:8080"
  : "https://javisbackend.shop";
export const client = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});