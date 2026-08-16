module.exports = (req, res) => {
  res.status(200).json({
    status: "online",
    message: "Cyber Threat Scanner backend is running"
  });
};
