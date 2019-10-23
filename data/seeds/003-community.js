exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex("community")
  //   .truncate()
  //   .then(function() {
  //     // Inserts seed entries
  return knex("community").insert([
    { name: "Muncie", country_id: 1 },
    { name: "Indy", country_id: 2 },
    { name: "Chicago", country_id: 2 }
  ]);
  // });
};
