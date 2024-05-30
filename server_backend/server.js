const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const adminController = require("./controllers/adminController.js");
const Note = require("./model/note");
const requireAuth = require("./middleware/requireAuth");

// Express doesnt naturally convert our data to json
app.use(express.json());
app.use(cookieParser());
// ------------------------- Database_Connection
const connectToDb = require("./config/connectToDb");
connectToDb();

// Routing --> Remember to test in Postman
// -----------------------------------------------

app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.post("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);

// -----------------------------------------------

app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/notes", async (req, res) => {
  // Get all notes from database.
  const notes = await Note.find();
  // Send them as a response
  res.json({ notes: notes });
});
// +++++++++++++ {READ} ++++++++++++++

app.get("/notes/:id", async (req, res) => {
  // 1. Get id off the url
  // 2. Find the notes using that id
  // 3. Send response with that note as the payload
  const noteId = req.params.id;
  // ------------------------------(1)
  const note = await Note.findById(noteId);
  // ------------------------------(2)
  res.json({ note: note });
  // ------------------------------(3)
});
// +++++++++++++ {READ} ++++++++++++++

app.post("/notes", async (req, res) => {
  // 1. Get data from req.body
  // 2.Create Note by passing data above into model Schema
  // 3. Respond with copy of new Note
  const title = req.body.title;
  const body = req.body.body;
  // ------------------------------(1)
  const note = await Note.create({
    title: title,
    body: body,
  });
  // ------------------------------(2)
  res.json({ note: note });
  // ------------------------------(3)
});

// +++++++++++++ {CREATE} ++++++++++++++

app.put("/notes/:id", async (req, res) => {
  // 1.Get the id off the url
  // 2. Get the Data off the Body
  // 3. Find and update note
  // 4. Retrieve updatedNote and send it as a response

  const noteId = req.params.id;
  // ------------------------------(1)
  const title = req.body.title;
  const body = req.body.body;
  // ------------------------------(2)
  const note = await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });
  // ------------------------------(3)
  const updatedNote = await Note.findById(noteId);
  res.json({ note: updatedNote });
  // ------------------------------(4)
});
// +++++++++++++ {UPDATE} ++++++++++++++

app.delete("/notes/:id", async (req, res) => {
  // 1. Get id off url
  // 2. Delete the record
  // 3. Send a Response to confirm deletion
  const noteId = req.params.id;
  // ------------------------------(1)
  await Note.deleteOne({
    id: noteId,
  });
  // ------------------------------(2)
  res.json({ success: "Record Deleted Successfully" });
  // ------------------------------(3)
});
// +++++++++++++ {DELETE} ++++++++++++++
app.listen(PORT, () => {
  console.log(`Express Server: Running - Port: ${PORT}`);
});
// -----------------------------------> Server
