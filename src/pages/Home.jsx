
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCars } from "../services/Api";

function Home() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  // 🔥 Load cars from backend
  useEffect(() => {
    loadCars();
  }, []);

  const loadCars = async () => {
    try {
      const data = await getCars();
      setCars(data);
    } catch (err) {
      console.error("Error loading cars", err);
    }
  };

  const testimonials = [
    {
      name: "Rahul",
      text: "Amazing service! Smooth booking and excellent car quality.",
    },
    {
      name: "Priya",
      text: "Luxury cars at the best price. Loved the experience.",
    },
    {
      name: "Arjun",
      text: "Very professional and hassle-free service.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#105dcf" }}>

      {/* HERO SECTION */}
      <Box
        sx={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          color: "#fff",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.6)" }} />

        <Box sx={{ position: "relative", textAlign: "center" }}>
          <Typography variant="h2" fontWeight="bold">
            Luxora Cars Rental
          </Typography>

          <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>
            Drive Luxury. Drive Comfort. Drive Luxora
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/user/profiles")}
          >
            Explore Cars
          </Button>
        </Box>
      </Box>

      {/* 🔥 AVAILABLE CARS (FROM BACKEND) */}
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Available Cars
        </Typography>

        <Grid container spacing={4}>
          {cars.map((car) => (
            <Grid item xs={12} md={4} key={car.id}>
              <Card sx={{ borderRadius: 4 }}>
                <CardContent>
                  <Typography variant="h6">
                    {car.brand} - {car.model}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    ₹{car.pricePerDay} / day
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    {car.available ? "Available" : "Not Available"}
                  </Typography>

                  <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={() => navigate(`/book/${car.id}`)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* SPECIAL OFFERS */}
      <Container sx={{ mt: 6 }}>
        <Box
          sx={{
            p: 6,
            borderRadius: 4,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511988617509-a57c8a288659')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.6)" }} />

          <Box sx={{ position: "relative" }}>
            <Typography variant="h4">Special Offers</Typography>
            <Typography sx={{ mt: 2 }}>
              Get up to 30% OFF on luxury cars this weekend!
            </Typography>
          </Box>

          <Button
            variant="contained"
            sx={{ position: "relative" }}
            onClick={() => navigate("/offers")}
          >
            View Offers
          </Button>
        </Box>
      </Container>

      {/* TESTIMONIALS */}
      <Box sx={{ mt: 8, mb: 6, py: 6, background: "#000", color: "#fff" }}>
        <Container>
          <Typography variant="h4" textAlign="center">
            What Our Customers Say
          </Typography>

          <Grid container spacing={4} sx={{ mt: 3 }}>
            {testimonials.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ borderRadius: 4 }}>
                  <CardContent>
                    <Typography>"{item.text}"</Typography>
                    <Typography sx={{ mt: 2, fontWeight: "bold" }}>
                      — {item.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default Home;