exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("country")
  //   .truncate()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("country").insert([
    { country: "United States" },
    { country: "China" },
    { country: "Ghana" }
  ]);
  // });
};
