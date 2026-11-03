const express = require("express");
const app = express();
const PORT = 5001;

app.use(express.json());
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "BookTunes API is running!",
  });
});

app.listen(PORT, () => {
  console.log(`BookTunes server running on port ${PORT}`);
});
