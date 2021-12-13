if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();

const classesRouter = require("./classes/classes.router");
const studentsRouter = require("./students/students.router");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());

app.use("/classes", classesRouter);
app.use("/students", studentsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;