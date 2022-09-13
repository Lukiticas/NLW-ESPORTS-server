import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "lucas" },
    { id: 3, name: "rayane" },
    { id: 5, name: "naasson" },
  ]);
});

app.listen(3333);
