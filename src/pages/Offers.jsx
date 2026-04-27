import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

function Offers() {
  const offers = [
    {
      name: "BMW X5",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      offer: "20% OFF - Limited Time",
    },
    {
      name: "Audi A6",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      offer: "Flat ₹1000 Discount",
    },
    {
      name: "Mercedes C-Class",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
      offer: "Weekend Special Deal",
    },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Special Offers
      </Typography>

      <Grid container spacing={3}>
        {offers.map((car, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              
              <CardMedia
                component="img"
                height="180"
                image={car.image}
                alt={car.name}
              />

              <CardContent>
                <Typography variant="h6">{car.name}</Typography>
                <Typography color="error" sx={{ mt: 1 }}>
                  {car.offer}
                </Typography>

                <Button variant="contained" sx={{ mt: 2 }}>
                  Book Now
                </Button>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Offers;