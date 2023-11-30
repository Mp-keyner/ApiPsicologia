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
              image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F4.png?alt=media&token=a9c6b891-281e-46dd-ab4d-0a9f91e9c521'
          },
          {
              id:2,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Nutricion',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-02.jpg'
          },
          {
              id:3,
              name: 'Dr Pedro',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Nutricion',
              image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F10.png?alt=media&token=c34171bb-a7d9-4c16-9a7c-557ce23921d4'
          },
          {
              id:4,
              name: 'Dr. Markus',
              time: 12,
              Likes: 18,
              answers: 20,
              theme: 'Salud',
              image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500'
          },
          {
              id:5,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Salud',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-05.jpg'
          },
          {
              id:6,
              name: 'Dr Pablo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Salud',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-06.jpg'
          },
          {
              id:7,
              name: 'Dr. Marce',
              time: 12,
              Likes: 18,
              answers: 20,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-07.jpg'
          },
          {
              id:8,
              name: 'Anonimo',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-08.jpg'
          },
          {
              id:9,
              name: 'Dr Angel',
              time: 20,
              Likes: 8,
              answers: 2,
              theme: 'Medicinas',
              image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-09.jpg'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F4.png?alt=media&token=a9c6b891-281e-46dd-ab4d-0a9f91e9c521'
    },
    {
        id:2,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Nutricion',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-02.jpg'
    },
    {
        id:3,
        name: 'Dr Pedro',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Nutricion',
        image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F10.png?alt=media&token=c34171bb-a7d9-4c16-9a7c-557ce23921d4'
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
        image: 'https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500'
    },
    {
        id:5,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Salud',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-05.jpg'
    },
    {
        id:6,
        name: 'Dr Pablo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Salud',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-06.jpg'
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
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-07.jpg'
    },
    {
        id:8,
        name: 'Anonimo',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Medicinas',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-08.jpg'
    },
    {
        id:9,
        name: 'Dr Angel',
        time: 20,
        Likes: 8,
        answers: 2,
        theme: 'Medicinas',
        image: 'https://facelessapi.kiura.co/assets/avatars/Avatar-09.jpg'
    }
  ]);
});


app.get("/PopularDoctor", (req, res) => {
  res.send([
    {
      name: "Dr. Oswaldo P.",
      profession: "Psiquiatra",
      hour: "18",
      qualification: 9,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F4.png?alt=media&token=a9c6b891-281e-46dd-ab4d-0a9f91e9c521",
    },
    {
      name: "Dr. Andres P.",
      profession: "Psicóloga",
      hour: "17",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F14.png?alt=media&token=d8ef4d27-5076-42d6-b43e-5678df9ff26e",
    },
    {
      name: "Dr. Ana L.",
      profession: "Psiquiatra",
      hour: "12",
      qualification: 9,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F6.png?alt=media&token=444cc8b9-0035-4893-adf9-f273fd5be168",
    },
    {
      name: "Dr. Pedro D.",
      profession: "Terapeuta",
      hour: "13",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F10.png?alt=media&token=c34171bb-a7d9-4c16-9a7c-557ce23921d4",
    },
    {
      name: "Dra. Maria S.",
      profession: "Psicóloga",
      hour: "15",
      qualification: 9,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F1.png?alt=media&token=d90a9e3c-74c1-4aa1-94d4-22c9cda37bff",
    },
    {
      name: "Dr. Carlos M.",
      profession: "Psiquiatra",
      hour: "14",
      qualification: 7,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
    },
    {
      name: "Dr. Luis G.",
      profession: "Terapeuta",
      hour: "16",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F12.png?alt=media&token=763ead81-6dca-4f16-ad5a-c3d5ab6915ac",
    },
    {
      name: "Dr. Mario R.",
      profession: "Terapeuta",
      hour: "11",
      qualification: 7,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F15.png?alt=media&token=112dfe2e-af0a-47e1-9f88-f0e3be93aa84",
    },
    {
      name: "Dr. Juan S.",
      profession: "Terapeuta",
      hour: "10",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F3.png?alt=media&token=72f4a18e-1075-422f-bc35-47e9a0a17291",
    },
    {
      name: "Dra. Sofia F.",
      profession: "Psicóloga",
      hour: "19",
      qualification: 7,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F5.png?alt=media&token=196f931a-5f2f-473e-967d-0466f80c0a8b",
    }
  ]
  
  );
});


app.get("/10", (req, res) => {
  res.send([
    {
      name: "Dr. Oswaldo P.",
      profession: "Psiquiatra",
      hour: "18",
      qualification: 9,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F4.png?alt=media&token=a9c6b891-281e-46dd-ab4d-0a9f91e9c521",
      reviews: 20,
      About: 'psiquiatra altamente calificado y experimentado que se dedica a proporcionar atención integral a sus pacientes. Con una sólida formación académica y años de experiencia clínica, el Dr. Oswaldo se ha destacado en el campo de la psiquiatría, brindando apoyo emocional y tratamientos efectivos a aquellos que buscan mejorar su salud mental.',
    },
  ]);
});
app.get("/11", (req, res) => {
  res.send([
    {
      name: "Dr. Andres P.",
      profession: "Psicóloga",
      hour: "17",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F14.png?alt=media&token=d8ef4d27-5076-42d6-b43e-5678df9ff26e",
      reviews: 0,
      About: 'Psicóloga dedicada a proporcionar apoyo emocional y orientación a sus pacientes. Con una calificación de 8, el Dr. Andres tiene experiencia en el campo de la psicología, brindando tratamientos efectivos y soluciones prácticas para mejorar la salud mental.'
    },
  ]);
});
app.get("/12", (req, res) => {
  res.send([
    {
      name: "Dr. Ana L.",
      profession: "Psiquiatra",
      hour: "12",
      qualification: 9,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F6.png?alt=media&token=444cc8b9-0035-4893-adf9-f273fd5be168",
      reviews: 0,
      About: 'Ha demostrado su experiencia y dedicación en el campo de la psiquiatría. Aunque actualmente no está en línea, su historial refleja un compromiso con la salud mental de sus pacientes.'
    },
  ]);
});
app.get("/13", (req, res) => {
  res.send([
    {
      name: "Dr. Pedro D.",
      profession: "Terapeuta",
      hour: "13",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F10.png?alt=media&token=c34171bb-a7d9-4c16-9a7c-557ce23921d4",
      reviews: 0,
      About: 'Ofrece sesiones terapéuticas efectivas para abordar diversos problemas emocionales y psicológicos. Su disponibilidad en línea facilita el acceso a sus servicios.'
    },
  ]);
});
app.get("/14", (req, res) => {
  res.send([
    {
      name: "Dra. Maria S.",
      profession: "Psicóloga",
      hour: "15",
      qualification: 9,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F1.png?alt=media&token=d90a9e3c-74c1-4aa1-94d4-22c9cda37bff",
      reviews: 0,
      About: 'Se especializa en brindar apoyo psicológico a sus pacientes. Aunque actualmente no está en línea, su experiencia y enfoque compasivo la destacan en su campo.'
    },
  ]);
});
app.get("/15", (req, res) => {
  res.send([
    {
      name: "Dr. Carlos M.",
      profession: "Psiquiatra",
      hour: "14",
      qualification: 7,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F11.png?alt=media&token=01553851-4d93-40d5-9168-3c31db3ac500",
      reviews: 0,
      About: 'Ofrece servicios en línea para abordar problemas de salud mental. Con experiencia en el tratamiento de diversas condiciones, el Dr. Carlos brinda un enfoque integral a sus pacientes.'
    },
  ]);
});
app.get("/16", (req, res) => {
  res.send([
    {
      name: "Dr. Luis G.",
      profession: "Terapeuta",
      hour: "16",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F12.png?alt=media&token=763ead81-6dca-4f16-ad5a-c3d5ab6915ac",
      reviews: 0,
      About: 'Se dedica a proporcionar apoyo terapéutico a sus pacientes. Su presencia en línea facilita la accesibilidad a sus servicios, brindando ayuda a aquellos que buscan mejorar su bienestar emocional.'
    },
  ]);
});
app.get("/17", (req, res) => {
  res.send([
    {
      name: "Dr. Mario R.",
      profession: "Terapeuta",
      hour: "11",
      qualification: 7,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F15.png?alt=media&token=112dfe2e-af0a-47e1-9f88-f0e3be93aa84",
      reviews: 0,
      About: 'Ofrece servicios terapéuticos para abordar diversas preocupaciones emocionales. Aunque actualmente no está en línea, su experiencia clínica respalda la eficacia de sus tratamientos.'
    },
  ]);
});
app.get("/18", (req, res) => {
  res.send([
    {
      name: "Dr. Juan S.",
      profession: "Terapeuta",
      hour: "10",
      qualification: 8,
      online: true,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F3.png?alt=media&token=72f4a18e-1075-422f-bc35-47e9a0a17291",
      reviews: 0,
      About: 'Servicios terapéuticos en línea para abordar una variedad de problemas emocionales. Su enfoque compasivo y experiencia clínica respaldan la calidad de sus servicios.'
    },
  ]);
});
app.get("/19", (req, res) => {
  res.send([
    {
      name: "Dra. Sofia F.",
      profession: "Psicóloga",
      hour: "19",
      qualification: 7,
      online: false,
      photo: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/doctor%2F5.png?alt=media&token=196f931a-5f2f-473e-967d-0466f80c0a8b",
      reviews: 0,
      About: 'Se especializa en brindar apoyo psicológico a sus pacientes. Aunque actualmente no está en línea, su enfoque centrado en el paciente la destaca en el campo de la psicología.'
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