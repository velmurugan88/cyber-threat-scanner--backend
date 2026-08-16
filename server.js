const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "online",
    message: "Cyber Threat Scanner backend is running"
  });
});

app.post("/scan/url", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "URL is required"
    });
  }

  res.json({
    type: "url",
    input: url,
    status: "SAFE",
    riskScore: 10,
    message: "Demo scan completed"
  });
});

app.post("/scan/email", (req, res) => {
  res.json({
    type: "email",
    status: "SAFE",
    riskScore: 10,
    message: "Demo email scan completed"
  });
});

app.post("/scan/sms", (req, res) => {
  res.json({
    type: "sms",
    status: "SAFE",
    riskScore: 10,
    message: "Demo SMS scan completed"
  });
});

app.post("/scan/breach", (req, res) => {
  res.json({
    type: "breach",
    status: "SAFE",
    riskScore: 10,
    message: "Demo breach scan completed"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
