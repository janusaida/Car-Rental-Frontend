
import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Paper,
  Typography,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/Api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 🔹 LOGIN FUNCTION (FIXED)
  const handleLogin = async () => {
    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
      });

      // ✅ Axios response is in res.data
      const data = res.data;

      // ✅ STORE DATA
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("email", data.email);

      console.log("Login success:", data);

      // ✅ ROLE BASED REDIRECT
      if (data.role === "ADMIN") navigate("/admin");
      else if (data.role === "USER") navigate("/user");

    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493238792000-8113da705763')",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          {/* EMAIL */}
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            margin="normal"
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            margin="normal"
          />

          {/* BUTTON */}
          <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;

// import { useState } from "react";
// import {
//   TextField,
//   Button,
//   Container,
//   Paper,
//   Typography,
//   Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { loginUser } from "../services/Api";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await loginUser({ email, password });

//       // ✅ STORE DATA
//       localStorage.setItem("token", res.token);
//       localStorage.setItem("role", res.role);
//       localStorage.setItem("email", res.email);

//       // ✅ ROLE BASED REDIRECT
//       if (res.role === "ADMIN") navigate("/admin");
//       else if (res.role === "USER") navigate("/user");
   

//     } catch (err) {
//       alert("Login Failed");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1493238792000-8113da705763')",
//         backgroundSize: "cover",
//         display: "flex",
//         alignItems: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper sx={{ p: 4 }}>
//           <Typography variant="h4">Login</Typography>

//           <TextField fullWidth label="Email"
//             onChange={(e) => setEmail(e.target.value)} margin="normal" />

//           <TextField fullWidth label="Password" type="password"
//             onChange={(e) => setPassword(e.target.value)} margin="normal" />

//           <Button fullWidth variant="contained"
//             onClick={handleLogin} sx={{ mt: 2 }}>
//             Login
//           </Button>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

// export default Login;