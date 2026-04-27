// import {
//   Container,
//   Typography,
//   Box,
//   Divider,
// } from "@mui/material";

// function Bookings() {
     
//   // Dummy booking data (later connect backend)
//   const bookings = [
//     {
//       user: "Janu",
//       car: "BMW X5",
//       date: "2026-04-10",
//       status: "Confirmed",
//     },
//     {
//       user: "Rahul",
//       car: "Audi A6",
//       date: "2026-04-12",
//       status: "Pending",
//     },
//     {
//       user: "Priya",
//       car: "Mercedes C-Class",
//       date: "2026-04-15",
//       status: "Completed",
//     },
//   ];

//   return (
    
//     <Container sx={{ mt: 5 }}>
//          <Box
//         sx={{
//           height: "90vh",
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//           color: "#f9faf9",
//         }}
//       ></Box>
//       <Typography variant="h4" gutterBottom>
//         User Bookings 
//       </Typography>

//       {bookings.map((booking, index) => (
//         <Box key={index} sx={{ p: 2 }}>
          
//           <Typography variant="h6">
//             {booking.user}
//           </Typography>

//           <Typography color="text.secondary">
//             Car: {booking.car}
//           </Typography>

//           <Typography>
//             Date: {booking.date}
//           </Typography>

//           <Typography color="primary">
//             Status: {booking.status}
//           </Typography>

//           <Divider sx={{ mt: 2 }} />
//         </Box>
//       ))}
//     </Container>
//   );
// }

// export default Bookings;

import {
  Container,
  Typography,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([
    {
      user: "",
      car: "BMW X5",
      date: "2026-04-10",
      status: "Pending",
    },
    {
      user: "Rahul",
      car: "Audi A6",
      date: "2026-04-12",
      status: "Pending",
    },
    {
      user: "Priya",
      car: "Mercedes C-Class",
      date: "2026-04-15",
      status: "Pending",
    },
  ]);

  const updateStatus = (index, newStatus) => {
    const updated = [...bookings];
    updated[index].status = newStatus;
    setBookings(updated);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1555215695-3004980ad54c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />

      <Container sx={{ mt: 5, position: "relative", color: "#fff" }}>
        <Typography variant="h4" gutterBottom>
          Luxury Bookings Dashboard 
        </Typography>

        {bookings.map((booking, index) => (
          <Box
            key={index}
            sx={{
              p: 3,
              mb: 2,
              borderRadius: 3,
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
            }}
          >
            <Typography variant="h6">{booking.user}</Typography>

            <Typography sx={{ mt: 1 }}>
              Car: {booking.car}
            </Typography>

            <Typography>
              Date: {booking.date}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color:
                  booking.status === "Confirmed"
                    ? "lightgreen"
                    : booking.status === "Cancelled"
                    ? "red"
                    : "orange",
              }}
            >
              Status: {booking.status}
            </Typography>

            {/* BUTTONS */}
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  mr: 2,
                  backgroundColor: "green",
                  ":hover": { backgroundColor: "darkgreen" },
                }}
                onClick={() => updateStatus(index, "Confirmed")}
              >
                Confirm Booking
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "red",
                  ":hover": { backgroundColor: "darkred" },
                }}
                onClick={() => updateStatus(index, "Cancelled")}
              >
                Cancel Booking
              </Button>
            </Box>

            <Divider sx={{ mt: 2, backgroundColor: "#aaa" }} />
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default Bookings;