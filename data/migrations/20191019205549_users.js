exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
  });
};

exports.down = function(knex) {};
