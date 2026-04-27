import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// 🔹 Axios instance (MAIN FIX)
const API = axios.create({
  baseURL: BASE_URL,
});

// ✅ REGISTER
export const registerUser = async (user) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Registration failed");
  }

  return res.json();
};

// ✅ LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Login failed");
  }

  return res.json();
};

// ✅ GET CARS
export const getCars = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/cars`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch cars");
  }

  return res.json();
};

// ✅ GET USER BOOKINGS
export const getUserBookings = async (userId) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${BASE_URL}/user/history/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
};

// ✅ EXPORT DEFAULT (🔥 MAIN FIX)
export default API;