const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://cartoon:cartoon@cluster0.nuu3kob.mongodb.net/cheat?retryWrites=true&w=majority");

const noteSeed = [
  {
    topic: "CSS",
    url: "w3schools.com",
    body: "CSS makes things look pretty.",
  },
  {
    topic: "HTML",
    url: "w3schools.com",
    body: "The skeleton of the internet.",
  },
  {
    topic: "React",
    url: "reactjs.org",
    body: "Front end framework created by some dude at Facebook.",
  },
];

db.Note.remove({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
