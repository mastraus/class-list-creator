const knex = require("../db/connection");

//list all classes from class database
function list() {
    return knex("classes").select("*")
}

//list only one classroom and it's student contents
function read(classId) {
    return knex("classes").select("*").where({class_id: classId}).first();
}

module.exports = {
    list,
    read,
}