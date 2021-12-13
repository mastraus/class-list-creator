const service = require("./students.service.js");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

//lists students
async function list(req, res) {
    res.json({ data: await service.list() });
  }

//middleware to see if student exists
async function studentExists(req, res, next) {
    const { studentId } = req.params;
    const student = await service.read(studentId);
    if (student) {
      res.locals.student = student;
      return next();
    }
    return next({ status: 404, message: `Student cannot be found.` });
  }

//list just one student
async function read(req, res, next) {
    const knexInstance = req.app.get("db");
    const { student } = res.locals;
    res.json({ data: student });
  }

//create new student
async function create(req, res) {
    const student = ({
      student_name,
      sex,
      iep,
      ell,
      academic_scale,
      behavior_scale
    } = req.body.data);
    const createdStudent = await service.create(post);
    res.status(201).json({ data: createdStudent })
  }

  //update existing student
  async function update(req, res) {
    const updatedStudent = {
      ...req.body.data,
      student_id: res.locals.student.student_id,
    };
    const data = await service.update(updatedStudent);
    res.json({ data })
  }

  //delete student
  async function destroy(req, res) {
    const { student } = res.locals;
    await service.delete(student.student_id);
    res.sendStatus(204);
  }

module.exports = {
    list: asyncErrorBoundary(list),
    read: [asyncErrorBoundary(studentExists), asyncErrorBoundary(read)],
    create: asyncErrorBoundary(create),
    update: asyncErrorBoundary(update),
    delete: asyncErrorBoundary(destroy),
}