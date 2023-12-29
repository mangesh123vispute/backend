require("dotenv").config();

const express = require("express");
const app = express();
const port = 4000;

const data = {
  person: {
    name: "John Doe",
    age: 30,
    city: "Example City",
    isStudent: false,
    address: {
      street: "123 Main St",
      zipCode: "12345",
      country: "Example Country",
    },
    skills: ["programming", "writing", "design"],
  },
  company: {
    name: "Tech Solutions Inc.",
    industry: "Technology",
    employees: 1000,
    locations: ["City A", "City B", "City C"],
  },
};

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/users", (req, res) => {
  res.send("users");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.get("/json", (req, res) => {
  res.json(data);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
