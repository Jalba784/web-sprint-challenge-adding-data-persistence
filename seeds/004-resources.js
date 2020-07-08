exports.seed = async function(knex) {
  await knex("resources").insert([
    { resource_name: "LA Times", description: "Prominent News Editorial" },
    {
      resource_name: "Standford Medical Journal",
      description: "Current version of journal"
    },
    {
      resource_name: "Lambda School",
      description: "Technologically innovative school"
    }
  ]);
};
