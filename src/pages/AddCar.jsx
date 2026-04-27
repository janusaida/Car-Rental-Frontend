import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Card,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCar() {
  const navigate = useNavigate();

  const [car, setCar] = useState({
    model: "",
    brand: "",
    regNumber: "",
    price: "",
    year: "",
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const cars = JSON.parse(localStorage.getItem("cars")) || [];
    cars.push(car);
    localStorage.setItem("cars", JSON.stringify(cars));

    alert("Car Added Successfully ");
    navigate("/admin");
  };

  // ✅ FIXED: moved outside JSX
  const inputStyle = {
    mt: 2,
    "& .MuiOutlinedInput-root": {
      color: "#fff",
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.3)",
      },
      "&:hover fieldset": {
        borderColor: "#ff9800",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ff9800",
        boxShadow: "0 0 10px #ff9800",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255,255,255,0.7)",
    },
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1493238792000-8113da705763')",
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
          background: "rgba(0,0,0,0.75)",
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", pt: 10 }}>
        <Card
          sx={{
            p: 5,
            borderRadius: 5,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(15px)",
            border: "1px solid rgba(255,255,255,0.2)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              background: "linear-gradient(45deg, #ff9800, #e91e63)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Add New Luxury Car 
          </Typography>

          {/* Inputs */}
          <TextField
            fullWidth
            label="Car Model"
            name="model"
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Car Brand"
            name="brand"
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Registration Number"
            name="regNumber"
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Price Per Day"
            name="price"
            onChange={handleChange}
            sx={inputStyle}
          />

          <TextField
            fullWidth
            label="Year of Manufacture"
            name="year"
            onChange={handleChange}
            sx={inputStyle}
          />

          {/* Save Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 1.5,
              fontWeight: "bold",
              borderRadius: 3,
              background: "linear-gradient(45deg, #ff9800, #f44336)",
              boxShadow: "0 4px 20px rgba(255,152,0,0.5)",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
            onClick={handleSubmit}
          >
            Save Car
          </Button>

          {/* Cancel */}
          <Button
            fullWidth
            sx={{
              mt: 2,
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 3,
            }}
            onClick={() => navigate("/admin")}
          >
            Cancel
          </Button>
        </Card>
      </Container>
    </Box>
  );
}

export default AddCar;