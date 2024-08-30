const express = require("express");
const app = express();
// Middleware
app.use(express.json());
let data = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// Routes
// Get Info
app.get("/api/persons/info", (req, res) => {
  const date = new Date();
  const entrees = data.length;
  const message = `Phonebook has info for ${entrees} people `;
  res.send(`<p>${message}</p>${date}`);
});
// GET all
app.get("/api/persons", (req, res) => {
  res.json(data);
});

// GET Single Person
app.get("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const person = data.find((p) => p.id === id);
  console.log("content: ");
  if (!person) {
    return res.status(400).json({
      error: "content missing",
    });
  }
  res.json(person);
});

// CREATE/POST Person
app.post("/api/persons", (req, res) => {
  //   const body = req.body;
  console.log(req.body);
  const { name, number } = req.body;
  const isExistingPerson = data.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (isExistingPerson) {
    return res
      .status(400)
      .json({ error: "The name already exists in the phonebook" });
  }

  const person = {
    id: String(Math.floor(Math.random() * 9999999)),
    name,
    number,
  };

  if (!person.name || !person.number) {
    return res.status(400).json({ error: "The name or number is missing" });
  }

  data = data.concat(person);
  res.json(person);
});

// DELETE Person
app.delete("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((p) => p.id !== id);
  res.status(204).end();
});

// LISTEN to open PORT
const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
