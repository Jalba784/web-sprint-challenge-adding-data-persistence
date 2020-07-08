const db = require("../data/config");

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects.js")
    .where("id", id)
    .first();
}

function findProjectResources(projId) {
  return db("projects_resources AS pr")
    .join("projects AS p", "p.id", "pr.project.id")
    .join("resources AS r", "r.id", "pr.resource_id")
    .where("p.id", projId)
    .select("r.id", "r.resource_name", "r.description", "p.project_name");
}

function findProjectTasks(taskId) {
  return db("tasks AS t")
    .join("projects AS p", "p.id", "t.project_id")
    .where("p.id", taskId)
    .select(
      "t.id",
      "t.description",
      "t.notes",
      "t.completed",
      "p.project_name"
    );
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(iden => {
      return findById(iden[0]);
    });
}

module.exports = {
  find,
  findById,
  findProjectResources,
  findProjectTasks,
  add
};
