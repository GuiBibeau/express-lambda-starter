"use strict";

const express = require("express");

const app = express();

// Routes
app.get("/*", (req, res) => res.json({ message: "Hello world" }));

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Serverless Error");
});

module.exports = app;
