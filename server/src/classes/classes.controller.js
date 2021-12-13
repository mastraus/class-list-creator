const service = require("./classes.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res, next) {
    res.json({ data: await service.list() });
}

async function read(req, res, next) {
    const knexInstance = req.app.get("db");
    const {oneClass} = res.locals;
    res.json({ data: oneClass });
  }

module.exports = {
    list: [asyncErrorBoundary(list)],
    read: [asyncErrorBoundary(read)],
}