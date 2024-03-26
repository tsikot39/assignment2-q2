const express = require("express");
const app = express();
const path = require("path");
const userRoutes = require("./routes/userRoutes");
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../frontend")));

// Middleware for parsing JSON bodies
app.use(express.json());
app.use(userRoutes);

const port = process.env.PORT || 3000;

app.post("/register", (req, res) => {
  const { id, fullName, address, status } = req.body;
  let fee = 0;
  switch (status.toLowerCase()) {
    case "student":
      fee = 10;
      break;
    case "staff":
      fee = 50;
      break;
    case "volunteer":
      fee = 0;
      break;
    default:
      return res.status(400).send({ message: "Invalid status" });
  }

  const confirmation = {
    id,
    fullName,
    address,
    status,
    fee,
  };

  res.status(200).send(confirmation);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
