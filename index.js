const express = require("express");
const app = express();
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));
app.listen(4000, () => {
  console.log("listening on port 4  000");
});

app.get("/", (req, res) => {
  res.send([
    {
        id:1,
        name: 'Dr. Keyner De la Hoz',
        time: 12,
        Likes: 18,
        answers: 20,
        theme: 'Nutricion',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    }
  ]);
});


// app.get("/usuarios", (req, res) => {
//   res.send([]);
// });
const errorHandler = require("express-async-handler");

app.use(
  errorHandler(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      error: err.message,
    });
  })
);
app.use(
  "/api",
  createProxyMiddleware({
    target: "https://a-pi-medical.vercel.app",
    changeOrigin: true,
  })
);