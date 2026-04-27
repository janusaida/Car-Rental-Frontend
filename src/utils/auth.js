
// export const setAuth = (token, role) => {
//   localStorage.setItem("token", token);
//   localStorage.setItem("role", role);
// };

// export const getRole = () => {
//   return localStorage.getItem("role");
// };

// export const isAuthenticated = () => {
//   return !!localStorage.getItem("token");
// };

// export const logout = () => {
//   localStorage.clear();
// };
export const setAuth = (data) => {
  localStorage.setItem("", JSON.stringify(data));
};

export const getAuth = () => {
  return JSON.parse(localStorage.getItem(""));
};

export const logout = () => {
  localStorage.removeItem("");
};


