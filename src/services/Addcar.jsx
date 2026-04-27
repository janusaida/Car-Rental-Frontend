import { useState } from "react";
import { addCar } from "../services/api";

function AddCar() {
  const [car, setCar] = useState({
    brand: "",
    model: "",
    pricePerDay: "",
    available: true,
    registrationNumber: "",
  });

  const handleSubmit = async () => {
    await addCar(car);
    alert("Car Added");
  };

  return (
    <div>
      <input placeholder="Brand"
        onChange={(e) => setCar({...car, brand: e.target.value})}
      />

      <input placeholder="Model"
        onChange={(e) => setCar({...car, model: e.target.value})}
      />

      <input placeholder="Price"
        onChange={(e) => setCar({...car, pricePerDay: e.target.value})}
      />

      <input placeholder="Reg Number"
        onChange={(e) => setCar({...car, registrationNumber: e.target.value})}
      />

      <button onClick={handleSubmit}>Add Car</button>
    </div>
  );
}

export default AddCar;