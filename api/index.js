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
  res.json({
    type: "url",
    status: "SAFE",
    riskScore: 10,
    message: "URL scan completed"
  });
});

app.post("/scan/email", (req, res) => {
  res.json({
    type: "email",
    status: "SAFE",
    riskScore: 10,
    message: "Email scan completed"
  });
});

app.post("/scan/sms", (req, res) => {
  res.json({
    type: "sms",
    status: "SAFE",
    riskScore: 10,
    message: "SMS scan completed"
  });
});

app.post("/scan/breach", (req, res) => {
  res.json({
    type: "breach",
    status: "SAFE",
    riskScore: 10,
    message: "Breach scan completed"
  });
});

module.exports = app;
