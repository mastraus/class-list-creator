
exports.up = function(knex) {
  return knex.schema.createTable("students", (table) => {
      table.increments("student_id").primary();
      table.string("student_name");
      table.string("sex");
      table.boolean("iep");
      table.boolean("ell");
      table.integer("academic_scale");
      table.integer("behavior_scale");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("students");
};
