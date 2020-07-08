exports.seed = async function(knex) {
  await knex("projects").insert([
    {
      project_name: "Bed DIY",
      description: "Building a bed",
      completed: false
    },
    {
      project_name: "Scampi",
      description: "Making Shrimp Scampi",
      completed: false
    },
    {
      project_name: "Tuba",
      description: "Learn to play tuba",
      completed: false
    }
  ]);
};
