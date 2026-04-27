// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Button,
//   Box,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// function AdminDashboard() {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
// backgroundImage: "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         position: "relative",
//       }}
//     >
//       {/* Overlay */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           backgroundColor: "#fff(87, 69, 69)",
//         }}
//       />

//       <Container
//         sx={{
//           mt: 5,
//           position: "relative",
//           color: "#fff",
//         }}
//       >
//         {/* Header */}
//         <Typography variant="h4" gutterBottom>
//           Welcome Admin 
//         </Typography>

//         <Typography sx={{ mb: 4 }}>
//           Manage your Luxora Cars Rental system efficiently.
//         </Typography>

//         {/* Control Card */}
//         <Card
//           sx={{
//             borderRadius: 4,
//             p: 3,
//             background: "rgba(248, 240, 240, 0.9)",
//             backdropFilter: "blur(12px)",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h5">
//               Admin Controls
//             </Typography>

//             <Typography sx={{ mt: 1, mb: 3 }}>
//               Manage bookings and add new luxury cars.
//             </Typography>

//             {/* Buttons */}
//             <Box>
//               {/* Show Bookings */}
//               <Button
//                 variant="contained"
//                 sx={{
//                   mr: 2,
//                   px: 3,
//                   background: "linear-gradient(45deg, #2196f3, #21cbf3)",
//                 }}
//                 onClick={() => navigate("/bookings")}
//               >
//                 Show Bookings
//               </Button>

//               {/* Add Car */}
//               <Button
//                 variant="contained"
//                 sx={{
//                   px: 3,
//                   background: "linear-gradient(45deg, #9c27b0, #e040fb)",
//                 }}
//                 onClick={() => navigate("/add-car")}
//               >
//                 Add Car
//               </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Container>
//     </Box>
//   );
// }

// export default AdminDashboard;
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1502877338535-766e1452684a')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* ✅ Dark Overlay (FIXED) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.6)", // FIXED
        }}
      />

      <Container
        sx={{
          mt: 5,
          position: "relative",
          color: "#fff",
        }}
      >
        {/* Header */}
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Welcome Admin
        </Typography>

        <Typography sx={{ mb: 4 }}>
          Manage your Luxora Cars Rental system efficiently.
        </Typography>

        {/* Card */}
        <Card
          sx={{
            borderRadius: 4,
            p: 3,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(15px)",
            color: "#fff",
            boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
          }}
        >
          <CardContent>
            <Typography variant="h5" fontWeight="bold">
              Admin Controls
            </Typography>

            <Typography sx={{ mt: 1, mb: 3, color: "#ccc" }}>
              Manage bookings and add new luxury cars.
            </Typography>

            <Box>
              {/* ✅ Show Bookings */}
             <Button
  variant="contained"
  sx={{
    mr: 2,
    px: 3,
    background: "linear-gradient(45deg, #2196f3, #21cbf3)",
  }}
  onClick={() => navigate("/admin/bookings")}   // ✅ FIXED
>
  Show Bookings
</Button>

              {/* ✅ Add Car */}
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  borderRadius: "30px",
                  background:
                    "linear-gradient(45deg, #9c27b0, #e040fb)",
                }}
                onClick={() => navigate("/add-car")}
              >
                Add Car
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default AdminDashboard;