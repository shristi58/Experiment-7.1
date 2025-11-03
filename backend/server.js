const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/api/products", (req, res) => {
  const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 }
  ];
  res.json(products);
});

app.listen(5000, () => console.log("Server running on port 5000"));
