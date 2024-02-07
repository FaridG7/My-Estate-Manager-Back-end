export const queries = {
  getManagers: "SELECT id, access_level, manager_id, password FROM manager",
  getManager:
    "SELECT id, access_level, manager_id, password FROM manager WHERE manager_id = $1",
};
