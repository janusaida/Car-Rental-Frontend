import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box
} from "@mui/material";

import API from "../services/api"; // ✅ FIXED

function BookCar() {
  const [carId, setCarId] = useState("");
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");

  const handleBooking = async () => {
    try {
      const res = await API.post(`/book/${carId}/${userId}`, {
        bookingDate: date
      });

      alert("Car Booked Successfully!");
      console.log(res.data);
    } catch (err) {
      alert("Error booking car");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={6} sx={{ p: 4, mt: 5, borderRadius: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
           Book a Car
        </Typography>

        <TextField
          fullWidth
          label="Car ID"
          margin="normal"
          value={carId}
          onChange={(e) => setCarId(e.target.value)}
        />

        <TextField
          fullWidth
          label="User ID"
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <TextField
          fullWidth
          type="date"
          margin="normal"
          onChange={(e) => setDate(e.target.value)}
        />

        <Box textAlign="center">
          <Button
            variant="contained"
            onClick={handleBooking}
            sx={{
              mt: 2,
              px: 4,
              borderRadius: "25px",
              background: "linear-gradient(to right, #1976d2, #42a5f5)"
            }}
          >
            Book Now
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default BookCar;