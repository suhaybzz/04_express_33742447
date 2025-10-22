// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes
router.get("/", (req, res) => res.send("Hello World!"));
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) =>
  res.send("<h1>Contact me at sahme048@campus.goldsmiths.ac.uk</h1>")
);
router.get("/date", (req, res) => {
  const now = new Date();
  res.send(`<h1>Today's date and time:</h1><p>${now}</p>`);
});

// Export the router object so index.js can access it
module.exports = router;
