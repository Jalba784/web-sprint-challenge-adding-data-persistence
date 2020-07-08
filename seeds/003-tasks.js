exports.seed = async function(knex) {
  await knex("tasks").insert([
    {
      description: "Wash the car",
      notes: "Wash it at Chevron",
      completed: false
    },
    {
      description: "Pay the car Insurance",
      notes: "Check must be payable to Allstate",
      completed: false
    },
    { description: "Fill car with gas", notes: "Go to Arco", completed: false }
  ]);
};
