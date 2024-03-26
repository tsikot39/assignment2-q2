// Since there's no database, we don't need to require a User model
// const User = require("../models/User");

exports.createUser = (req, res) => {
  try {
    // Simulate the "saving" of data by echoing back the new user data
    // In a real-world scenario, you'd do something with the data here,
    // such as validating it, processing it, or saving it to a database.
    const user = req.body;

    // Instead of saving to a database, you might perform some operations
    // and then return a response. This is just a dummy response for demonstration.

    // Calculate fee based on the status
    let fee = 0;
    switch (user.status.toLowerCase()) {
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
        // Handle unexpected status
        return res.status(400).send({ message: "Invalid user status" });
    }

    // Add fee to the response
    user.fee = fee;

    // Send back a success response with the user data
    res.status(201).json(user);
  } catch (error) {
    // If an error occurs, send back an error response
    res.status(500).json({ message: "An error occurred", error: error });
  }
};
