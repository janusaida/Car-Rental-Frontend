// import axios from "axios";

// const BASE_URL = "http://localhost:8080/api";

// // 🔹 Axios instance (MAIN FIX)
// const API = axios.create({
//   baseURL: BASE_URL,
// });

// // ✅ REGISTER
// export const registerUser = async (user) => {
//   const res = await fetch(`${BASE_URL}/auth/register`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(errorText || "Registration failed");
//   }

//   return res.json();
// };

// // ✅ LOGIN
// export const loginUser = async (data) => {
//   const res = await fetch(`${BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   if (!res.ok) {
//     const errorText = await res.text();
//     throw new Error(errorText || "Login failed");
//   }

//   return res.json();
// };

// // ✅ GET CARS
// export const getCars = async () => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${BASE_URL}/cars`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch cars");
//   }

//   return res.json();
// };

// // ✅ GET USER BOOKINGS
// export const getUserBookings = async (userId) => {
//   const token = localStorage.getItem("token");

//   const res = await fetch(`${BASE_URL}/user/history/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch bookings");
//   }

//   return res.json();
// };

// // ✅ EXPORT DEFAULT (🔥 MAIN FIX)
// export default API;
// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:8080/",
// });

// // REGISTER
// export const registerUser = (user) =>
//   API.post("/auth/register", user);

// // LOGIN
// export const loginUser = (data) =>
//   API.post("/auth/login", data);

// // GET CARS
// export const getCars = () =>
//   API.get("/cars", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });

// // BOOKINGS
// export const getUserBookings = (userId) =>
//   API.get(`/user/history/${userId}`, {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });

// export default API;
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// ✅ interceptor
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token && !config.url.includes("/auth")) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// REGISTER
export const registerUser = (data) =>
  API.post("/auth/register", data);

// LOGIN
export const loginUser = (data) =>
  API.post("/auth/login", data);

// GET CARS
export const getCars = () =>
  API.get("/cars");

export default API;