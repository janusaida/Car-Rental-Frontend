// import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

// function Profiles() {
//   // Dummy profiles (you can later connect backend)
//   const profiles = [
//     { name: "BMW X5", type: "Luxury SUV" },
//     { name: "Audi A6", type: "Premium Sedan" },
//     { name: "Mercedes C-Class", type: "Luxury Sedan" },
//   ];

//   return (
//     <Container sx={{ mt: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Available Profiles
//       </Typography>

//       <Grid container spacing={3}>
//         {profiles.map((profile, index) => (
//           <Grid item xs={12} md={4} key={index}>
//             <Card sx={{ borderRadius: 3 }}>
//               <CardContent>
//                 <Typography variant="h6">{profile.name}</Typography>
//                 <Typography color="text.secondary">
//                   {profile.type}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

// export default Profiles;
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom"; // ✅ IMPORT

function Profiles() {
  const navigate = useNavigate(); // ✅ INIT

  const profiles = [
    {
      id: 1,
      name: "BMW X5",
      type: "Luxury SUV",
      price: "₹5000/day",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2",
    },
    {
      id: 2,
      name: "Audi A6",
      type: "Premium Sedan",
      price: "₹4500/day",
      image:
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
    },
    {
      id: 3,
      name: "Mercedes C-Class",
      type: "Luxury Sedan",
      price: "₹5500/day",
      image:
        "https://images.unsplash.com/photo-1617814076367-b759c7d7e738",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        py: 5,
      }}
    >
      <Container>
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            textAlign: "center",
            mb: 5,
            fontWeight: "bold",
          }}
        >
          Luxury Car Collection
        </Typography>

        <Grid container spacing={4}>
          {profiles.map((car) => (
            <Grid item xs={12} sm={6} md={6} key={car.id}>
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={car.image}
                  alt={car.name}
                />

                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {car.name}
                  </Typography>

                  <Typography sx={{ color: "#ccc", mt: 1 }}>
                    {car.type}
                  </Typography>

                  <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                    {car.price}
                  </Typography>

                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() =>
                      navigate(`/book-car?carId=${car.id}`) // ✅ PASS carId
                    }
                    sx={{
                      mt: 3,
                      borderRadius: "30px",
                      fontWeight: "bold",
                      background:
                        "linear-gradient(45deg, #FFD700, #FFA500)",
                      color: "#000",
                    }}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Profiles;