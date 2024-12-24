const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.routes");
const PORT = process.env.PORT || 3333;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use("/users/", userRouter);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the API",
    data: null,
    error: null,
  });
});

// error handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
    data: null,
    error: null,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
