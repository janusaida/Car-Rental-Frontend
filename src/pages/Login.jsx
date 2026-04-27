
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
// import { loginUser } from "../services/api";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await loginUser({ email, password });

//       // ✅ assuming backend returns: { token, role }
//       const { token, role } = response;

//       // store
//       localStorage.setItem("token", token);
//       localStorage.setItem("role", role);

//       alert("Login Successful");

//       // ✅ ROLE BASED REDIRECT
//       if (role === "ADMIN") navigate("/admin");
//       else if (role === "OWNER") navigate("/owner");
//       else navigate("/user");

//     } catch (err) {
//       console.error(err);
//       alert("Login Failed");
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           elevation={12}
//           sx={{
//             p: 5,
//             borderRadius: 5,
//             backdropFilter: "blur(15px)",
//             background: "rgba(0,0,0,0.65)",
//             boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
//             color: "#fff",
//           }}
//         >
//           {/* TITLE */}
//           <Typography
//             variant="h4"
//             sx={{
//               mb: 3,
//               textAlign: "center",
//               fontWeight: "bold",
//               letterSpacing: 1,
//             }}
//           >
//            Luxora Login
//           </Typography>

//           {/* EMAIL */}
//           <TextField
//             fullWidth
//             label="Email"
//             variant="outlined"
//             onChange={(e) => setEmail(e.target.value)}
//             margin="normal"
//             InputLabelProps={{ style: { color: "#ccc" } }}
//             sx={{
//               input: { color: "#fff" },
//               fieldset: { borderColor: "#888" },
//               "&:hover fieldset": { borderColor: "#fff" },
//             }}
//           />

//           {/* PASSWORD */}
//           <TextField
//             fullWidth
//             label="Password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             margin="normal"
//             InputLabelProps={{ style: { color: "#ccc" } }}
//             sx={{
//               input: { color: "#fff" },
//               fieldset: { borderColor: "#888" },
//               "&:hover fieldset": { borderColor: "#fff" },
//             }}
//           />

//           {/* BUTTON */}
//           <Button
//             variant="contained"
//             fullWidth
//             sx={{
//               mt: 4,
//               py: 1.3,
//               borderRadius: "30px",
//               fontWeight: "bold",
//               fontSize: "16px",
//               background:
//                 "linear-gradient(45deg, #FFD700, #FFA500, #FF6F00)",
//               color: "#000",
//               transition: "0.3s",
//               "&:hover": {
//                 transform: "scale(1.05)",
//                 background:
//                   "linear-gradient(45deg, #FFC107, #FF9800)",
//               },
//             }}
//             onClick={handleLogin}
//           >
//             Login
//           </Button>
//         </Paper>
//       </Container>
//     </Box>
//   );
// }

// export default Login;

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });

      // ✅ STORE DATA
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);
      localStorage.setItem("email", res.email);

      // ✅ ROLE BASED REDIRECT
      if (res.role === "ADMIN") navigate("/admin");
      else if (res.role === "USER") navigate("/user");
   

    } catch (err) {
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
          <Typography variant="h4">Login</Typography>

          <TextField fullWidth label="Email"
            onChange={(e) => setEmail(e.target.value)} margin="normal" />

          <TextField fullWidth label="Password" type="password"
            onChange={(e) => setPassword(e.target.value)} margin="normal" />

          <Button fullWidth variant="contained"
            onClick={handleLogin} sx={{ mt: 2 }}>
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;