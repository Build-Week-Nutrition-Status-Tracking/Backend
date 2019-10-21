exports.up = function(knex) {
  return (
    knex.schema
      //COUNTRY TABLE
      .createTable("country", tbl => {
        tbl.increments();

        tbl
          .string("country")
          .unique()
          .notNullable();
      })
      //USERS TABLE
      .createTable("user", tbl => {
        tbl.increments();

        tbl
          .string("username")
          .unique()
          .notNullable();
        tbl.string("password").notNullable();
        tbl.boolean("admin").default(false);
        tbl
          .integer("user_country_id")
          .unsigned()
          .references("id")
          .inTable("country");
      })
      //COMMUNITY TABLE
      .createTable("community", tbl => {
        tbl.increments();

        tbl
          .string("name")
          .unique()
          .notNullable();
        tbl
          .integer("country_id")
          .unsigned()
          .references("id")
          .inTable("country");
      })
      //CHILDREN TABLE
      .createTable("kids", tbl => {
        tbl.increments();

        tbl
          .integer("community_id")
          .unsigned()
          .references("id")
          .inTable("community");
        tbl
          .integer("country_id")
          .unsigned()
          .references("id")
          .inTable("country");
        tbl.string("child_name").notNullable();
        tbl.string("parent_name").notNullable();
        tbl.text("contact_info").notNullable();
        tbl.string("date_of_screening").notNullable();
        tbl.string("date_of_birth").notNullable();
        tbl.string("gender").notNullable();
        tbl.decimal("height").notNullable();
        tbl.integer("weight").notNullable();
      })
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("kids")
    .dropTableIfExists("community")
    .dropTableIfExists("user")
    .dropTableIfExists("country");
};
