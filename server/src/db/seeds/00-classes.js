
exports.seed = function(knex) {
  return knex('classes').insert([
    {
      teacher: "Anna White"
    },
    {
      teacher: "Robert Dafney"
    },
  ])
};
