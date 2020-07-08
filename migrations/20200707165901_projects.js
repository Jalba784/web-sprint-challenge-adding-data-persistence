exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments("id");
    tbl.string("project_name");
    tbl.text("description");
    tbl.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("tasks", tbl => {
    tbl.increments("id");
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("completed").defaultTo(false);
  });

  await knex.schema.createTable("resources", tbl => {
    tbl.increments("id");
    tbl.string("resource_name").notNullable();
    tbl.text("description");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};
