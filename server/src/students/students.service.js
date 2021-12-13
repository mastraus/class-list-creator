const knex = require("../db/connection");

//list all students
function list() {
    return knex("students").select("*");
  }

//list one student
function read(studentId) {
    return knex("students").select("*").where({ student_id: studentId }).first();
  }

//add new student
function create(student) {
    return knex("students")
    .insert(student, "*")
    .then((createdStudent) => createdStudent[0])
}

//delete student
function destroy(student_id) {
    return knex("students").where({ student_id }).del();
}

//update student
function update(updatedStudent) {
    return knex("students")
    .select("*")
    .where({student_id: updatedStudent.student_id})
    .update(updatedStudent, "*")
    .then((student) => student[0])
}

module.exports = {
    list,
    read,
    create,
    update,
    delete: destroy,
}