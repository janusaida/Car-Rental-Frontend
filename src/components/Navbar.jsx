import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  // ✅ Get auth data from localStorage
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.clear(); // ✅ clear all auth data
    navigate("/login");
  };

  // ✅ Navigate based on role
  const goToDashboard = () => {
    if (role === "ADMIN") navigate("/admin");
    else if (role === "USER") navigate("/user");
  
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#e707b6ec" }}>
      <Toolbar>

        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
           Luxora Car-Rentals
        </Typography>

        <Box>

          {/* Home */}
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>

          {/* NOT LOGGED IN */}
          {!token && (
            <>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/register">
                Register
              </Button>
            </>
          )}

          {/* LOGGED IN */}
          {token && (
            <>
              {/* Role Badge */}
              <Button
                sx={{
                  color: "#FFD700",
                  fontWeight: "bold",
                }}
              >
                {role}
              </Button>

              

              {/* Logout */}
              <Button
                sx={{
                  color: "#FF5252",
                  fontWeight: "bold",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}

        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;