
exports.seed = function(knex) {
  return knex('students').insert([
    {
      student_name: "Mark Flander",
      sex: "m",
      iep: false,
      ell: false,
      academic_scale: 3,
      behavior_scale: 1,
    },
    {
      student_name: "Sally Way",
      sex: "f",
      iep: true,
      ell: false,
      academic_scale: 2,
      behavior_scale: 2,
    },
    {
      student_name: "Linny Cook",
      sex: "f",
      iep: true,
      ell: true,
      academic_scale: 1,
      behavior_scale: 1,
    },
    {
      student_name: "Tom Banks",
      sex: "m",
      iep: false,
      ell: false,
      academic_scale: 2,
      behavior_scale: 3,
    },
  ])
};
