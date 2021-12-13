
exports.up = function(knex) {
  return knex.schema.createTable("classes", (table) => {
      table.increments("class_id").primary();
      table.string("teacher");
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("classes");
};
