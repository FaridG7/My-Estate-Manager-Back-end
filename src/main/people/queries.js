export const queries = {
  getPeople: "SELECT * FROM person",
  getOwners: "SELECT * FROM owner",
  getBuyers: "SELECT * FROM buyer",
  getRenters: "SELECT * FROM renter",
  getNonUsed: "SELECT * FROM nonused_person",
  getPerson: "SELECT * FROM person WHERE id = $1",
  updatePerson:
    "UPDATE person SET first_name = $2, last_name = $3, meli_code = $4, phone_number = $5 WHERE id = $1",
  insertPerson:
    "INSERT INTO person (first_name, last_name, meli_code, phone_number) VALUES ($1, $2, $3, $4)",
  deletePerson: "DELETE FROM person WHERE id = $1",
};
