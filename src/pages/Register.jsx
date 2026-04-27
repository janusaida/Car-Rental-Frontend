// import { TextField, Button, Container, Paper } from "@mui/material";

//  function Register() {
//   return (
//     <Container maxWidth="sm">
//       <Paper sx={{ p: 4, mt: 5 }}>
//         <h2>Register</h2>
//         <TextField fullWidth label="Name" margin="normal" />
//         <TextField fullWidth label="Email" margin="normal" />
//         <TextField fullWidth label="Role" margin="normal" />
//         <TextField fullWidth label="Password" type="password" margin="normal" />
//         <Button variant="contained" fullWidth sx={{ mt: 3 }}>
//           Register
//         </Button>
//       </Paper>
//     </Container>
//   );
// }
import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/Api";  

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await registerUser(form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            backgroundColor: "rgba(173, 144, 144, 0.6)",
            color: "#fff",
          }}
        >
          <Typography
            variant="h4"
            sx={{ mb: 3, textAlign: "center", fontWeight: "bold" }}
          >
            Create Account
          </Typography>

          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={handleChange}
            margin="normal"
            // InputLabelProps={{ style: { color: "#d11717" } }}
            sx={{ input: { color: "#110c0c"} }}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ input: { color: "#fff" } }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ style: { color: "#ccc" } }}
            sx={{ input: { color: "#fff" } }}
          />

          <TextField
            select
            fullWidth
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            margin="normal"
            InputLabelProps={{ style: { color: "#eaf7f4" } }}
            sx={{ svg: { color: "#c71212" } }}
          >
            <MenuItem value="USER">User</MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
          </TextField>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: "30px",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #FFD700, #FFA500)",
              color: "#000",
            }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;