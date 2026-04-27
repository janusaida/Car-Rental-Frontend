import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";
import API from "../services/api";

function History() {
  const [userId, setUserId] = useState("");
  const [bookings, setBookings] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await API.get(`/history/${userId}`);
      setBookings(res.data);
    } catch (err) {
      alert("Error fetching history");
    }
  };

  const cancelBooking = async (id) => {
    try {
      await API.delete(`/booking/${id}`);
      alert("Booking Cancelled");
      fetchHistory();
    } catch (err) {
      alert("Error cancelling booking");
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" mt={4}>
         Booking History
      </Typography>

      <TextField
        fullWidth
        label="Enter User ID"
        sx={{ mt: 3 }}
        onChange={(e) => setUserId(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={fetchHistory}
      >
        Get History
      </Button>

      <Grid container spacing={3} mt={2}>
        {bookings.map((b) => (
          <Grid item xs={12} md={6} key={b.id}>
            <Card sx={{ borderRadius: 3, boxShadow: 5 }}>
              <CardContent>
                <Typography variant="h6">
                   Car ID: {b.car?.id}
                </Typography>
                <Typography>
                  Date: {b.bookingDate}
                </Typography>

                <Button
                  color="error"
                  variant="outlined"
                  sx={{ mt: 2 }}
                  onClick={() => cancelBooking(b.id)}
                >
                  Cancel Booking
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default History;