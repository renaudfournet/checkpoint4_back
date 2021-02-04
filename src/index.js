const app = require('./app');

const PORT = process.env.PORT || 5000;



app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello express !",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});