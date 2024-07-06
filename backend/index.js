import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";

const app = express();

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello from the server");
});

// route for save a new book 
app.post('/books', async (req, res) => {
  try {
    if(
      !request.body.title || 
      !request.body.author || 
      !request.body.publisherYear
    ) {
      return response.status(400).send({
        message: 'Send all required fields: title, author, publisherYear',
      });
    }
  } catch (error) {
    console.log(error.message);
    response.status(500).send({message: error.message{});
  }
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
