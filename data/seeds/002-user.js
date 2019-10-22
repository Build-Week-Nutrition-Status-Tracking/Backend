exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("user")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("user").insert([
        {
          username: "connor",
          password: "pass",
          admin: true,
          user_country_id: 1
        },
        {
          username: "Uzias",
          password: "pass",
          admin: true,
          user_country_id: 2
        },
        { username: "Lynn", password: "pass", admin: false, user_country_id: 2 }
      ]);
    });
};
