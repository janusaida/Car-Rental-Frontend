import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Bookings from "./pages/Bookings";
import AddCar from "./pages/AddCar";
import Profiles from "./pages/Profiles";
import BookCar from "./pages/BookCar";
import History from "./pages/History";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ USER FEATURES */}
        <Route
          path="/book-car"
          element={
            <ProtectedRoute role="USER">
              <BookCar />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute role="USER">
              <History />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/profiles"
          element={
            <ProtectedRoute role="USER">
              <Profiles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user"
          element={
            <ProtectedRoute role="USER">
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* ✅ ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute role="ADMIN">
              <Bookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-car"
          element={
            <ProtectedRoute role="ADMIN">
              <AddCar />
            </ProtectedRoute>
          }
        />

        {/* ✅ COMMON BOOKINGS (ADMIN + USER) */}
        <Route
          path="/bookings"
          element={
            <ProtectedRoute role={["ADMIN", "USER"]}>
              <Bookings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}