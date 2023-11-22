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
              name: 'Dr. Oswaldo',
              time: 12,
              Likes: 18,
              answers: 20,
              theme: 'Nutricion',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:2,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Nutricion',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:3,
              name: 'Dr Pedro',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Nutricion',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:4,
              name: 'Dr. Markus',
              time: 12,
              Likes: 18,
              answers: 20,
              theme: 'Salud',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:5,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Salud',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:6,
              name: 'Dr Pablo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Salud',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:7,
              name: 'Dr. Marce',
              time: 12,
              Likes: 18,
              answers: 20,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:8,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          },
          {
              id:9,
              name: 'Dr Angel',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
          }
        ]);
       });

app.get("/Nutricion", (req, res) => {
  res.send([
    {
        id:1,
        name: 'Dr. Oswaldo',
        time: 12,
        Likes: 18,
        answers: 20,
        theme: 'Nutricion',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:2,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Nutricion',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:3,
        name: 'Dr Pedro',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Nutricion',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    }
  ]);
});

app.get("/Salud", (req, res) => {
  res.send([
    {
        id:4,
        name: 'Dr. Markus',
        time: 12,
        Likes: 18,
        answers: 20,
        theme: 'Salud',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:5,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Salud',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:6,
        name: 'Dr Pablo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Salud',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    }
  ]);
});

app.get("/Medicinas", (req, res) => {
  res.send([
    {
        id:7,
        name: 'Dr. Marce',
        time: 12,
        Likes: 18,
        answers: 20,
        theme: 'Medicinas',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:8,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Medicinas',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-30.jpg'
    },
    {
        id:9,
        name: 'Dr Angel',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Medicinas',
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