import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserBookings } from "../services/Api"; 

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // ❗ Ideally get from login (for now static)
  const userId = 1;

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const data = await getUserBookings(userId); // ✅ FIXED
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings", err);
      }
    };

    loadBookings();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 3,
      }}
    >
      <Container>
        <Card
          sx={{
            borderRadius: 4,
            p: 4,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "#fff",
            boxShadow: "0 8px 30px rgba(0,0,0,0.6)",
          }}
        >
          <CardContent>

            {/* Title */}
            <Typography
              variant="h4"
              sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
            >
              My Booking History
            </Typography>

            {/* Booking List */}
            {bookings.length === 0 ? (
              <Typography sx={{ textAlign: "center", color: "#ccc" }}>
                No bookings found
              </Typography>
            ) : (
              bookings.map((b) => (
                <Box
                  key={b.id}
                  sx={{
                    p: 2,
                    mb: 2,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.08)",
                  }}
                >
                  <Typography variant="h6">
                    {b.car?.name || "Car"}
                  </Typography>
                  <Typography sx={{ color: "#ccc" }}>
                    From: {b.startDate}
                  </Typography>
                  <Typography sx={{ color: "#ccc" }}>
                    To: {b.endDate}
                  </Typography>
                </Box>
              ))
            )}

            {/* Button */}
            <Button
  variant="contained"
  fullWidth
  onClick={() => navigate("/user/profiles")}   // ✅ correct path
  sx={{
    mt: 3,
    borderRadius: "30px",
    fontWeight: "bold",
    background: "linear-gradient(45deg, #FFD700, #FFA500)",
    color: "#000",
    "&:hover": {
      background: "linear-gradient(45deg, #FFC107, #FF9800)",
    },
  }}
>
  Explore Cars
</Button>

          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default UserDashboard;
