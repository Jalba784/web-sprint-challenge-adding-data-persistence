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
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("resources", tbl => {
    tbl.increments("id");
    tbl.string("resource_name").notNullable();
    tbl.text("description");
  });

  await knex.schema.createTable("projects_resources", tbl => {
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    tbl.primary(["project_id", "resource_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};
